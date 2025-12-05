import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import CreditWallet from "@/models/CreditWallet"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    await connectDB()

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 })
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password, // In production, hash the password
      credits: 100,
      totalCredits: 100,
    })

    // Create credit wallet
    await CreditWallet.create({
      userId: user._id,
      balance: 100,
      totalEarned: 100,
      totalSpent: 0,
    })

    return NextResponse.json({ message: "User registered successfully", userId: user._id }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
