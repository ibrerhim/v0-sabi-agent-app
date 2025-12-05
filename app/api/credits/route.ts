import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import CreditWallet from "@/models/CreditWallet"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const wallet = await CreditWallet.findOne({ userId: user._id })

    return NextResponse.json({ wallet })
  } catch (error) {
    console.error("Error fetching wallet:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { action, amount } = await request.json()

    await connectDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const wallet = await CreditWallet.findOne({ userId: user._id })

    if (action === "watch_ad") {
      await wallet.updateOne({
        $inc: { balance: 10, totalEarned: 10 },
      })
      return NextResponse.json({ message: "Ad credits added", balance: wallet.balance + 10 })
    }

    if (action === "purchase") {
      if (wallet.balance < amount) {
        return NextResponse.json({ message: "Insufficient credits" }, { status: 400 })
      }

      await wallet.updateOne({
        $inc: { balance: -amount, totalSpent: amount },
      })

      return NextResponse.json({ message: "Credits purchased", balance: wallet.balance - amount })
    }

    return NextResponse.json({ message: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Error updating wallet:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
