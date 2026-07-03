const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Dummy Data
let tasks = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Test Route
app.get("/test", (req, res) => {
  res.send("Test Route Working");
});

// GET All Tasks
app.get("/api/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// SEARCH Tasks (IMPORTANT: Keep this before /:id)
app.get("/api/tasks/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      message: "Please provide a search query",
    });
  }

  const result = tasks.filter((task) =>
    task.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(result);
});

// GET Task By ID
app.get("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  res.status(200).json(task);
});

// POST Create Task
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    name: req.body.name,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask,
  });
});

// PUT Update Task
app.put("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.name = req.body.name;

  res.status(200).json({
    message: "Task updated successfully",
    task,
  });
});

// DELETE Task
app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.status(200).json({
    message: "Task deleted successfully",
    task: deletedTask[0],
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});