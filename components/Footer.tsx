'use client';

import { Box, Container, Typography, Grid, Stack, Link, IconButton } from '@mui/material';
import { Envelope, Phone, MapPin, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111', color: '#fff', pt: 10, pb: 5 }}>
      <Container maxWidth="lg">

        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.5rem', mb: 3 }}>
              <span style={{ color: '#FF5A3C' }}>nomore</span>bits
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 4, maxWidth: 280, lineHeight: 1.8 }}>
              AI phone assistants for small businesses. Never miss a customer call again.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton 
                component="a"
                href="https://www.linkedin.com/in/ali-alabbasi-100/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#666', '&:hover': { color: '#FF5A3C' } }}
              >
                <LinkedinLogo size={22} />
              </IconButton>
              <IconButton 
                component="a"
                href="https://github.com/Ali-RJA"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#666', '&:hover': { color: '#FF5A3C' } }}
              >
                <GithubLogo size={22} />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>Contact</Typography>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Envelope size={20} color="#FF5A3C" />
                <Typography 
                  component="a"
                  href="mailto:ali.alabbasi03@gmail.com" 
                  variant="body2"
                  sx={{ color: '#888', textDecoration: 'none', '&:hover': { color: '#FF5A3C' } }}
                >
                  ali.alabbasi03@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone size={20} color="#FF5A3C" />
                <Typography 
                  component="a"
                  href="tel:+16145912558" 
                  variant="body2"
                  sx={{ color: '#888', textDecoration: 'none', '&:hover': { color: '#FF5A3C' } }}
                >
                  (614) 591-2558
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <MapPin size={20} color="#FF5A3C" />
                <Typography variant="body2" sx={{ color: '#888' }}>Serving businesses nationwide</Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>Legal</Typography>
            <Stack spacing={2}>
              {['Privacy Policy', 'Terms of Service', 'Recording Notice'].map((t) => (
                <Link key={t} href="#" underline="hover" sx={{ color: '#888', fontSize: '0.9rem', '&:hover': { color: '#FF5A3C' } }}>
                  {t}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #222', pt: 5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            © {new Date().getFullYear()} nomorebits. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', fontSize: '0.8rem' }}>
            Powered by modern voice AI
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
