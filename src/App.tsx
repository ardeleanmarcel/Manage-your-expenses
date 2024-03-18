import './App.css'

import Expenses from './ExpensesColumns/ExpensesColumns'
import { Typography } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Typography variant="h4" component="h2" align="center">
        Manage Your Expenses
      </Typography>
      <Expenses />
    </div>
  )
}

export default App
