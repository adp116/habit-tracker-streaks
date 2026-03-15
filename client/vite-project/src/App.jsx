import { useEffect, useState } from "react";
import axios from "axios";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import "./index.css";
import goggins from "./assets/davidgoggins.jpg";

function App() {
  const [habits, setHabits] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "💪 Stay hard.",
    "🚤 Who's gonna carry the boats?",
    "🔥 Don't stop when you're tired. Stop when you're done.",
    "🧠 Be more than motivated. Be driven.",
    "⚡ Greatness pulls mediocrity into the mud. Get better.",
    "🏃 Suffering is the true test of life.",
    "🥶 The only way to grow is to face discomfort.",
    "👊 You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.",
  ];

  const fetchHabits = async () => {
    try {
      const response = await axios.get("http://localhost:5000/habits");
      setHabits(response.data);
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const addHabit = async (habitData) => {
    try {
      await axios.post("http://localhost:5000/habits", habitData);
      fetchHabits();
    } catch (error) {
      console.error("Error adding habit:", error);
    }
  };

  const checkInHabit = async (id, date = "") => {
    try {
      await axios.post(`http://localhost:5000/habits/${id}/checkin`, { date });
      fetchHabits();
    } catch (error) {
      console.error("Error checking in habit:", error);
    }
  };

  const deleteHabit = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/habits/${id}`);
      fetchHabits();
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  return (
    <div className="page">
      <div className="background-overlay"></div>

      <div className="app-layout">
        <aside className="goggins-panel">
          <img src={goggins} alt="David Goggins" className="goggins-image" />
          <h2>🏆 Discipline Mode</h2>
          <p className="rotating-quote">{quotes[quoteIndex]}</p>
          <div className="side-tags">
            <span>🔥 No excuses</span>
            <span>💯 Stay locked in</span>
            <span>⚔️ Earn your streak</span>
          </div>
        </aside>

        <main className="app">
          <h1>🔥 Habit Tracker + Streaks</h1>
          <p className="subtitle">
            Build discipline one day at a time. 🧠⚡
          </p>

          <HabitForm onAddHabit={addHabit} />
          <HabitList
            habits={habits}
            onCheckIn={checkInHabit}
            onDelete={deleteHabit}
          />
        </main>
      </div>
    </div>
  );
}

export default App;