import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());

// When a client connects
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for messages from this client
  socket.on("message", (msg) => {
    console.log("Received:", msg);

    // Broadcast to ALL clients (including sender)
    io.emit("message", msg);
  });

  // When client disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3002, () => console.log("Server running on port 3002"));