import { Link, Navigate, useLocation } from "react-router-dom"

function Success() {
    const location = useLocation()
    const user = location.state?.user

    if (!user) return <Navigate to="/login" replace />

    return (
        <>
            <div className="successPage__brand">
                <span className="logo">ᨳଓ</span> <span className="brandName">Bloomy</span>
            </div>
            <div className="success__sec">
                <p>Login successful!</p>
                <h1>Welcome, {user.name}.</h1>
                <Link to="/login">Return to login</Link>
            </div>
        </>
    )
}
export default Success