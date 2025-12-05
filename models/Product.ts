import mongoose, { Schema, type Document } from "mongoose"

interface IProduct extends Document {
  userId: string
  name: string
  type: string
  imageUrl?: string
  description?: string
  price?: number
  createdAt: Date
  updatedAt: Date
}

const productSchema = new Schema<IProduct>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    imageUrl: { type: String },
    description: { type: String },
    price: { type: Number },
  },
  { timestamps: true },
)

export default mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema)
