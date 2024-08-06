import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Modal } from '@mui/material';

const EditablePage = () => {
  const [title, setTitle] = useState("This is the Title");
  const [subtitle, setSubtitle] = useState("This is the Subtitle");
  const [content, setContent] = useState("This is the main content of the page.");
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newSubtitle, setNewSubtitle] = useState(subtitle);
  const [newContent, setNewContent] = useState(content);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setTitle(newTitle);
    setSubtitle(newSubtitle);
    setContent(newContent);
    handleClose();
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Edit Page
      </Button>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {content}
        </Typography>
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
          <Typography variant="h6" component="h2" gutterBottom>
            Edit Page Content
          </Typography>
          <TextField
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            label="Title"
            margin="normal"
          />
          <TextField
            fullWidth
            value={newSubtitle}
            onChange={(e) => setNewSubtitle(e.target.value)}
            label="Subtitle"
            margin="normal"
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            label="Content"
            margin="normal"
          />
          <Button onClick={handleSave} variant="contained" color="primary" sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditablePage;
