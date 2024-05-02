import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'
import {
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'

import './Login.css'
import { withFormik } from '../../formicHox'

const initialValues = {
  username: '',
  password: '',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082',
    },
  },
})

function Login() {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register')
  }

  const { handleBlur, handleChange, values, handleSubmit, isSubmitting } =
    useFormikContext<typeof initialValues>()

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <Typography variant="h4" component="h2" align="center">
            Manage Your Expenses
          </Typography>
          <TextField
            id="username"
            variant="outlined"
            label="Username"
            type="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Login
          </Button>
          <div>You do not have an account? Register below</div>
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </form>
    </ThemeProvider>
  )
}

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

const LoginWithFormik = withFormik(initialValues, handleSubmit, Login)

export default LoginWithFormik
