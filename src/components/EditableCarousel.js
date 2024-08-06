import React, { useState } from 'react';
import { Box, Typography, Button, useMediaQuery, Modal, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import img1 from '../assets/images/s1.jpg';
import img2 from '../assets/images/s2.jpg';
import img3 from '../assets/images/s3.jpg';
import img4 from '../assets/images/s4.jpg';
import img5 from '../assets/images/s5.jpg';
import img6 from '../assets/images/s6.jpg';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const initialDiscounts = [
  { bgColor: '#FF6B6B', image: img1, discount: '20% OFF' },
  { bgColor: '#4ECDC4', image: img2, discount: '30% OFF' },
  { bgColor: '#45B7D1', image: img3, discount: '40% OFF' },
  { bgColor: '#FF6B6B', image: img4, discount: '50% OFF' },
  { bgColor: '#4ECDC4', image: img5, discount: '60% OFF' },
  { bgColor: '#45B7D1', image: img6, discount: '70% OFF' },
];

const EditableCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [discounts, setDiscounts] = useState(initialDiscounts);
  const [open, setOpen] = useState(false);
  const [currentDiscount, setCurrentDiscount] = useState({});
  const [newDiscountValue, setNewDiscountValue] = useState('');

  const handleOpen = (discount) => {
    setCurrentDiscount(discount);
    setNewDiscountValue(discount.discount);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setDiscounts((prev) =>
      prev.map((d) =>
        d.image === currentDiscount.image ? { ...d, discount: newDiscountValue } : d
      )
    );
    handleClose();
  };

  return (
    <>
      <Carousel>
        {discounts.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: isMobile ? '300px' : '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: item.bgColor,
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: isMobile ? theme.spacing(2) : theme.spacing(4),
            }}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: theme.spacing(2),
                borderRadius: '10px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                width: '80%',
              }}
              onClick={() => handleOpen(item)}
            >
              <VibrantTypography variant={isMobile ? 'h4' : 'h2'} color="black" gutterBottom>
                SPECIAL OFFER!
              </VibrantTypography>
              <VibrantTypography variant={isMobile ? 'h3' : 'h1'} color="black" gutterBottom>
                {item.discount}
              </VibrantTypography>
              <VibrantTypography variant={isMobile ? 'h5' : 'h3'} color="black" gutterBottom>
                ON SELECTED PRODUCTS
              </VibrantTypography>
              <Button
                variant="contained"
                size={isMobile ? 'medium' : 'large'}
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
        ))}
      </Carousel>
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
            Edit Discount
          </Typography>
          <TextField
            fullWidth
            value={newDiscountValue}
            onChange={(e) => setNewDiscountValue(e.target.value)}
            label="Discount"
            margin="normal"
          />
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditableCarousel;
