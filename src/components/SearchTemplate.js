import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const SearchTemplate = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    { name: 'Marketing Template', category: 'Business', url: 'https://example.com/marketing' },
    { name: 'Portfolio Template', category: 'Personal', url: 'https://example.com/portfolio' },
    { name: 'E-commerce Template', category: 'Business', url: 'https://example.com/ecommerce' },
    { name: 'Blog Template', category: 'Personal', url: 'https://example.com/blog' },
    { name: 'Event Template', category: 'Event', url: 'https://example.com/event' },
    { name: 'Resume Template', category: 'Personal', url: 'https://example.com/resume' },
    { name: 'Landing Page Template', category: 'Business', url: 'https://example.com/landing' },
  ];

  const categories = [
    'Business',
    'Personal',
    'Event',
    'Technology',
    'Education',
    'Healthcare',
    'Travel',
    'Food',
    'Health',
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory ? template.category === selectedCategory : true;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', color: '#2c3e50' }}>
        Template Search
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          variant="outlined"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mr: 2, flex: 1 }}
        />
        <TextField
          select
          variant="outlined"
          value={selectedCategory}
          onChange={handleCategoryChange}
          sx={{ flex: 1 }}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#34495e' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Template Name</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTemplates.map((template, index) => (
              <TableRow key={index}>
                <TableCell>{template.name}</TableCell>
                <TableCell>{template.category}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleTemplateClick(template)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedTemplate && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>{selectedTemplate.name}</Typography>
          <iframe
            src={selectedTemplate.url}
            title={selectedTemplate.name}
            width="100%"
            height="500px"
            style={{ border: 'none' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchTemplate;