const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://login-page-project-topaz.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())

const users = []

const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return typeof email === "string" && emailPattern.test(email.trim())
}

const validatePassword = (password) => {
    return typeof password === "string" && password.length >= 6
}

app.post("/signin", function (req, res) {
    const { name, email, password } = req.body || {}

    if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({ message: "Name is required" })
    }
    if (typeof email !== "string" || !email.trim()) {
        return res.status(400).json({ message: "Email is required" })
    }
    if (!validateEmail(email)) {
        return res.status(400).json({ message: "Please enter valid Email" })
    }
    if (typeof password !== "string" || !password) {
        return res.status(400).json({ message: "Password is required" })
    }
    if (!validatePassword(password)) {
        return res.status(400).json({ message: "Password must be at least 6 characters" })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const existingUser = users.find((user) => user.email === normalizedEmail)

    if (existingUser) {
        return res.status(409).json({ message: "Email already registered" })
    }

    const newUser = { id: Date.now().toString(), name: name.trim(), email: normalizedEmail, password }

    users.push(newUser)

    return res.status(201).json({ message: "Sign up successful" })
})

app.post("/login", function (req, res) {
    const { email, password } = req.body || {}

    if (typeof email !== "string" || !email.trim()) {
        return res.status(400).json({ message: "Email is required" })
    }
    if (!validateEmail(email)) {
        return res.status(400).json({ message: "Please enter valid Email" })
    }
    if (typeof password !== "string" || !password) {
        return res.status(400).json({ message: "Password is required" })
    }
    if (!validatePassword(password)) {
        return res.status(400).json({ message: "Password must be at least 6 characters" })
    }

    const normalizedEmail = email.trim().toLowerCase()
    const user = users.find((user) => user.email === normalizedEmail && user.password === password)

    if (!user) {
        return res.status(401).json({ message: "Incorrect email or password" })
    }

    return res.status(200).json({
        message: "Login successful",
        user: { id: user.id, name: user.name, email: user.email },
    })
})

if (require.main === module) {
    const PORT = process.env.PORT || 5000
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

module.exports = app