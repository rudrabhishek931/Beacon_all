import React, { useState } from 'react';
import { Box, Typography, Button, useMediaQuery, Modal } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import img1 from '../assets/images//s1.jpg';
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

const carouselItems = [
  { bgColor: '#FF6B6B', image: img1, discount: '50% OFF on all items!' },
  { bgColor: '#4ECDC4', image: img2, discount: 'Buy 1 Get 1 Free!' },
  { bgColor: '#45B7D1', image: img3, discount: '20% OFF on electronics!' },
  { bgColor: '#FF6B6B', image: img4, discount: 'Special Discount on Shoes!' },
  { bgColor: '#4ECDC4', image: img5, discount: 'Clearance Sale: Up to 70% OFF!' },
  { bgColor: '#45B7D1', image: img6, discount: 'Exclusive Offer for Members!' },
];

const Buy2Get1FreeComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [currentDiscount, setCurrentDiscount] = useState('');

  const handleOpen = (discount) => {
    setCurrentDiscount(discount);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentDiscount('');
  };

  return (
    <div>
      <Carousel>
        {carouselItems.map((item, index) => (
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
            onClick={() => handleOpen(item.discount)}
          >
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                padding: theme.spacing(2),
                borderRadius: '10px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <VibrantTypography variant={isMobile ? "h4" : "h2"} color="black" gutterBottom>
                SPECIAL OFFER!
              </VibrantTypography>
              <VibrantTypography variant={isMobile ? "h3" : "h1"} color="black" gutterBottom>
                {item.discount}
              </VibrantTypography>
              <Button
                variant="contained"
                size={isMobile ? "medium" : "large"}
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
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Special Discount
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {currentDiscount}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Buy2Get1FreeComponent;
