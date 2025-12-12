'use client';

import { Box, Container, Typography } from '@mui/material';
import { MagnifyingGlass, Plugs, Rocket } from '@phosphor-icons/react';

const steps = [
  {
    icon: MagnifyingGlass,
    num: '01',
    title: 'We learn your business',
    desc: 'We take your website, services, and policies and build your assistant around it.',
  },
  {
    icon: Plugs,
    num: '02',
    title: 'We connect your tools',
    desc: 'Calendar, CRM, or spreadsheets—so it gives real answers like "next opening is 3pm".',
  },
  {
    icon: Rocket,
    num: '03',
    title: 'Go live & improve',
    desc: 'Get call recordings, summaries, and weekly reports so it keeps getting better.',
  },
];

export default function HowItWorks() {
  return (
    <Box component="section" id="how-it-works" sx={{ py: { xs: 12, md: 18 } }}>
      <Container maxWidth="md">

        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            How it works
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 420, mx: 'auto' }}>
            Getting started is simple. We handle the hard parts.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, md: 6 } }}>
          {steps.map((step, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                gap: { xs: 3, md: 5 },
                alignItems: 'flex-start',
                p: { xs: 3, md: 5 },
                bgcolor: '#FAFAFA',
                borderRadius: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: 56, md: 72 },
                  height: { xs: 56, md: 72 },
                  borderRadius: '50%',
                  bgcolor: '#FF5A3C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <step.icon size={28} weight="fill" color="#fff" />
              </Box>

              <Box sx={{ pt: { xs: 0, md: 1 } }}>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#FF5A3C',
                    mb: 1,
                    letterSpacing: '0.05em',
                  }}
                >
                  STEP {step.num}
                </Typography>
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', maxWidth: 400 }}>
                  {step.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

