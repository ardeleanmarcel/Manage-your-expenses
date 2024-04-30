import {
  Button,
  Paper,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import './Login.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#7b1fa2', //palette.secondary.dark
      // light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#47008F',
    },
  },
})

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="container">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="contained" color="secondary">
            Login
          </Button>
          <div>You do not have an account? Register below</div>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </div>
      </Paper>
    </ThemeProvider>
  )
}
