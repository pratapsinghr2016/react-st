import express from "express";
import client from "./client.js";

const app = express()
const port = 8088

app.use(express.json())

app.get("/", (req, res) => {
  client.GetAll({}, (err, data) => {
    if (err) return res.status(500).send(err.message);
    res.send(data.customers)
  })
})

app.post("/create", (req, res) => {
  const payload = {
    id: Date.now().toString(),
    name: req.body.name,
    age: req.body.age,
    address: req.body.address
  }

  client.Insert(payload, (err, data) => {
    if (err) return res.status(500).send(err.message);
    res.send({ message: "customer added" })
  })
})

app.put("/update", (req, res) => {
  const payload = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address
  }

  client.Update(payload, (err, data) => {
    if (err) return res.status(500).send(err.message);
    res.send({ message: "customer updated" })
  })
})


app.delete("/delete", (req, res) => {
  client.Delete({ id: req.body.id }, (err, data) => {
    if (err) return res.status(500).send(err.message);
    res.send({ message: "customer deleted" })
  })
})


app.listen(port, () => console.log(`Client Server running at posrt ${port}`))