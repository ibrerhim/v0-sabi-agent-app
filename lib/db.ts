import mongoose from "mongoose"

let isConnected = false

export async function connectDB() {
  if (isConnected) {
    console.log("MongoDB is already connected")
    return
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined")
  }

  const connection = await mongoose.connect(process.env.MONGODB_URI)

  isConnected = connection.connections[0].readyState === 1

  if (isConnected) {
    console.log("Connected to MongoDB")
  }

  return connection
}
