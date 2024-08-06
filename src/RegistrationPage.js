import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  Tooltip,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';

// Styled components
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
  '& .MuiTableHead-root': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiTableCell-head': {
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
  },
  '& .MuiTableBody-root .MuiTableRow-root:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Header Component
const Header = () => (
  <Box sx={{ p: 2, backgroundColor: '#2c3e50', color: 'white' }}>
    <Typography variant="h6">Registration Form</Typography>
  </Box>
);

// Footer Component
const Footer = () => (
  <Box sx={{ p: 2, backgroundColor: '#2c3e50', color: 'white', textAlign: 'center' }}>
    <Typography variant="body2">© 2024 Beacon Inc.</Typography>
  </Box>
);

const UserRegistration = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    setUsers([
      { firstname: 'John', lastname: 'Doe', gender: 'Male', contact: '7894561230', email: 'john@example.com', username: 'example1', password: 'qwerty@12345'},
    ]);
  }, []);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewUser({ name: '', email: '', role: '' });
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    handleCloseDialog();
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: 1, p: 3, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
          <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
          Client  Registration
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
          sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
        >
          Add New User
        </Button>
        <StyledTableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#34495e' }}>
              
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>First Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Last Name</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Gender</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Contact Number</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Username</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Password</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.gender}</TableCell>
                  <TableCell>{user.contact}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit">
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#2c3e50', color: 'white' }}>
            <AddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            New Registration
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="firstname"
                  label=" First Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.name}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PersonIcon color="action" />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="lastname"
                  label=" Last Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.name}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PersonIcon color="action" />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="dense">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={newUser.gender}
                    onChange={handleInputChange}
                    label="Gender"
                    variant="outlined"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Transgender">Transgender</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="contact"
                  label="Contact Number"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.contact}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PersonIcon color="action" />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={newUser.email}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <EmailIcon color="action" />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="username"
                  label=" user Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.username}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PersonIcon color="action" />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  name="password"
                  label="Password"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.password}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <WorkIcon color="action" />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="confirmpassword"
                  label="Confirm Password"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={newUser.confirmpassword}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PersonIcon color="action" />,
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
            <Button onClick={handleAddUser} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
              Add User
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </Box>
  );
};

export default UserRegistration;
