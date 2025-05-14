import * as React from 'react';
import {
  Box,
  Typography,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 3 },
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: 2, md: 3 },
      }}
    >
      {/* Branding */}
      <Typography
        variant={isMobile ? 'body1' : 'h6'}
        sx={{
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 600,
          color: '#0055FF',
        }}
      >
        JSON to PDF
      </Typography>

      {/* Navigation Links */}
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 1 : 3}
        alignItems="center"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 500,
              color: '#333',
              textDecoration: 'none',
              '&:hover': { color: '#0055FF' },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>

      {/* Contact/Social Links */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ color: '#0055FF' }}
      >
        <Link href="mailto:support@json2pdf.com" aria-label="Email">
          <EmailIcon sx={{ fontSize: '1.2rem', '&:hover': { color: '#0033CC' } }} />
        </Link>
        <Link href="https://github.com/json2pdf" target="_blank" aria-label="GitHub">
          <GitHubIcon sx={{ fontSize: '1.2rem', '&:hover': { color: '#0033CC' } }} />
        </Link>
        <Link href="https://linkedin.com/company/json2pdf" target="_blank" aria-label="LinkedIn">
          <LinkedInIcon sx={{ fontSize: '1.2rem', '&:hover': { color: '#0033CC' } }} />
        </Link>
      </Stack>
    </Box>
  );
}