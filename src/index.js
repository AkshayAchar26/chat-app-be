import { connectDb } from "./lib/db.js";
import { server } from "./socket.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;



server.listen(PORT, () => {
  console.log(`Application listening on: http://localhost:${PORT}`);
  connectDb();
});
