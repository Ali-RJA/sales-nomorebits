'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { CheckCircle, Play } from '@phosphor-icons/react';

export default function Hero() {
  const scroll = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box 
      component="section" 
      sx={{ 
        pt: { xs: 10, md: 16 }, 
        pb: { xs: 12, md: 20 },
        bgcolor: '#FFFAF8',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-block',
              px: 3,
              py: 1,
              mb: 5,
              borderRadius: 100,
              bgcolor: 'rgba(255, 90, 60, 0.1)',
              color: '#FF5A3C',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            AI-Powered Phone Assistant
          </Box>

          {/* Headline */}
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 4,
              color: '#1a1a1a',
            }}
          >
            Never miss a customer call again
          </Typography>

          {/* Subheadline */}
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666',
              maxWidth: 560,
              mx: 'auto',
              mb: 6,
            }}
          >
            A friendly AI receptionist that answers common questions, 
            books appointments, and takes messages—then sends you a clean summary.
          </Typography>

          {/* CTAs */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mb: 8 }}
          >
            <Button 
              variant="contained" 
              size="large"
              onClick={() => scroll('#quote')}
            >
              Get a Custom Quote
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              startIcon={<Play weight="fill" size={18} />}
              onClick={() => scroll('#samples')}
            >
              Hear Call Samples
            </Button>
          </Stack>

          {/* Trust points */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 2, sm: 5 }}
            justifyContent="center"
          >
            {['Setup done for you', 'No new hardware', 'Keep your number'].map((text) => (
              <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center' }}>
                <CheckCircle size={22} weight="fill" color="#22C55E" />
                <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Stack>

        </Box>
      </Container>
    </Box>
  );
}

