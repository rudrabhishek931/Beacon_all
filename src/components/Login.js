import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Login = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://beacon-cz70.onrender.com/api/superadmin/login', credentials);
      localStorage.setItem('authToken', response.data.token);
      onLoginSuccess();
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" backgroundColor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 3, width: 400 }}>
        <Typography variant="h5" mb={2} textAlign="center">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            margin="dense"
            name="username"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          {error && <Typography color="error" mt={1}>{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
