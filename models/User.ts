import mongoose, { Schema, type Document } from "mongoose"

interface IUser extends Document {
  name: string
  email: string
  password?: string
  image?: string
  credits: number
  totalCredits: number
  emailVerified?: Date
  googleId?: string
  whatsappConnected: boolean
  instagramConnected: boolean
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    credits: { type: Number, default: 100 },
    totalCredits: { type: Number, default: 100 },
    emailVerified: { type: Date },
    googleId: { type: String },
    whatsappConnected: { type: Boolean, default: false },
    instagramConnected: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema)
