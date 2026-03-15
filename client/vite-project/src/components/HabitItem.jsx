import { useState } from "react";

function HabitItem({ habit, onCheckIn, onDelete }) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleCheckIn = () => {
    onCheckIn(habit.id, selectedDate);
    setSelectedDate("");
  };

  return (
    <div className="habit-card">
      <h3>✅ {habit.name}</h3>
      <p className="habit-description">
        {habit.description || "No description added yet."}
      </p>

      <div className="habit-stats">
        <p>📌 Status: {habit.status}</p>
        <p>🔥 Current Streak: {habit.currentStreak}</p>
        <p>🏆 Longest Streak: {habit.longestStreak}</p>
      </div>

      <p className="completed-dates">
        📅 Completed Dates:{" "}
        {habit.completedDates.length > 0
          ? habit.completedDates.join(", ")
          : "None yet"}
      </p>

      <div className="demo-date-picker">
        <label htmlFor={`date-${habit.id}`}>📆 Demo check-in date:</label>
        <input
          id={`date-${habit.id}`}
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="habit-actions">
        <button className="done-btn" onClick={handleCheckIn}>
          ✅ Mark Done
        </button>
        <button className="delete-btn" onClick={() => onDelete(habit.id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default HabitItem;