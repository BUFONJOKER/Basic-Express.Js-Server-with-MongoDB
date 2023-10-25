const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Define the route to add a new task
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  try {
    const task = new Task({ title, description });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a task' });
  }
});

module.exports = router;
