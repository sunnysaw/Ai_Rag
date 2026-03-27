const MONGO_URI = process.env.MONGO_URL;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;
const CLOUD_API_ENVIRONMENT_VARIABLE =
  process.env.CLOUD_API_ENVIRONMENT_VARIABLE;

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
