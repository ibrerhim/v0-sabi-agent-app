import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { connectDB } from "@/lib/db"
import User from "@/models/User"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { platform, accessToken } = await request.json()

    await connectDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Update user connection status
    if (platform === "whatsapp") {
      user.whatsappConnected = true
    } else if (platform === "instagram") {
      user.instagramConnected = true
    }

    await user.save()

    return NextResponse.json({
      message: `${platform} connected successfully`,
      platform,
    })
  } catch (error) {
    console.error("Error connecting social account:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { platform } = await request.json()

    await connectDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Update user connection status
    if (platform === "whatsapp") {
      user.whatsappConnected = false
    } else if (platform === "instagram") {
      user.instagramConnected = false
    }

    await user.save()

    return NextResponse.json({
      message: `${platform} disconnected successfully`,
      platform,
    })
  } catch (error) {
    console.error("Error disconnecting social account:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
