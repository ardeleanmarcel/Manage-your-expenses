import './App.css'

import Login from './Login/Login'
import { Typography } from '@mui/material'

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
