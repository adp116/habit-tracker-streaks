const express = require("express");
const cors = require("cors");
const habitsRoutes = require("./routes/habits");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Habit Tracker API running");
});

app.use("/habits", habitsRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});