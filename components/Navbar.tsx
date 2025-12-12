'use client';

import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { List as MenuIcon, X } from '@phosphor-icons/react';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Samples', href: '#samples' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          bgcolor: 'rgba(255,255,255,0.9)', 
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2 }} disableGutters>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                fontSize: '1.5rem',
                color: '#1a1a1a',
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span style={{ color: '#FF5A3C' }}>nomore</span>bits
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 5 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.label}
                  onClick={() => scroll(link.href)}
                  sx={{
                    color: '#666',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '1rem',
                    '&:hover': { color: '#FF5A3C' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
              <Button 
                variant="contained" 
                onClick={() => scroll('#quote')}
                sx={{ ml: 2 }}
              >
                Get a Quote
              </Button>
            </Box>

            <IconButton 
              onClick={() => setOpen(true)}
              sx={{ display: { md: 'none' }, color: '#1a1a1a' }}
            >
              <MenuIcon size={28} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
            <IconButton onClick={() => setOpen(false)}>
              <X size={24} />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.label} onClick={() => scroll(link.href)} sx={{ py: 2 }}>
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            ))}
          </List>
          <Button variant="contained" fullWidth onClick={() => scroll('#quote')} sx={{ mt: 3 }}>
            Get a Quote
          </Button>
        </Box>
      </Drawer>

      <Toolbar sx={{ mb: { xs: 2, md: 4 } }} />
    </>
  );
}

