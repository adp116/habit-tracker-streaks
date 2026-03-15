import { useState } from "react";

function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    onAddHabit({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;