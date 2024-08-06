import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Modal } from '@mui/material';
import { styled } from '@mui/system';

const VibrantTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}));

const EditableItem = ({ item, onUpdateItem }) => {
  const [open, setOpen] = useState(false);
  const [newContent, setNewContent] = useState(item.content);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    onUpdateItem(item.id, newContent);
    handleClose();
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 2,
        borderRadius: '10px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 2,
        cursor: 'pointer',
      }}
      onClick={handleOpen}
    >
      <VibrantTypography variant="h5" color="black" gutterBottom>
        {item.title}
      </VibrantTypography>
      <VibrantTypography variant="h6" color="black" gutterBottom>
        {item.content}
      </VibrantTypography>
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
            Edit Content
          </Typography>
          <TextField
            fullWidth
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            label="Content"
            margin="normal"
          />
          <Button onClick={handleUpdate} variant="contained" color="primary" sx={{ mt: 2 }}>
            Update
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditableItem;
