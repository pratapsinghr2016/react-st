import cors from "cors";
import express from "express";

const app = express()
const PORT = 3002

app.use(cors());
app.use(express.json());

let todos = "initial data"

// GET
app.get("/get", (req, res) => {
  res.send({ todos })
})

// PUT
app.put("/update", (req, res) => {
  const data = req.body;

  todos = data
  res.status(201).send({
    message: "updated",
  })
})


app.listen(PORT, () => console.log("node server is running at port " + PORT))