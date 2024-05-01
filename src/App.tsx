import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
