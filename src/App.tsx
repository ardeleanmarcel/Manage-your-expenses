import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

import Register from './Pages/Register/Register'
import LoginWithFormik from './Pages/Home/Home'
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginWithFormik />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
