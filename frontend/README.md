Login and Sign Up Authentication

📌 Project Overview

This project is a simple and responsive Login and Sign Up application built using React.js and Express.js. It includes form validation to ensure users enter valid information before submitting the form.

🚀 Features

- Sign Up Page: Allows users to register using their name, email, and password.
- Login Page: Allows users to log in using their email and password.
- Form Validation: Displays error messages when required fields are empty or invalid.
- Email Validation: Checks whether the email address has a valid format.
- Password Validation: Ensures the password contains at least 6 characters.
- Name Validation: Ensures the name field is not empty during registration.
- Backend Validation: Validates user input on the server side.
- Responsive UI: Provides a user-friendly interface across different screen sizes.

🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Node.js
- Express.js
- Axios
- Font Awesome

📂 Project Structure

login-signup-project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   └── Signin.jsx
│   │   ├── utils/
│   │   │   └── validation.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── README.md

Note: Update the folder structure above to match your actual project.

✅ Validation Rules

Field| Validation
Name| Required during sign up
Email| Required and must have a valid email format
Password| Required and must contain at least 6 characters

Error messages are displayed when users submit empty fields or enter invalid information.

⚙️ Installation and Setup

1. Clone the Repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Set Up the Frontend

cd frontend
npm install
npm run dev

3. Set Up the Backend

Open another terminal:

cd backend
npm install
node server.js

Make sure the frontend API URL matches the backend server address and port configured in your project.

🎯 Learning Outcomes

- Understanding React components and state management using "useState".
- Handling form submissions and user input.
- Implementing client-side and server-side validation.
- Connecting a React frontend to an Express.js backend.
- Sending HTTP requests using Axios.
- Displaying validation errors dynamically.

🔮 Future Improvements

- Database integration for storing user accounts.
- Secure password hashing.
- JWT-based authentication.
- Protected dashboard and logout functionality.
- Improved form styling and user experience.

👩‍💻 Author

Jeya Chitra

- GitHub: "jeyachithra2001" (https://github.com/jeyachithra2001)
- LinkedIn: "jeyachithra29" (https://linkedin.com/in/jeyachithra29)

---

⭐ If you find this project useful, feel free to star the repository!