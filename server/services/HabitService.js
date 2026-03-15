const fs = require("fs");
const path = require("path");
const StreakService = require("./StreakService");

class HabitService {
  constructor() {
    this.filePath = path.join(__dirname, "../data/habits.json");
  }

  getRawHabits() {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data);
  }

  saveHabits(habits) {
    fs.writeFileSync(this.filePath, JSON.stringify(habits, null, 2));
  }

  getHabits() {
    const habits = this.getRawHabits();

    return habits.map((habit) => ({
      ...habit,
      ...StreakService.calculateStreaks(habit.completedDates),
    }));
  }

  createHabit(name, description = "") {
    const habits = this.getRawHabits();

    const newHabit = {
      id: Date.now().toString(),
      name,
      description,
      status: "active",
      completedDates: [],
    };

    habits.push(newHabit);
    this.saveHabits(habits);
    return newHabit;
  }

  checkInHabit(id, customDate) {
    const habits = this.getRawHabits();
    const habit = habits.find((h) => h.id === id);

    if (!habit) return null;

    const checkInDate =
      customDate && customDate.trim()
        ? customDate
        : new Date().toISOString().split("T")[0];

    if (!habit.completedDates.includes(checkInDate)) {
      habit.completedDates.push(checkInDate);
      habit.completedDates.sort();
    }

    this.saveHabits(habits);

    return {
      ...habit,
      ...StreakService.calculateStreaks(habit.completedDates),
    };
  }

  updateHabit(id, updatedData) {
    const habits = this.getRawHabits();
    const index = habits.findIndex((h) => h.id === id);

    if (index === -1) return null;

    habits[index] = { ...habits[index], ...updatedData };
    this.saveHabits(habits);
    return habits[index];
  }

  deleteHabit(id) {
    const habits = this.getRawHabits();
    const filteredHabits = habits.filter((h) => h.id !== id);

    this.saveHabits(filteredHabits);
    return true;
  }
}

module.exports = HabitService;