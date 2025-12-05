import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import GeneratedContent from "@/models/GeneratedContent"
import CreditWallet from "@/models/CreditWallet"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { productId, productName, productType, targetAudience, platform } = await request.json()

    await connectDB()

    // Get user
    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Check credits
    const wallet = await CreditWallet.findOne({ userId: user._id })
    if (!wallet || wallet.balance < 1) {
      return NextResponse.json({ message: "Insufficient credits" }, { status: 400 })
    }

    // Generate content (mock AI - in production, integrate with actual AI service)
    const caption = `Introducing our amazing ${productName}! 🌟\n\nPerfect for ${targetAudience}, this ${productType} is crafted with excellence in mind.\n\nDon't miss out - Shop now!\n\n#SupportLocal #QualityProducts #${productName.replace(/\s+/g, "")}`
    const hashtags = [
      "#SupportLocal",
      "#QualityProducts",
      `#${productName.replace(/\s+/g, "")}`,
      "#MadeInAfrica",
      "#ShopLocal",
    ]

    // Create content record
    const generatedContent = await GeneratedContent.create({
      userId: user._id,
      productId: productId || null,
      caption,
      hashtags,
      platform,
      status: "draft",
      creditsUsed: 1,
    })

    // Deduct credits
    await CreditWallet.updateOne(
      { userId: user._id },
      {
        $inc: { balance: -1, totalSpent: 1 },
      },
    )

    return NextResponse.json(
      {
        message: "Content generated successfully",
        content: generatedContent,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error generating content:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
