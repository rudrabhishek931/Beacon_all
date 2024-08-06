// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Grid,
//   IconButton,
//   Tooltip,
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ShopIcon from '@mui/icons-material/Shop';
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';

// const ShopManagement = () => {
//   const [shops, setShops] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [editingShop, setEditingShop] = useState(null);
//   const [newShop, setNewShop] = useState({ shop_id: '', shopname: '', shop_no: '', contact_number: '', email: '' });

//   useEffect(() => {
//     setShops([
//       { shop_id: '005', shopname: 'Redtape', shop_no: '05', contact_number: '1245632789', email: 'asdfgh@gmail.com' },
//     ]);
//   }, []);

//   const handleOpenDialog = () => setOpenDialog(true);
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setNewShop({ shop_id: '', shopname: '', shop_no: '', contact_number: '', email: '' });
//     setEditingShop(null);
//   };

//   const handleInputChange = (e) => {
//     setNewShop({ ...newShop, [e.target.name]: e.target.value });
//   };

//   const handleSaveShop = () => {
//     if (editingShop) {
//       setShops(shops.map(shop => shop.id === editingShop.id ? newShop : shop));
//       setEditingShop(null);
//     } else {
//       setShops([...shops, { ...newShop, id: shops.length + 1 }]);
//     }
//     handleCloseDialog();
//   };

//   const handleEditShop = (shop) => {
//     setEditingShop(shop);
//     setNewShop(shop);
//     setOpenDialog(true);
//   };

//   const handleDeleteShop = (id) => {
//     setShops(shops.filter(shop => shop.id !== id));
//   };

//   return (
//     <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//       <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
//         <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
//         Shop Management
//       </Typography>

//       <Button
//         variant="contained"
//         startIcon={<AddIcon />}
//         onClick={handleOpenDialog}
//         sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
//       >
//         Add New Shop
//       </Button>

//       <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: '#34495e' }}>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop Id</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop Name</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop No</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Contact Number</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
//               <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {shops.map((shop) => (
//               <TableRow key={shop.id}>
//                 <TableCell>{shop.shop_id}</TableCell>
//                 <TableCell>{shop.shopname}</TableCell>
//                 <TableCell>{shop.shop_no}</TableCell>
//                 <TableCell>{shop.contact_number}</TableCell>
//                 <TableCell>{shop.email}</TableCell>
                // <TableCell align="center">
                //   <Tooltip title="Edit">
                //     <IconButton color="primary" onClick={() => handleEditShop(shop)}>
                //       <EditIcon />
                //     </IconButton>
                //   </Tooltip>
                //   <Tooltip title="Delete">
                //     <IconButton color="error" onClick={() => handleDeleteShop(shop.id)}>
                //       <DeleteIcon />
                //     </IconButton>
                //   </Tooltip>
                // </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#2c3e50', color: 'white' }}>
//           <AddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
//           {editingShop ? 'Edit Shop' : 'Add New Shop'}
//         </DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} mt={2}>
//             {/* <Grid item xs={12}>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 name="shop_id"
//                 label="Shop Id"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 value={newShop.shop_id}
//                 onChange={handleInputChange}
//                 InputProps={{
//                   startAdornment: <PersonIcon color="action" />,
//                 }}
//               />
//             </Grid> */}
//             <Grid item xs={12}>
//               <TextField
//                 margin="dense"
//                 name="shopname"
//                 label="Shop Name"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 value={newShop.shopname}
//                 onChange={handleInputChange}
//                 InputProps={{
//                   startAdornment: <ShopIcon color="action" />,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 margin="dense"
//                 name="shop_no"
//                 label="Shop No"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 value={newShop.shop_no}
//                 onChange={handleInputChange}
//                 InputProps={{
//                   startAdornment: <FormatListNumberedIcon color="action" />,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 margin="dense"
//                 name="contact_number"
//                 label="Contact Number"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 value={newShop.contact_number}
//                 onChange={handleInputChange}
//                 InputProps={{
//                   startAdornment: <CallIcon color="action" />,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 margin="dense"
//                 name="email"
//                 label="Email"
//                 type="text"
//                 fullWidth
//                 variant="outlined"
//                 value={newShop.email}
//                 onChange={handleInputChange}
//                 InputProps={{
//                   startAdornment: <EmailIcon color="action" />,
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
//           <Button onClick={handleSaveShop} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
//             {editingShop ? 'Save Changes' : 'Add Shop'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default ShopManagement;
//------------------------------------------------------------------------------------------------



import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';

const ShopTable = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [newShop, setNewShop] = useState({
    shop_name: '',
    shop_no: '',
    category: 1,
    contact_number: '',
    email: '',
    org_id: 1
  });

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('https://beacon-cz70.onrender.com/api/shops', {
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNpdF9zdXBlcmFkbWluIiwiaWF0IjoxNzIyODM4OTY1LCJleHAiOjE3MjI5MjUzNjV9.qaD4b4q5lfHhV23sWf0d5fnpKODM2tJ2Y_D36T3HOI4'
          }
        });
        
        setShops(response.data.data || []);
      } catch (err) {
        setError('Error fetching shops');
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShop((prevShop) => ({ ...prevShop, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log('Submitting form:', newShop); // Log form data

    let data = JSON.stringify(newShop);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://beacon-cz70.onrender.com/api/shop',
      headers: { 
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNpdF9zdXBlcmFkbWluIiwiaWF0IjoxNzIyODM4OTY1LCJleHAiOjE3MjI5MjUzNjV9.qaD4b4q5lfHhV23sWf0d5fnpKODM2tJ2Y_D36T3HOI4', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    try {
      const response = await axios.request(config);
      console.log('Response from server:', response.data); // Log server response

      setShops((prevShops) => [...prevShops, response.data]);
      setOpen(false);
      setNewShop({
        shop_name: '',
        shop_no: '',
        category: 1,
        contact_number: '',
        email: '',
        org_id: 1
      });
    } catch (err) {
      console.error('Error adding shop:', err.response?.data || err.message); // Log error details
      setError(`Error adding shop: ${err.response?.data?.message || err.message}`);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#2c3e50' }}>
        Shop Management
      </Typography>

      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Shop
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Shop</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Shop Name"
            name="shop_name"
            value={newShop.shop_name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Shop No"
            name="shop_no"
            value={newShop.shop_no}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Contact Number"
            name="contact_number"
            value={newShop.contact_number}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={newShop.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Organization ID"
            name="org_id"
            value={newShop.org_id}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Shop ID</TableCell>
              <TableCell>Shop Name</TableCell>
              <TableCell>Shop No</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops.map((shop) => (
              <TableRow key={shop.shop_id}>
                <TableCell>{shop.shop_id}</TableCell>
                <TableCell>{shop.shop_name}</TableCell>
                <TableCell>{shop.shop_no}</TableCell>
                <TableCell>{shop.contact_number}</TableCell>
                <TableCell>{shop.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShopTable;
