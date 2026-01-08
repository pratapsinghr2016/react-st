const PORT = 5000;

app.use(express.json());

// Simulate an event that triggers a webhook
app.get("/trigger-event", async (req, res) => {

  const webhookPayload = {
    event: "payment.success",
    data: { amount: 500, userId: "user_123" },
    timestamp: Date.now()
  };

  // Send webhook to the receiver
  const response = await fetch("http://localhost:4000/webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(webhookPayload)
  });

  const result = await response.json();
  console.log("Webhook sent, response:", result);

  res.json({ message: "Event triggered, webhook sent!" });
});

app.listen(PORT, () => console.log("Webhook sender running at port " + PORT));