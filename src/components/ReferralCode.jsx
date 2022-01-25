import React from 'react';
import {
  Container, CssBaseline, Box, Typography, Button, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function ReferralCode() {
  const navigation = useNavigate();

  const { referalText } = useSelector((state) => state.referal);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const action = { type: 'REFERAL_CHANGE', referalText: event.target.value };
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigation('/dashboard');
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 1,
          borderColor: 'primary.light',
          padding: 3,
          borderRadius: '2%',
        }}
      >
        <Typography component="h1" variant="h5">
          Change Referal Code
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
          <Box>
            <TextField
              error={false}
              margin="normal"
              fullWidth
              name="referal-code"
              label="Referal Code"
              type="text"
              id="referalCode"
              value={referalText}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, ml: 16 }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

// ReferralCode.defaultProps = {
//   referalText: null,
// };

// ReferralCode.propTypes = {
//   referalText: PropTypes.string,
// };
// { referalText }

export default ReferralCode;
