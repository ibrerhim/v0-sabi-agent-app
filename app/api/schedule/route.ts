import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import Schedule from "@/models/Schedule"

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

    const schedules = await Schedule.find({ userId: user._id }).populate("contentId")

    return NextResponse.json({ schedules })
  } catch (error) {
    console.error("Error fetching schedules:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { contentId, scheduledTime, platform } = await request.json()

    await connectDB()

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    const schedule = await Schedule.create({
      userId: user._id,
      contentId,
      scheduledTime,
      platform,
      status: "pending",
    })

    return NextResponse.json({ schedule }, { status: 201 })
  } catch (error) {
    console.error("Error creating schedule:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
