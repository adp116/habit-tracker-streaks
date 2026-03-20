Overview

Habit Tracker + Streaks is a full-stack web application designed to help users build consistency and discipline by tracking daily habits. Users can create habits, mark them as completed, and view both their current and longest streaks. The application also includes a demo date feature that allows users to simulate check-ins across different days, making it easier to demonstrate how streak calculations work over time.

Features

The application allows users to create and manage habits, mark habits as completed for specific dates, and automatically calculate both current and longest streaks. Users can view a history of completed dates for each habit and delete habits when needed. The interface includes a clean and interactive layout with a dark theme and rotating motivational quotes, providing a more engaging user experience.

Technologies Used

The frontend of the application was built using React, with Axios used to handle communication between the client and server. The backend was developed using Node.js and Express to create RESTful API endpoints for managing habit data. Habit data is stored in a JSON file for simplicity. Git and GitHub were used for version control, and Figma was used during the design phase to plan the user interface.

Installation and Setup
Clone the repository to your local machine:
git clone https://github.com/YOUR_USERNAME/habit-tracker-streaks.git
cd habit-tracker-streaks
Install backend dependencies and start the server:
cd server
npm install
npx nodemon index.js
Install frontend dependencies and start the development server:
cd client/vite-project
npm install
npm run dev
Open the application in your browser at:
http://localhost:5173
How It Works

The application uses a modular backend structure where habit-related operations and streak calculations are separated into service classes. A streak calculation algorithm processes completion dates by sorting them and identifying consecutive sequences to determine both current and longest streaks. The frontend interacts with the backend through API calls, updating the interface dynamically whenever a user creates a habit, marks it as completed, or deletes it.

Future Improvements

Future enhancements could include adding user authentication, integrating a database for persistent storage, implementing progress visualization through charts, and improving mobile responsiveness. Additional features such as reminders, habit categories, and analytics could further enhance the usefulness of the application.
