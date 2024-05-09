import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gap: '50px',
  },
})

export default function Home() {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h2" align="center">
        Manage Your Expenses
      </Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained" color="primary" disabled={true}>
        Login
      </Button>
      <div>You do not have an account? Register below</div>
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </div>
  )
}
