// For testing ------------------------------------

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
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Grid,
//   IconButton,
//   Tooltip,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   InputAdornment,
//   TextField,
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import PersonIcon from '@mui/icons-material/Person';
// import CorporateFareIcon from '@mui/icons-material/CorporateFare';
// import BluetoothIcon from '@mui/icons-material/Bluetooth';
// import ArticleIcon from '@mui/icons-material/Article';
// import ShopIcon from '@mui/icons-material/Shop';
// import ImageIcon from '@mui/icons-material/Image';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// const AssignTemplate = () => {
//   const [assignTemplates, setAssignTemplates] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [newAssignTemplate, setNewAssignTemplate] = useState({
//     company: '',
//     shop: '',
//     beacon: '',
//     templateWithImages: [],
//   });
//   const [templatesList, setTemplatesList] = useState([
//     'Shoe',
//     'Clothing',
//     'Electronic',
//   ]);
//   const [currentTemplateId, setCurrentTemplateId] = useState(null);

 

//   const handleOpenDialog = () => {
//     setEditMode(false);
//     setOpenDialog(true);
//   };

//   const handleOpenEditDialog = (template) => {
//     setNewAssignTemplate({
//       company: template.company,
//       shop: template.shop,
//       beacon: template.beacon,
//       templateWithImages: template.templateWithImages,
//     });
//     setCurrentTemplateId(template.id);
//     setEditMode(true);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setNewAssignTemplate({ company: '', shop: '', beacon: '', templateWithImages: [] });
//     setCurrentTemplateId(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewAssignTemplate((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTemplateChange = (e) => {
//     const { value } = e.target;
//     setNewAssignTemplate((prevData) => ({
//       ...prevData,
//       templateWithImages: [{ ...prevData.templateWithImages[0], template: value }],
//     }));
//   };

//   const handleImageUpload = (event) => {
//     const files = event.target.files;
//     const imageArray = [];

//     Array.from(files).forEach((file) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         imageArray.push({ name: file.name, src: reader.result });
//         if (imageArray.length === files.length) {
//           setNewAssignTemplate((prevData) => ({
//             ...prevData,
//             templateWithImages: [{ 
//               ...prevData.templateWithImages[0], 
//               images: [...(prevData.templateWithImages[0]?.images || []), ...imageArray] 
//             }],
//           }));
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleRemoveImage = (imageSrc) => {
//     setNewAssignTemplate((prevData) => ({
//       ...prevData,
//       templateWithImages: [
//         {
//           ...prevData.templateWithImages[0],
//           images: prevData.templateWithImages[0].images.filter(img => img.src !== imageSrc),
//         },
//       ],
//     }));
//   };

//   const handleAddAssignTemplate = () => {
//     if (editMode) {
//       setAssignTemplates((prevTemplates) =>
//         prevTemplates.map((template) =>
//           template.id === currentTemplateId
//             ? { ...newAssignTemplate, id: currentTemplateId }
//             : template
//         )
//       );
//     } else {
//       setAssignTemplates((prevTemplates) => [
//         ...prevTemplates,
//         {
//           ...newAssignTemplate,
//           id: prevTemplates.length + 1,
//         },
//       ]);
//     }
//     handleCloseDialog();
//   };

//   const handleDeleteTemplate = (id) => {
//     setAssignTemplates((prevTemplates) =>
//       prevTemplates.filter((template) => template.id !== id)
//     );
//   };

//   return (
//     <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//       <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
//         <PersonIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
//         Assign Template
//       </Typography>

//       <Button
//         variant="contained"
//         startIcon={<AddIcon />}
//         onClick={handleOpenDialog}
//         sx={{ mb: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: 'black' } }}
//       >
//         Add New Assign Template
//       </Button>

//       <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: '#34495e' }}>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Company</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Shop</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Beacon Id</TableCell>
//               <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Template with Images</TableCell>
//               <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {assignTemplates.map((templateData) => (
//               <TableRow key={templateData.id}>
//                 <TableCell>{templateData.company}</TableCell>
//                 <TableCell>{templateData.shop}</TableCell>
//                 <TableCell>{templateData.beacon}</TableCell>
//                 <TableCell>
//                   {templateData.templateWithImages.map((item, index) => (
//                     <div key={index}>
//                       <Typography variant="body2" gutterBottom>{item.template}</Typography>
//                       <Grid container spacing={1}>
//                         {item.images.map((img, idx) => (
//                           <Grid item xs={3} key={idx} sx={{ position: 'relative' }}>
//                             <img src={img.src} alt={img.name} style={{ width: '100%', height: 'auto' }} />
//                             <Typography variant="caption" color="textSecondary">{img.name}</Typography>
//                             {/* <IconButton
//                               sx={{ position: 'absolute', top: 0, right: 0 }}
//                               onClick={() => handleRemoveImage(img.src)}
//                             >
//                               <RemoveCircleIcon color="error" />
//                             </IconButton> */}
//                           </Grid>
//                         ))}
//                       </Grid>
//                     </div>
//                   ))}
//                 </TableCell>
//                 <TableCell align="center">
//                   <Tooltip title="Edit">
//                     <IconButton color="primary" onClick={() => handleOpenEditDialog(templateData)}>
//                       <EditIcon />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Delete">
//                     <IconButton color="error" onClick={() => handleDeleteTemplate(templateData.id)}>
//                       <DeleteIcon />
//                     </IconButton>
//                   </Tooltip>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#2c3e50', color: 'white' }}>
//           <AddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
//           {editMode ? 'Edit Assign Template' : 'Add New Assign Template'}
//         </DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} mt={2}>
//             <Grid item xs={12}>
//               <FormControl fullWidth required>
//                 <InputLabel>Company</InputLabel>
//                 <Select
//                   name="company"
//                   value={newAssignTemplate.company}
//                   onChange={handleInputChange}
//                   label="Company"
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <CorporateFareIcon color="primary" />
//                     </InputAdornment>
//                   }
//                 >
//                   <MenuItem value="Reebok">Reebok</MenuItem>
//                   <MenuItem value="Redtape">Redtape</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth required>
//                 <InputLabel>Shop</InputLabel>
//                 <Select
//                   name="shop"
//                   value={newAssignTemplate.shop}
//                   onChange={handleInputChange}
//                   label="Shop"
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <ShopIcon color="primary" />
//                     </InputAdornment>
//                   }
//                 >
//                   <MenuItem value="001">001</MenuItem>
//                   <MenuItem value="002">002</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth required>
//                 <InputLabel>Beacon Id</InputLabel>
//                 <Select
//                   name="beacon"
//                   value={newAssignTemplate.beacon}
//                   onChange={handleInputChange}
//                   label="Beacon Id"
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <BluetoothIcon color="primary" />
//                     </InputAdornment>
//                   }
//                 >
//                   <MenuItem value="BCN001">BCN001</MenuItem>
//                   <MenuItem value="BCN002">BCN002</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth required>
//                 <InputLabel>Template</InputLabel>
//                 <Select
//                   name="template"
//                   value={newAssignTemplate.templateWithImages[0]?.template || ''}
//                   onChange={handleTemplateChange}
//                   label="Template"
//                   startAdornment={
//                     <InputAdornment position="start">
//                       <ArticleIcon color="primary" />
//                     </InputAdornment>
//                   }
//                 >
//                   {templatesList.map((template, index) => (
//                     <MenuItem key={index} value={template}>
//                       {template}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Upload Images"
//                 type="file"
//                 inputProps={{ multiple: true }}
//                 fullWidth
//                 onChange={handleImageUpload}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <ImageIcon color="primary" />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               {newAssignTemplate.templateWithImages[0]?.images?.map((img, idx) => (
//                 <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
//                   <Typography variant="body2" sx={{ flex: 1 }}>
//                     {img.name}
//                   </Typography>
//                   <IconButton onClick={() => handleRemoveImage(img.src)}>
//                     <RemoveCircleIcon color="error" />
//                   </IconButton>
//                 </div>
//               ))}
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} style={{ color: '#2c3e50' }}>Cancel</Button>
//           <Button onClick={handleAddAssignTemplate} variant="contained" style={{ background: '#2c3e50', color: 'white' }} startIcon={<AddIcon />}>
//             {editMode ? 'Update Assign Template' : 'Add Assign Template'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default AssignTemplate;

// -----------------------------------------------------------------------

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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  TextField,
  IconButton,
  Tooltip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import ArticleIcon from '@mui/icons-material/Article';
import ShopIcon from '@mui/icons-material/Shop';
import CloseIcon from '@mui/icons-material/Close';

const AssignTemplate = () => {
  const [assignTemplates, setAssignTemplates] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [imageDialog, setImageDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [newAssignTemplate, setNewAssignTemplate] = useState({
    company: '',
    shop: '',
    beacon: '',
    templateWithImages: [],
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [templatesList] = useState([
    'Shoe',
    'Clothing',
    'Electronic', // Add more templates as needed
  ]);

  useEffect(() => {
    // Initial dummy data with template and images
    setAssignTemplates([
      {
        id: 1,
        company: 'Reebok',
        shop: '001',
        beacon: 'BCN001',
        templateWithImages: [
          {
            template: 'Template A',
            images: [
              { name: 'Image1.jpg', src: 'https://zeevector.com/wp-content/uploads/Discount/Flat-20-Percent-Off-Vector.png' },
              { name: 'Image2.jpg', src: 'https://png.pngtree.com/png-vector/20230327/ourlarge/pngtree-vector-flat-discount-50-percent-off-social-media-stories-template-png-image_6669583.png' },
              { name: 'Image3.jpg', src: 'https://media.istockphoto.com/id/1394056745/vector/mega-sale-special-offer-neon-40-off-sale-banner-sign-board-promotion-vector.jpg?s=612x612&w=0&k=20&c=vfoEGlioGiosiEPQevDd0Vh103isDwEppYtql7-vfwk='},
              { name: 'Image4.jpg', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaW4x2rlE_jxD4nuj26hpJ60td2VBmpc2RmQ&s'},
              { name: 'Image5.jpg', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn84Z7DSoYb9QLsxHPVimjStr2R3u_BN_FXA&s'}
            ],
          },
        ],
      },
      {
        id: 2,
        company: 'Redtape',
        shop: '002',
        beacon: 'BCN002',
        templateWithImages: [
          {
            template: 'Template B',
            images: [
              { name: 'Image1.jpg', src: 'https://img.freepik.com/premium-vector/buy-1-get-1-free-banner-template_96807-2292.jpg' },
              { name: 'Image2.jpg', src: 'https://www.shutterstock.com/image-vector/buy-1-get-free-sale-260nw-1109988779.jpg' },
            ],
          },
        ],
      },
    ]);
  }, []);

  const handleOpenDialog = (index = null) => {
    setEditingIndex(index);
    setNewAssignTemplate(assignTemplates[index] || {
      company: '',
      shop: '',
      beacon: '',
      templateWithImages: [],
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewAssignTemplate({ company: '', shop: '', beacon: '', templateWithImages: [] });
    setEditingIndex(null);
  };

  const handleImageDialogOpen = (images) => {
    setSelectedImages(images.map(img => img.src));
    setImageDialog(true);
  };

  const handleImageDialogClose = () => setImageDialog(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignTemplate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTemplateChange = (e) => {
    const { value } = e.target;
    setNewAssignTemplate((prevData) => ({
      ...prevData,
      templateWithImages: [{ ...prevData.templateWithImages[0], template: value }],
    }));
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imageArray = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        imageArray.push({ name: file.name, src: reader.result });
        if (imageArray.length === files.length) {
          setNewAssignTemplate((prevData) => ({
            ...prevData,
            templateWithImages: [{ 
              ...prevData.templateWithImages[0], 
              images: [...(prevData.templateWithImages[0]?.images || []), ...imageArray] 
            }],
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddOrUpdateTemplate = () => {
    if (editingIndex !== null) {
      const updatedTemplates = [...assignTemplates];
      updatedTemplates[editingIndex] = {
        ...newAssignTemplate,
        id: updatedTemplates[editingIndex].id,
      };
      setAssignTemplates(updatedTemplates);
    } else {
      setAssignTemplates((prevTemplates) => [
        ...prevTemplates,
        {
          ...newAssignTemplate,
          id: prevTemplates.length + 1,
        },
      ]);
    }
    handleCloseDialog();
  };

  const handleRemoveImage = (imageIndex) => {
    setNewAssignTemplate((prevData) => ({
      ...prevData,
      templateWithImages: [{
        ...prevData.templateWithImages[0],
        images: prevData.templateWithImages[0].images.filter((_, idx) => idx !== imageIndex),
      }],
    }));
  };

  const handleRemoveTemplate = (index) => {
    setAssignTemplates((prevTemplates) => prevTemplates.filter((_, idx) => idx !== index));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => handleOpenDialog()}
        sx={{ mb: 2, backgroundColor: '#003366', '&:hover': { backgroundColor: '#002244' } }}
      >
        <AddIcon /> Add New Template
      </Button>
      
      <TableContainer component={Paper} sx={{ mt: 2, backgroundColor: '#f9f9f9' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#003366', color: 'white' }}>Company</TableCell>
              <TableCell sx={{ backgroundColor: '#003366', color: 'white' }}>Shop</TableCell>
              <TableCell sx={{ backgroundColor: '#003366', color: 'white' }}>Beacon</TableCell>
              <TableCell sx={{ backgroundColor: '#003366', color: 'white' }}>Template & Images</TableCell>
              <TableCell sx={{ backgroundColor: '#003366', color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignTemplates.map((template, index) => (
              <TableRow key={template.id}>
                <TableCell>{template.company}</TableCell>
                <TableCell>{template.shop}</TableCell>
                <TableCell>{template.beacon}</TableCell>
                <TableCell>
                  <Typography variant="body2">
                    <strong>{template.templateWithImages[0]?.template}</strong>
                  </Typography>
                  {template.templateWithImages[0]?.images.map((img, idx) => (
                    <Typography key={idx} variant="body2">
                      {img.name}
                    </Typography>
                  ))}
                  <Tooltip title="View Images">
                    <IconButton 
                      onClick={() => handleImageDialogOpen(template.templateWithImages[0]?.images)}
                      sx={{ mt: 1 }}
                    >
                      <ImageIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => handleOpenDialog(index)}
                    sx={{ mr: 1, color: '#003366' }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleRemoveTemplate(index)}
                    sx={{ color: '#c62828' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#003366', color: 'white' }}>
          <AddIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          {editingIndex !== null ? 'Edit Assign Template' : 'Add New Assign Template'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Company</InputLabel>
                <Select
                  name="company"
                  value={newAssignTemplate.company}
                  onChange={handleInputChange}
                  label="Company"
                  startAdornment={
                    <InputAdornment position="start">
                      <CorporateFareIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="Reebok">Reebok</MenuItem>
                  <MenuItem value="Redtape">Redtape</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Shop</InputLabel>
                <Select
                  name="shop"
                  value={newAssignTemplate.shop}
                  onChange={handleInputChange}
                  label="Shop"
                  startAdornment={
                    <InputAdornment position="start">
                      <ShopIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="001">001</MenuItem>
                  <MenuItem value="002">002</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Beacon Id</InputLabel>
                <Select
                  name="beacon"
                  value={newAssignTemplate.beacon}
                  onChange={handleInputChange}
                  label="Beacon Id"
                  startAdornment={
                    <InputAdornment position="start">
                      <BluetoothIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="BCN001">BCN001</MenuItem>
                  <MenuItem value="BCN002">BCN002</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Template</InputLabel>
                <Select
                  name="template"
                  value={newAssignTemplate.templateWithImages[0]?.template || ''}
                  onChange={handleTemplateChange}
                  label="Template"
                  startAdornment={
                    <InputAdornment position="start">
                      <ArticleIcon color="primary" />
                    </InputAdornment>
                  }
                >
                  {templatesList.map((template, index) => (
                    <MenuItem key={index} value={template}>
                      {template}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Upload Images"
                type="file"
                inputProps={{ multiple: true }}
                fullWidth
                onChange={handleImageUpload}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ImageIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {newAssignTemplate.templateWithImages[0]?.images?.map((img, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" sx={{ flexGrow: 1 }}>
                    {img.name}
                  </Typography>
                  <IconButton onClick={() => handleRemoveImage(idx)} sx={{ color: '#c62828' }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              ))}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: '#003366' }}>Cancel</Button>
          <Button 
            onClick={handleAddOrUpdateTemplate} 
            variant="contained" 
            sx={{ backgroundColor: '#003366', color: 'white' }} 
            startIcon={<AddIcon />}
          >
            {editingIndex !== null ? 'Update Template' : 'Add Template'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={imageDialog} onClose={handleImageDialogClose}>
        <DialogTitle sx={{ backgroundColor: '#003366', color: 'white' }}>
          Image Preview
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {selectedImages.map((image, index) => (
              <Grid item xs={12} key={index}>
                <img src={image} alt={`Template Preview ${index}`} style={{ width: '100%' }} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleImageDialogClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AssignTemplate;
