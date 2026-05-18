import "dotenv/config";
import { server } from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8000 ;



const startServer = async () => {
  try {

    
    await connectDB();

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("❌ Server startup failed", error.message);
  }
};

startServer();