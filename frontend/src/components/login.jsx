import { useState } from "react"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { validateForm } from "../utils/validation"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    const updateField = (field, value) => {
        if (field === "email") setEmail(value)
        if (field === "password") setPassword(value)
        setErrors((current) => ({ ...current, [field]: "", form: "" }))
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const validationErrors = validateForm(email, password)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) return

        try {
            const API_URL = import.meta.env.VITE_API_URL
            const response = await axios.post(`${API_URL}/login`, { email: email.trim(), password })
            navigate("/success", { state: { user: response.data.user, message: response.data.message } })
        }
        catch (error) {
            console.error("Login error:", error)
            console.error("API URL:", import.meta.env.VITE_API_URL)
            console.error("Response:", error.response?.data)

            const message = error.response?.data?.message
                || (error.response
                    ? "Login failed. Please check your details."
                    : "Network error. Check the API URL, CORS, and Render server.")

            setErrors({ form: message })
        }
    }

    return (
        <div className="card__container">
        <div className="card">
            <span className="logo">ᨳଓ</span> <span className="brandName">Bloomy</span>
            <h2>Welcome Back</h2>
            <p>Enter your details to access your account</p>

            {location.state?.message && <p className="success-message" role="status">{location.state.message}</p>}
            <form className="form" onSubmit={handleLogin} noValidate>

                <label htmlFor="email">Email</label>
                <input id="email" value={email} onChange={(event) => updateField("email", event.target.value)} type="email" placeholder="Enter your Email"
                    aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                {errors.email && <small className="field-error" id="email-error">{errors.email}</small>}

                <label htmlFor="pwd">Password</label>
                <input id="pwd" value={password} onChange={(event) => updateField("password", event.target.value)} type="password" placeholder="Enter your Password"
                    aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} />
                {errors.password && <small className="field-error" id="password-error">{errors.password}</small>}

                {errors.form && <p className="form-error" role="alert">{errors.form}</p>}

                <button type="submit">Login</button>
            </form>

            <p className="account-prompt">Are you a new member? <Link to="/signin">Sign up</Link></p>

        </div>
        </div>
    )
}
export default Login