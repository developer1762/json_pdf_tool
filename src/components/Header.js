import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

let BaseURL = process.env.REACT_APP_BASE_URL;

console.log('BaseURL:', process.env.REACT_APP_BASE_URL);
export default function Header({ toggleTheme, isDarkMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // if(window.location.href.includes('localhost')) {
  //   BaseURL = 'http://localhost:3000';
  // }

  const navLinks = [
    { label: 'Home', href: '/home' },
    { label: 'Convert Files', href: '/convert' },
    { label: 'View Passports', href: '/view' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, p: 2 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 700,
          color: '#0055FF',
          mb: 1,
        }}
      >
        Digitag Passport
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: '#666', mb: 2, display: 'block' }}
      >
        Your files, transformed into trusted digital identities
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.label} component="a" href={`${BaseURL}/#${link.href}`}>
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{
                fontFamily: '"Roboto", sans-serif',
                fontWeight: 500,
                color: '#333',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 4 },
          py: { xs: 1, sm: 1.5 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo and tagline */}
        <Box>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            component="a"
            href={`${BaseURL}/#/home`}
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 700,
              color: '#0055FF',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            Digitag Passport
          </Typography>
          {!isMobile && (
            <Typography
              variant="caption"
              sx={{ color: '#666', mt: -0.5 }}
            >
              Your files, transformed into trusted digital identities
            </Typography>
          )}
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                href={`${BaseURL}/#${link.href}`}
                sx={{
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: 500,
                  color: '#333',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  '&:hover': {
                    color: '#0055FF',
                    background: 'transparent',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Theme Toggle + Mobile Drawer Button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={toggleTheme}
            sx={{ color: '#0055FF' }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: '#0055FF' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
