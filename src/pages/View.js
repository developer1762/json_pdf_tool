import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';

const convertedFiles = [
  {
    productName: 'Eco-Bottle 500ml',
    date: '2025-05-14',
    files: {
      pdf: '/downloads/eco-bottle.pdf',
      json: '/downloads/eco-bottle.json',
    }
  },
  {
    productName: 'Solar Charger X2',
    date: '2025-05-12',
    files: {
      pdf: '/downloads/solar-charger.pdf',
      json: '/downloads/solar-charger.json',
    }
  },
];

const View = () => {
  return (
    <Box sx={{maxWidth: '100%', overflowX: 'hidden', textAlign: 'center', py: 5}}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your Digital Product Passports
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Browse and download your converted Digital Product Passports below.
      </Typography>

      <Grid container spacing={3} sx= {{width:'100%',display: 'flex', justifyContent: 'center'}}>
        {convertedFiles.map((entry, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 4, transition: '0.3s', '&:hover': { boxShadow: 8 } }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {entry.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Converted on {entry.date}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Stack spacing={1}>
                  <Chip
                    icon={<PictureAsPdfIcon />}
                    label="Download PDF"
                    color="error"
                    clickable
                    component="a"
                    href={entry.files.pdf}
                    download
                  />
                  <Chip
                    icon={<CodeIcon />}
                    label="Download JSON"
                    color="primary"
                    clickable
                    component="a"
                    href={entry.files.json}
                    download
                  />
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  href={entry.files.pdf}
                  download
                  size="small"
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  Download PDF
                </Button>
                <Button
                  href={entry.files.json}
                  download
                  size="small"
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  Download JSON
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default View;
