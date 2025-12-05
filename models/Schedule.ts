import mongoose, { Schema, type Document } from "mongoose"

interface ISchedule extends Document {
  userId: string
  contentId: string
  scheduledTime: Date
  status: "pending" | "published" | "failed"
  platform: string
  createdAt: Date
  updatedAt: Date
}

const scheduleSchema = new Schema<ISchedule>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    contentId: { type: Schema.Types.ObjectId, ref: "GeneratedContent", required: true },
    scheduledTime: { type: Date, required: true },
    status: { type: String, enum: ["pending", "published", "failed"], default: "pending" },
    platform: { type: String, required: true },
  },
  { timestamps: true },
)

export default mongoose.models.Schedule || mongoose.model<ISchedule>("Schedule", scheduleSchema)
