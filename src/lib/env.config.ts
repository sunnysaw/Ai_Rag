const MONGO_URI = process.env.MONGO_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!MONGO_URI) {
  throw new Error("Missing environment variable: MONGO_URL");
}
if (!OPENAI_API_KEY) {
  throw new Error("Missing environment variable: OPENAI_API_KEY");
}

export const config = {
  MONGO_URI,
  OPENAI_API_KEY,
};
