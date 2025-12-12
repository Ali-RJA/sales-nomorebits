'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { Voicemail, FileText, UsersThree, SpeakerHigh, CloudArrowUp } from '@phosphor-icons/react';

const features = [
  {
    icon: Voicemail,
    title: 'Call recordings',
    desc: 'Review quality and resolve disputes. We help you do it properly.',
  },
  {
    icon: FileText,
    title: 'Automatic summaries',
    desc: 'Every call ends with a neat summary and customer details.',
  },
  {
    icon: UsersThree,
    title: 'Multiple specialists',
    desc: 'One greets, one books, one handles support—smooth handoffs.',
  },
  {
    icon: SpeakerHigh,
    title: 'Custom voice',
    desc: 'Use a voice you own or have permission to use.',
  },
  {
    icon: CloudArrowUp,
    title: 'Your data, your storage',
    desc: 'Store recordings in your own cloud (S3, GCS, R2).',
  },
];

export default function DifferentSection() {
  return (
    <Box component="section" sx={{ py: { xs: 12, md: 18 }, bgcolor: '#FAFAFA' }}>
      <Container maxWidth="lg">

        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            What makes us different
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 450, mx: 'auto' }}>
            Powerful features translated into real benefits.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
          {features.map((f, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 4,
                  p: { xs: 4, md: 5 },
                  height: '100%',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    bgcolor: '#FFF5F3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 4,
                  }}
                >
                  <f.icon size={28} weight="duotone" color="#FF5A3C" />
                </Box>

                <Typography variant="h3" sx={{ mb: 2 }}>
                  {f.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#666' }}>
                  {f.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

