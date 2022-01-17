import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Signup({ referalText, handleReferalChange }) {
  const navigation = useNavigate();

  const [email, setEmail] = useState({ isvalid: false, value: '', message: '' });
  // eslint-disable-next-line
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  function emailValidation() {
    return !(!email.value || regex.test(email.value) === false);
  }
  const handleEmailChange = (event) => {
    const isEmailValid = emailValidation();
    setEmail({ value: event.target.value, isvalid: isEmailValid });
  };

  const [password, setPassword] = useState({
    valuepass: '',
    showValuePass: false,
  });
  const handlePassChange = () => (event) => {
    setPassword({ ...password, valuepass: event.target.value });
  };
  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showValuePass: !password.showValuePass,
    });
  };

  const [confirmPassword, setConfirmPassword] = useState({
    valueconfpass: '',
    showValueConfPass: false,
    isMatch: false,
  });
  const handleConfPassChange = (prop) => (event) => {
    const pass = password.valuepass;
    const conpass = event.target.value;
    if (pass !== conpass) {
      // eslint-disable-next-line max-len
      setConfirmPassword(() => ({ ...confirmPassword, isMatch: false, [prop]: event.target.value }));
    } else {
      setConfirmPassword(() => ({ ...confirmPassword, isMatch: true, [prop]: event.target.value }));
    }
  };
  const handleClickShowConfPassword = () => {
    setConfirmPassword({
      ...confirmPassword,
      showValueConfPass: !confirmPassword.showValueConfPass,
    });
  };

  const [showreferal, setShowReferal] = useState(false);
  function changeReferal() {
    setShowReferal(!showreferal);
  }

  const [formState, setFormState] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (event) => {
    setIsButtonClicked(true);
    event.preventDefault();
    if (email.isvalid && password.valuepass.length > 0 && confirmPassword.isMatch) {
      setFormState(true);
      navigation('/submitOTP');
    } else {
      setFormState(false);
      navigation('/');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 1,
          borderColor: 'primary.light',
          padding: 3,
          borderRadius: '2%',
        }}
      >
        <Avatar sx={{ bgcolor: 'secondary.light' }} />
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            sx={{ mb: 0 }}
            error={!email.isvalid && email.value.length > 0}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email.value}
            onChange={handleEmailChange}
          />
          { email.value.length
            ? (
              <span>
                {!email.isvalid
                  ? <span className="text-danger">Email is not valid</span>
                  : <span className="text-success">Email is valid</span>}
              </span>
            ) : null }
          <FormControl fullWidth sx={{ mt: 2 }} variant="outlined" required>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={password.showValuePass ? 'text' : 'password'}
              value={password.valuepass}
              onChange={handlePassChange('valuepass')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {password.showValuePass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirmpassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirmpassword"
              type={confirmPassword.showValueConfPass ? 'text' : 'password'}
              value={confirmPassword.valueconfpass}
              onChange={handleConfPassChange('valueconfpass')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfPassword}
                    edge="end"
                  >
                    {confirmPassword.showValueConfPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              label="Confirm Password"
            />
          </FormControl>
          { confirmPassword.valueconfpass.length > 0
            ? (
              <span>
                { confirmPassword.isMatch
                  ? <span className="text-success">Password matched</span> : <span className="text-danger">Password not matched</span>}
              </span>
            ) : null}
          <FormControlLabel
            sx={{ mt: 1, mb: -2 }}
            control={<Checkbox value="remember" color="secondary" onClick={() => { changeReferal(); }} />}
            label="Do you have Referal Code?"
          />
          { showreferal ? (
            <TextField
              error={false}
              margin="normal"
              fullWidth
              name="referal-code"
              label="Referal Code"
              type="text"
              id="referalCode"
              value={referalText}
              onChange={(event) => handleReferalChange(event.target.value)}
            />
          ) : '' }
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 1, ml: 16 }}
          >
            Get OTP
          </Button>
          { isButtonClicked
          && ((!email.isvalid && email.value.length)
          || (!confirmPassword.isMatch && confirmPassword.valueconfpass.length))
            ? (
              <span>
                { formState
                  ? null : <span className="text-danger">Oops! Please fill-up all fields correctly!</span>}
              </span>
            ) : null}
        </Box>
      </Box>
    </Container>
  );
}

Signup.defaultProps = {
  referalText: null,
  handleReferalChange: null,
};

Signup.propTypes = {
  referalText: PropTypes.string,
  handleReferalChange: PropTypes.func,
};
