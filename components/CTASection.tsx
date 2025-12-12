'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, Stack, Dialog, IconButton } from '@mui/material';
import { CheckCircle, ArrowRight, Calendar, X } from '@phosphor-icons/react';

export default function CTASection() {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <>
      <Box component="section" id="quote" sx={{ py: { xs: 12, md: 16 } }}>
        <Container maxWidth="sm">

          <Box
            sx={{
              textAlign: 'center',
              bgcolor: '#FFF5F3',
              borderRadius: 5,
              p: { xs: 5, md: 7 },
            }}
          >
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              Get a Custom Quote
            </Typography>

            <Typography variant="body1" sx={{ color: '#666', mb: 5 }}>
              We price based on call volume, complexity, and integrations.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 5 }}>
              <Button 
                variant="contained" 
                size="large" 
                endIcon={<ArrowRight weight="bold" />}
                href="mailto:ali.alabbasi03@gmail.com?subject=Custom Quote Request - nomorebits"
              >
                Request a Quote
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                startIcon={<Calendar weight="bold" />}
                onClick={() => setCalendarOpen(true)}
              >
                Book a Demo
              </Button>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }} justifyContent="center">
              {['No obligation', 'Keep your number', 'Setup handled'].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, justifyContent: 'center' }}>
                  <CheckCircle size={18} weight="fill" color="#22C55E" />
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

        </Container>
      </Box>

      {/* Calendly Modal */}
      <Dialog
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '90vh',
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setCalendarOpen(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 10,
              bgcolor: 'white',
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <X size={24} />
          </IconButton>
          <Box
            sx={{
              width: '100%',
              height: '700px',
            }}
          >
            <iframe
              src="https://calendly.com/nomorebits/ai-customer-service-rep?primary_color=ff6e2c"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a demo"
            />
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
