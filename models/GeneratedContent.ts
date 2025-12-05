import mongoose, { Schema, type Document } from "mongoose"

interface IGeneratedContent extends Document {
  userId: string
  productId: string
  caption: string
  hashtags: string[]
  imageUrl?: string
  platform: "instagram" | "whatsapp" | "twitter" | "facebook"
  status: "draft" | "scheduled" | "posted"
  scheduledFor?: Date
  postedAt?: Date
  creditsUsed: number
  createdAt: Date
  updatedAt: Date
}

const generatedContentSchema = new Schema<IGeneratedContent>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    caption: { type: String, required: true },
    hashtags: [{ type: String }],
    imageUrl: { type: String },
    platform: { type: String, enum: ["instagram", "whatsapp", "twitter", "facebook"], required: true },
    status: { type: String, enum: ["draft", "scheduled", "posted"], default: "draft" },
    scheduledFor: { type: Date },
    postedAt: { type: Date },
    creditsUsed: { type: Number, default: 1 },
  },
  { timestamps: true },
)

export default mongoose.models.GeneratedContent ||
  mongoose.model<IGeneratedContent>("GeneratedContent", generatedContentSchema)
