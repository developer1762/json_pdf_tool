import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Home() {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                Convert Your Files to <br /> Digital Product Passports
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={6}>
                Drag & drop Excel, CSV, or JSON files to generate comprehensive, searchable, and downloadable digital passports for your products.
            </Typography>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={4}
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<UploadFileIcon />}
                    href="/convert"
                    sx={{ px: 5 }}
                >
                    Convert Files
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<VisibilityIcon />}
                    href="/view"
                    sx={{ px: 5 }}
                >
                    View Passports
                </Button>
            </Stack>

            {/* <Box
                component="img"
                src="/digital_passport.jpg"
                alt="Digital passports illustration"
                sx={{
                    mt: 10,
                    width: '100%',
                    maxHeight: 400,
                    borderRadius: 3,
                    boxShadow: 6,
                    objectFit: 'cover',
                }}
            /> */}

        </Container>
    );
}
