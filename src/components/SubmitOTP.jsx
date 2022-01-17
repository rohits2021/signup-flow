import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, CssBaseline, Box, Typography, Button, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function InputField({ name, length, handleChange }) {
  return (
    <TextField
      name={name}
      maxLength={length}
      onChange={handleChange}
      type="text"
      autoComplete="off"
      sx={{ width: 1 / 6, mr: 1, ml: 1 }}
      inputProps={{ style: { fontSize: 18 } }}
    />
  );
}

InputField.defaultProps = {
  name: null,
  length: null,
  handleChange: null,
};

InputField.propTypes = {
  name: PropTypes.string,
  length: PropTypes.string,
  handleChange: PropTypes.func,
};

function SubmitOTP() {
  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigation('/referalCode');
  };

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldIndex] = name.split('-')[1];
    const fieldIntIndex = parseInt(fieldIndex, 10);
    if (value.length >= maxLength) {
      if (fieldIntIndex < 4) {
        const nextfield = document.querySelector(`input[name=field-${fieldIntIndex + 1}]`);
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
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
        <Typography component="h1" variant="h5">
          OTP Submission Form
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
          <center>
            <InputField name="field-1" length="1" handleChange={handleChange} />
            <InputField name="field-2" length="1" handleChange={handleChange} />
            <InputField name="field-3" length="1" handleChange={handleChange} />
            <InputField name="field-4" length="1" handleChange={handleChange} />
          </center>
          <Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, ml: 14 }}
            >
              Submit OTP
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SubmitOTP;
