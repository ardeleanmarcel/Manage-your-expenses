import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

import { Button, TextField, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { withFormik } from '../../withFormik'
import { useContext } from 'react'
import { ColorModeContext } from '../../App'

const initialValues = {
  username: '',
  password: '',
}

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: 'grid',
    gap: '50px',
  },
  title: {
    color: theme.palette.text.primary,
  },
  actionText: {
    color: theme.palette.text.secondary,
  },
}))

function Home() {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register')
  }

  const { handleChange, values, handleSubmit, isSubmitting } =
    useFormikContext<typeof initialValues>()

  const { toggleColorMode } = useContext(ColorModeContext)

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.container}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          className={classes.title}
        >
          Manage Your Expenses
        </Typography>
        <TextField
          id="username"
          variant="outlined"
          label="Username"
          type="username"
          name="username"
          onChange={handleChange}
          value={values.username}
          disabled={isSubmitting}
        />
        <TextField
          id="password"
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Login
        </Button>
        <div className={classes.actionText}>
          You do not have an account? Register below
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          disabled={isSubmitting}
        >
          Register
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </div>
    </form>
  )
}

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

const LoginWithFormik = withFormik(initialValues, handleSubmit, Home)

export default LoginWithFormik
