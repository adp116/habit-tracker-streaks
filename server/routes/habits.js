const express = require("express");
const router = express.Router();
const HabitService = require("../services/HabitService");

const habitService = new HabitService();

router.get("/", (req, res) => {
  const habits = habitService.getHabits();
  res.json(habits);
});

router.post("/", (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Habit name is required" });
  }

  const newHabit = habitService.createHabit(name, description);
  res.status(201).json(newHabit);
});

router.post("/:id/checkin", (req, res) => {
  const { date } = req.body || {};
  const updatedHabit = habitService.checkInHabit(req.params.id, date);

  if (!updatedHabit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  res.json(updatedHabit);
});

router.put("/:id", (req, res) => {
  const updatedHabit = habitService.updateHabit(req.params.id, req.body);

  if (!updatedHabit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  res.json(updatedHabit);
});

router.delete("/:id", (req, res) => {
  habitService.deleteHabit(req.params.id);
  res.json({ message: "Habit deleted successfully" });
});

module.exports = router;