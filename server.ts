import app from "./app";
import { connectDB } from "./src/config/db";
import { env } from "./src/config/env";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(Number(env.port), () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();