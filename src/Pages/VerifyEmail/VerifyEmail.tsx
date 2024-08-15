import { useLocation, useNavigate } from 'react-router-dom';
import { client } from '../../api/apiClient';
import { Button, Card, CardContent, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const useStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'grid',
    gap: '50px',
    maxWidth: '300px',
    marginTop: '50px',
  },
}));

export const VerifyEmail = () => {
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const activationCode = queryParams.get('activationCode');

  if (!activationCode) {
    return;
  }

  const handleActivate = async () => {
    try {
      const response = await client.users.activate.query(activationCode);
      setRegistrationStatus(response.success); // Activation successful
    } catch (error) {
      console.log('Full error:', error);

      // Detailed error logging
      console.log('Error name:', error.name);
      console.log('Error message:', error.message);
      console.log('Error stack:', error.stack);

      if (error?.message?.includes('has been used')) {
        // TODO -> investigate why the case where the account was already activated does not work -> it always display the 'else' case
        // TODO -> check why Error message: Unable to transform response from server instead of "the code has been used"
        // TODO -> display a message specific message when activation failed (already used or something else failed) instead of 'alert'
        alert(
          'This activation code has already been used. Please check your code or contact support.'
        );
      } else {
        alert('An error occurred during activation. Please try again later.');
      }
    }
  };

  const redirectToLoginPage = () => {
    navigate('/');
  };

  return (
    <Card>
      <CardContent
        sx={{
          textAlign: 'left',
        }}
      >
        <div className={classes.container}>
          {!registrationStatus ? (
            <>
              {' '}
              <div>
                Hello! Click on the button below in order to activate your
                account. The link is available maximum 24 hours!
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleActivate}
              >
                Complete Registration
              </Button>
            </>
          ) : (
            <>
              {' '}
              <div>
                Your registration is complete! We activated your account! Click
                on the button bellow and you’ll be redirected to login page!
                Enjoy!
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={redirectToLoginPage}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
