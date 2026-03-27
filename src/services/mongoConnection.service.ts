// services/dbService.ts

import { connectMongo } from "@/src/config/mongoConnection.config";

export const connectDBService = async () => {
  try {
    await connectMongo();

    return {
      success: true,
      message: "DB Connected",
    };
  } catch (error) {
    return {
      success: false,
      error: "Connection failed",
    };
  }
};