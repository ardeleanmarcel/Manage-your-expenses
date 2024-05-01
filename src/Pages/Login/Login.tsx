import { useNavigate } from 'react-router-dom'
import {
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'

import './Login.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082',
    },
  },
})

export default function Login() {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Typography variant="h4" component="h2" align="center">
          Manage Your Expenses
        </Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained" color="primary" disabled={true}>
          Login
        </Button>
        <div>You do not have an account? Register below</div>
        <Button variant="contained" color="primary" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </ThemeProvider>
  )
}
