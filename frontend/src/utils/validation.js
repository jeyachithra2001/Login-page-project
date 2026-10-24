//EMAIL VALIDATION
export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
        return "Email is required"
    }
    if (!emailPattern.test(email.trim())) {
        return "Please enter valid Email"
    }
    return ""
}

export const validatePassword = (password) => {
    if (!password) {
        return "Password is required"
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters"
    }
    return ""
}

export const validateForm = (email, password) => {
    const errors = {}

    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if(emailError){
        errors.email = emailError
    }
    if(passwordError){
        errors.password = passwordError
    }
    return errors
}