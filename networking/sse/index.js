import cors from "cors";
import express from "express";

const app = express()
const PORT = 3002

app.use(cors());
app.use(express.json());


// GET
app.get("/sse", (req, res) => {

  // we set these 3 headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Cache", "no-cache");

  // always write to stream not res.send()
  // res.send() because its one time connection
  res.write(`data: Initial Data is Here \n\n`);


  const timerId = setInterval(() => {
    // here we usually write the DB connection and other business logic
    res.write(`data: Initial Data is Here ${Date.now()} \n\n`);
  }, 5000)

  res.on("close", () => clearInterval(timerId))


})

app.listen(PORT, () => console.log("node server is running at port " + PORT))