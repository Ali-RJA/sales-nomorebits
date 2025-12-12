'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { ShieldCheck, ArrowsClockwise, Microphone, HardDrives } from '@phosphor-icons/react';

const points = [
  { icon: ShieldCheck, title: 'You control what it says', desc: 'Set boundaries on topics, pricing, commitments.' },
  { icon: ArrowsClockwise, title: 'Always can transfer', desc: 'If someone needs a human, it hands off gracefully.' },
  { icon: Microphone, title: 'Recording is optional', desc: 'If you want recordings, we set them up properly.' },
  { icon: HardDrives, title: 'Your data, your storage', desc: 'Recordings can live in your own cloud.' },
];

export default function TrustSection() {
  return (
    <Box component="section" sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">

        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Safety & trust
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            You stay in control. Always.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {points.map((p, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  p: { xs: 3, md: 4 },
                  bgcolor: '#FAFAFA',
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    bgcolor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <p.icon size={26} weight="duotone" color="#22C55E" />
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: '1.15rem', mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {p.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

