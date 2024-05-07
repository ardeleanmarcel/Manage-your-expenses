import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082',
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}
