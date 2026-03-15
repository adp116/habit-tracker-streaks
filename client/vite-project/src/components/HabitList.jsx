import HabitItem from "./HabitItem";

function HabitList({ habits, onCheckIn, onDelete }) {
  if (habits.length === 0) {
    return <p>No habits yet. Add one to get started.</p>;
  }

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onCheckIn={onCheckIn}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default HabitList;