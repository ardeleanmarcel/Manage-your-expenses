import { Typography } from '@mui/material'
import Login from './Pages/Login/Login'
import './App.css'

function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h2" align="center">
        Manage Your Expenses
      </Typography>
      <Login />
    </div>
  )
}

export default App
