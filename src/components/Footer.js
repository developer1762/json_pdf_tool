import * as React from 'react';
import {
  Box,
  Typography,
  Stack,
  Link,
  useTheme,
  useMediaQuery,
  Divider,
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
        width: '95%',
        backgroundColor: '#222',
        color: '#bbb',
        px: { xs: 3, sm: 6 },
        py: { xs: 5, sm: 6 },
        mt: 10,
        borderTop: '4px solid #0055FF',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={4}
        alignItems={isMobile ? 'center' : 'flex-start'}
        justifyContent="space-between"
        textAlign={isMobile ? 'center' : 'left'}
        mb={3}
      >
        {/* Branding with tagline */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              color: '#55aaff',
              mb: 1,
            }}
          >
            Digitag Passport
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              color: '#888',
              maxWidth: 300,
              mx: isMobile ? 'auto' : 0,
              lineHeight: 1.4,
            }}
          >
            Your files, transformed into trusted digital identities
          </Typography>
        </Box>

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
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '0.85rem',
                color: '#bbb',
                textDecoration: 'none',
                '&:hover': { color: '#55aaff' },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

        {/* Contact/Social Links */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Link href="mailto:support@digitagpassport.com" aria-label="Email" sx={{ color: '#bbb' }}>
            <EmailIcon sx={{ fontSize: '1.2rem', '&:hover': { color: '#55aaff' } }} />
          </Link>
          <Link href="https://github.com/json2pdf" target="_blank" aria-label="GitHub" sx={{ color: '#bbb' }}>
            <GitHubIcon sx={{ fontSize: '1.2rem', '&:hover': { color: '#55aaff' } }} />
          </Link>
          <Link href="https://linkedin.com/company/json2pdf" target="_blank" aria-label="LinkedIn" sx={{ color: '#bbb' }}>
            <LinkedInIcon sx={{ fontSize: '1.2rem', '&:hover': { color: '#55aaff' } }} />
          </Link>
        </Stack>
      </Stack>

      <Divider sx={{ borderColor: '#444' }} />

      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 2,
          color: '#666',
          textAlign: 'center',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        }}
      >
        © {new Date().getFullYear()} Digitag Passport. All rights reserved.
      </Typography>
    </Box>
  );
}
