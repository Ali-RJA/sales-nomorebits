'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { ChatCircle, CalendarPlus, PhoneOutgoing, Check } from '@phosphor-icons/react';

const categories = [
  {
    icon: ChatCircle,
    title: 'Everyday customer help',
    color: '#FF5A3C',
    items: ['Hours & location', 'Pricing basics', 'Product availability', 'Return policies'],
  },
  {
    icon: CalendarPlus,
    title: 'Bookings & requests',
    color: '#FFB800',
    items: ['Book appointments', 'Take orders', 'Collect contact info', 'Send confirmations'],
  },
  {
    icon: PhoneOutgoing,
    title: 'Smart call routing',
    color: '#22C55E',
    items: ['Route urgent calls', 'Transfer to departments', 'Take messages', 'Follow your rules'],
  },
];

export default function FeaturesSection() {
  return (
    <Box component="section" id="features" sx={{ py: { xs: 12, md: 18 }, bgcolor: '#FAFAFA' }}>
      <Container maxWidth="lg">

        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            What it can handle
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 480, mx: 'auto' }}>
            Your AI assistant is trained on your business. Here's what it does.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {categories.map((cat, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 4,
                  p: { xs: 4, md: 5 },
                  height: '100%',
                  borderTop: `4px solid ${cat.color}`,
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    bgcolor: `${cat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                  }}
                >
                  <cat.icon size={30} weight="duotone" color={cat.color} />
                </Box>

                <Typography variant="h3" sx={{ mb: 4 }}>
                  {cat.title}
                </Typography>

                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {cat.items.map((item, j) => (
                    <Box 
                      component="li" 
                      key={j}
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        mb: 2.5,
                        '&:last-child': { mb: 0 },
                      }}
                    >
                      <Check size={18} weight="bold" color={cat.color} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

