# 💰ExpenseBuddy - Expense Tracker Application
ExpenseBuddy is a web-based application built using the MERN stack (MongoDB, Express, React, Node.js) that helps users manage their expenses effectively. Users can register, log in, add, edit, delete, and view their expenses. It also provides data visualization for better analysis of spending patterns.


# ExpenseBuddy allows users to:

1. Register and log in to their account.
2. Add new expenses, edit or delete existing ones.
3. View all their expenses in a list.
4. Track total expenses and filter them by category.
5. Visualize expenses in charts and graphs to make informed financial decisions.

   
This app uses JWT (JSON Web Token) for user authentication and MongoDB to store user data and expenses securely.

# Installation Instructions
To run the project locally, follow these steps:

1. Clone the repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/nishtha-902/zoblik-project.git
cd zoblik-project
```

2. Install Backend Dependencies
Navigate to the server folder and install the required dependencies:

```bash
cd server
npm install
```

3. Install Frontend Dependencies
Navigate to the client folder and install the required dependencies:

```bash
cd client
npm install
```

4. Set Up Environment Variables
In the backend folder, create a .env file and set the necessary environment variables:

```bash
MONGO_URI=<your_url>
JWT_SECRET=<your_secret_key>
PORT=8001
```
 
You may need to replace MONGO_URI with your actual MongoDB connection string if you are using a cloud service.

5. Run the Project Locally
To run the backend, navigate to the server folder and start the server:

```bash
cd server
npm start
```

To run the frontend, navigate to the frontend folder and start the React app:
```bash
cd client
npm start
```

The backend should now be running on http://localhost:8001 and the frontend should be running on http://localhost:3000.

## Usage Guide
**User Authentication:**

1. Sign up with a valid email and password.
2. Login with your credentials and access your dashboard.

**Expense Management:**

1. Once logged in, you can add new expenses by specifying the amount, category, description, and date.
2. View your expenses listed in a table format.
3. Edit or delete any existing expenses.

**Data Visualization:**

1. The Dashboard page will show a pie chart of expenses by category and a total sum of all expenses.
