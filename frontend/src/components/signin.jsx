import { useState } from "react"
import axios from "axios"
import { validateForm } from "../utils/validation"
import { Link, useNavigate } from "react-router-dom"

function Signin() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const updateField = (field, value) => {
        if (field === "name") setName(value)
        if (field === "email") setEmail(value)
        if (field === "password") setPassword(value)
        setErrors((current) => ({ ...current, [field]: "", form: "" }))
    }

    const handleSignin = async (event) => {
        event.preventDefault()
        const validationErrors = validateForm(email, password)
        if (!name.trim()) validationErrors.name = "Name is required"
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) return

        try {
            const API_URL = import.meta.env.VITE_API_URL
            const response = await axios.post(`${API_URL}/signin`, { name: name.trim(), email: email.trim(), password })
            navigate("/login", { state: { message: response.data.message } })
        } catch (error) {
            const message = error.response?.data?.message
                || (error.response
                    ? "Sign up failed. Please try again."
                    : "Unable to connect to the server. Make sure the backend is running on port 5000.")
            setErrors({ form: message })
        }
    }

    return (
        <div className="card">

            <span className="logo">ᨳଓ</span> <span className="brandName">Bloomy</span>
            <h2>Create an Account</h2>
            <p>Sign up to get started</p>

            <form className="form" onSubmit={handleSignin} noValidate>

                <label htmlFor="name">Name</label>
                <input id="name" value={name} onChange={(event) => updateField("name", event.target.value)} type="text" placeholder="Enter your name"
                    aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                {errors.name && <small className="field-error" id="name-error">{errors.name}</small>}

                <label htmlFor="email">Email</label>
                <input id="email" value={email} onChange={(event) => updateField("email", event.target.value)} type="email" placeholder="Enter your email"
                    aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                {errors.email && <small className="field-error" id="email-error">{errors.email}</small>}

                <label htmlFor="pwd">Password</label>
                <input id="pwd" value={password} onChange={(event) => updateField("password", event.target.value)} type="password" placeholder="Enter your password"
                    aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} />
                {errors.password && <small className="field-error" id="password-error">{errors.password}</small>}

                {errors.form && <p className="form-error" role="alert">{errors.form}</p>}

                <button type="submit">Sign up</button>
            </form>

            <p className="account-prompt">Already have an account? <Link to="/login">Login</Link></p>

        </div>
    )
}
export default Signin