import Login from "./components/login"
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Signin from "./components/signin"
import Success from "./components/success"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
