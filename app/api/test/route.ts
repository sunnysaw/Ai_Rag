import { connectDBService } from "@/src/services/mongoConnection.services";

export async function GET() {
  const result = await connectDBService();

  return Response.json(result);
}