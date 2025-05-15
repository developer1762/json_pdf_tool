import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  CircularProgress,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Convert() {
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleConvert = () => {
    setIsConverting(true);
    setTimeout(() => {
      setIsConverting(false);
      alert('File converted to digital product passport!');
    }, 1500); // Simulated conversion
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Upload & Convert Your File
      </Typography>
      <Typography variant="body1" textAlign="center" color="text.secondary" mb={4}>
        Drag & drop a file (CSV, Excel, or JSON), or click below to upload.
      </Typography>

      <Paper
        elevation={3}
        sx={{
          border: '2px dashed #aaa',
          borderRadius: 4,
          p: 5,
          textAlign: 'center',
          cursor: 'pointer',
          mb: 4,
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <CloudUploadIcon sx={{ fontSize: 50, color: '#666', mb: 2 }} />
        <Typography variant="body1" color="text.secondary">
          {file ? file.name : 'Drag & Drop or Click to Upload'}
        </Typography>
        <input
          type="file"
          hidden
          id="fileInput"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Paper>

      <Stack spacing={2} direction="row" justifyContent="center">
        <Button
          variant="contained"
          disabled={!file || isConverting}
          onClick={handleConvert}
        >
          {isConverting ? <CircularProgress size={24} color="inherit" /> : 'Convert Now'}
        </Button>
        {file && (
          <Button variant="outlined" onClick={() => setFile(null)}>
            Clear
          </Button>
        )}
      </Stack>

      <Box mt={6} textAlign="center">
        <Typography variant="caption" color="text.secondary">
          Supported formats: .csv, .xlsx, .json. Max size: 5MB.
        </Typography>
      </Box>
    </Container>
  );
}
