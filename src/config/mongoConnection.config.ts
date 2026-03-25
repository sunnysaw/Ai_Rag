import mongoose from "mongoose";
import dns from "dns";
import { config } from "../lib/env.config";


dns.setServers(["1.1.1.1", "8.8.8.8"]);

if (!config.MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}

let isConnected = false;

export const connectMongo = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(config.MONGO_URI);

    isConnected = db.connections[0].readyState === 1;

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};