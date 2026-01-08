import cors from "cors";
import express from "express";

const app = express()
const PORT = 3002

app.use(cors())
app.use(express.json());

let todos = { messageId: "1", data: "initialData" }
const taskQueue = []

// GET
app.get("/get", (req, res) => {
  const messageId = req.query.id
  if (!messageId || messageId !== todos.messageId) {
    res.send({ todos })
  } else {
    // on recursive call the message id of this response will be in query param
    // so in next call it will be equal to the messageId passed 
    taskQueue.push(res)
  }
})

// PUT
app.put("/update", (req, res) => {
  const data = req.body;

  todos = { messageId: Date.now().toString(), data }

  while (taskQueue.length) {
    const currTask = taskQueue.pop();
    const newTodos = {
      todos: {
        messageId: Date.now().toString(),
        message: "queue task executed"
      }
    }
    currTask.send(newTodos)
  }

  res.status(201).send({
    message: "todo added",
  })
})



app.listen(PORT, () => console.log("node server is running at port " + PORT))