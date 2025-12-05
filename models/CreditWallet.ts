import mongoose, { Schema, type Document } from "mongoose"

interface ICreditWallet extends Document {
  userId: string
  balance: number
  totalEarned: number
  totalSpent: number
  lastCreditPurchase?: Date
  createdAt: Date
  updatedAt: Date
}

const creditWalletSchema = new Schema<ICreditWallet>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    balance: { type: Number, default: 0 },
    totalEarned: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    lastCreditPurchase: { type: Date },
  },
  { timestamps: true },
)

export default mongoose.models.CreditWallet || mongoose.model<ICreditWallet>("CreditWallet", creditWalletSchema)
