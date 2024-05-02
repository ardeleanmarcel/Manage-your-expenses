import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './Pages/Register/Register'
import './App.css'
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
