import express from "express";

const app = express()
const PORT = 3002

app.use(express.json());

let todos = [
  {
    id: "1",
    name: "Hello world"
  },
  {
    id: "2",
    name: "Hello world 2"
  }
]

// GET
app.get("/todo", (req, res) => {
  res.send(todos)
})

// PUT
app.put("/todo", (req, res) => {
  const data = req.body;

  todos.push(data)
  res.status(201).send({
    message: "todo added",
  })
})

// POST
app.post("/todo", (req, res) => {
  const { id } = req.query;
  const body = req.body;

  todos.forEach((item, idx) => {
    if (item.id == id) {
      todos[idx] = {
        ...item,
        ...body
      }
    }
  })


  res.send({
    status: 200,
    message: "data updated"
  })
})

// PATCH
app.patch("/todo", (req, res) => {
  const { id } = req.query;
  const body = req.body;

  todos.forEach((item, idx) => {
    if (item.id == id) {
      todos[idx] = {
        ...item,
        ...body
      }
    } else {
      throw "invalid id"
    }
  })

  res.send({
    status: 200,
    message: "data patched"
  })
})

app.delete("/todo", (req, res) => {
  const { id } = req.query;
  todos = todos.filter((item) => item.id != id)

  res.send({
    status: 200,
    message: "data deleted"
  })
})


app.listen(PORT, () => console.log("node server is running at port " + PORT))