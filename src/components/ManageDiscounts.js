import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Modal, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import images from '../utils/loadImages'; // Ensure the path is correct

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const ManageSingleDiscount = () => {
  const [discount, setDiscount] = useState({
    bgColor: '#FF6B6B',
    image: images['s1.jpg'], // Default image
    discountText: '20% OFF',
  });
  const [open, setOpen] = useState(false);
  const [newDiscount, setNewDiscount] = useState({
    bgColor: discount.bgColor,
    image: discount.image,
    discountText: discount.discountText,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateDiscount = () => {
    setDiscount(newDiscount);
    handleClose();
  };

  const handleImageChange = (event) => {
    setNewDiscount({ ...newDiscount, image: images[event.target.value] });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Update Discount
      </Button>
      <Box
        sx={{
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: discount.bgColor,
          backgroundImage: `url(${discount.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 4,
          mt: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 2,
            borderRadius: '10px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            width: '80%',
          }}
        >
          <VibrantTypography variant="h5" color="black" gutterBottom>
            {discount.offer}
          </VibrantTypography>
          <VibrantTypography variant="h4" color="black" gutterBottom>
            {discount.discountText}
          </VibrantTypography>
          <VibrantTypography variant="h6" color="black" gutterBottom>
            ON SELECTED PRODUCTS
          </VibrantTypography>
          <Button
            variant="contained"
            size="medium"
            sx={{
              mt: 2,
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)',
              },
            }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Update Discount
          </Typography>
          <TextField
            fullWidth
            value={newDiscount.offer}
            onChange={(e) => setNewDiscount({ ...newDiscount, offer: e.target.value })}
            label="Offer"
            margin="normal"
          />
          <TextField
            fullWidth
            value={newDiscount.discountText}
            onChange={(e) => setNewDiscount({ ...newDiscount, discountText: e.target.value })}
            label="Discount Text"
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="image-select-label">Select Image</InputLabel>
            <Select
              labelId="image-select-label"
              value={Object.keys(images).find(key => images[key] === newDiscount.image)}
              onChange={handleImageChange}
              label="Select Image"
            >
              {Object.keys(images).map((imageName) => (
                <MenuItem key={imageName} value={imageName}>
                  {imageName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button onClick={handleUpdateDiscount} variant="contained" color="primary" sx={{ mt: 2 }}>
            Update Discount
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManageSingleDiscount;
