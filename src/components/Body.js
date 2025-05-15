import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  LinearProgress,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';

export default function Body() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [file, setFile] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [output, setOutput] = React.useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.csv') || droppedFile.name.endsWith('.json'))) {
      setFile(droppedFile);
      setOutput(null);
    }
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setOutput(null);
    }
  };

  const handleConvert = (action) => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setOutput(action === 'json' ? { type: 'json', file: 'passport.json' } : { type: 'pdf', file: 'passport.pdf' });
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 128px)', // Adjust for header/footer
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#F5F6F5', // Light gray background for contrast
      }}
    >
      {/* Title */}
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 600,
          color: '#333',
          mb: 3,
        }}
      >
        Convert Your Files to Digital Product Passports
      </Typography>

      {/* Drag-and-Drop Area */}
      <Paper
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        sx={{
          width: '100%',
          maxWidth: 600,
          p: { xs: 2, sm: 3 },
          border: '2px dashed #0055FF',
          borderRadius: 2,
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          mb: 3,
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 48, color: '#0055FF', mb: 1 }} />
        <Typography
          variant="body1"
          sx={{ fontFamily: '"Roboto", sans-serif', color: '#333', mb: 2 }}
        >
          {file ? file.name : 'Drag & Drop Excel, CSV, or JSON here'}
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            bgcolor: '#0055FF',
            color: '#fff',
            fontFamily: '"Roboto", sans-serif',
            textTransform: 'none',
            '&:hover': { bgcolor: '#0033CC' },
          }}
        >
          Select File
          <input type="file" hidden accept=".xlsx,.csv,.json" onChange={handleFileInput} />
        </Button>
      </Paper>

      {/* Action Buttons */}
      <Stack direction={isMobile ? 'column' : 'row'} spacing={2} mb={3}>
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          disabled={!file || isProcessing}
          onClick={() => handleConvert('json')}
          sx={{
            bgcolor: '#0055FF',
            color: '#fff',
            fontFamily: '"Roboto", sans-serif',
            textTransform: 'none',
            px: 3,
            '&:hover': { bgcolor: '#0033CC' },
          }}
        >
          Make Passport (Excel → JSON)
        </Button>
        <Button
          variant="outlined"
          startIcon={<PictureAsPdfIcon />}
          disabled={!file || isProcessing}
          onClick={() => handleConvert('pdf')}
          sx={{
            borderColor: '#0055FF',
            color: '#0055FF',
            fontFamily: '"Roboto", sans-serif',
            textTransform: 'none',
            px: 3,
            '&:hover': { borderColor: '#0033CC', color: '#0033CC' },
          }}
        >
          View/PDF (JSON → PDF)
        </Button>
      </Stack>

      {/* Progress Bar */}
      {isProcessing && (
        <Box sx={{ width: '100%', maxWidth: 600, mb: 3 }}>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
          <Typography
            variant="body2"
            sx={{ fontFamily: '"Roboto", sans-serif', color: '#666', mt: 1 }}
          >
            Processing... {progress}%
          </Typography>
        </Box>
      )}

      {/* Output Preview/Download */}
      {output && (
        <Paper
          sx={{
            width: '100%',
            maxWidth: 600,
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: '"Roboto", sans-serif', color: '#333', mb: 2 }}
          >
            Output Ready: {output.file}
          </Typography>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            sx={{
              bgcolor: '#0055FF',
              color: '#fff',
              fontFamily: '"Roboto", sans-serif',
              textTransform: 'none',
              '&:hover': { bgcolor: '#0033CC' },
            }}
          >
            Download {output.type === 'json' ? 'JSON + QR' : 'PDF + CSV'}
          </Button>
        </Paper>
      )}
    </Box>
  );
}