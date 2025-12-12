'use client';

import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import { Scissors, Car, FirstAidKit, Wrench, Storefront, ForkKnife } from '@phosphor-icons/react';

const industries = [
  { icon: Scissors, label: 'Barbershops & salons' },
  { icon: Car, label: 'Auto repair' },
  { icon: FirstAidKit, label: 'Clinics & wellness' },
  { icon: Wrench, label: 'Home services' },
  { icon: Storefront, label: 'Local retail' },
  { icon: ForkKnife, label: 'Restaurants' },
];

export default function PerfectFor() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FAFAFA' }}>
      <Container maxWidth="md">

        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Perfect for
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Built for local businesses that want to serve customers better.
          </Typography>
        </Box>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
          {industries.map((ind, i) => (
            <Chip
              key={i}
              icon={<ind.icon size={20} weight="duotone" color="#FF5A3C" />}
              label={ind.label}
              sx={{
                py: 3,
                px: 2,
                fontSize: '1rem',
                fontWeight: 500,
                bgcolor: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: 3,
                '& .MuiChip-icon': { ml: 1 },
              }}
            />
          ))}
        </Stack>

      </Container>
    </Box>
  );
}

