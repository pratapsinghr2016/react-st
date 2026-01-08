import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

// This endpoint receives webhook events
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  // Do something with the data (save to DB, send notification, etc.)

  res.status(200).json({ received: true });
});

app.listen(PORT, () => console.log("Webhook receiver running at port " + PORT));