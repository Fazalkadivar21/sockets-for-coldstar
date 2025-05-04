import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import registerSockets from "./sockets";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // frontend origin
    methods: ["GET", "POST"]
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Socket.IO with TypeScript!</h1>");
});

registerSockets(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
