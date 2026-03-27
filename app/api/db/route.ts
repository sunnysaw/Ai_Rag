import { connectDBService } from "@/src/services/mongoConnection.service";

export async function GET() {
  const result = await connectDBService();

  return Response.json(result);
}