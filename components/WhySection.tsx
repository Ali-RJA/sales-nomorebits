'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { PhoneSlash, Users, Calendar, FileText, ArrowsLeftRight, ChartLineUp } from '@phosphor-icons/react';

const items = [
  {
    icon: PhoneSlash,
    title: 'Stop losing money to missed calls',
    desc: 'Every unanswered call during busy or after hours could be a lost customer.',
  },
  {
    icon: Users,
    title: 'Reduce front-desk workload',
    desc: 'Your staff shouldn\'t have to answer the same questions all day long.',
  },
  {
    icon: Calendar,
    title: 'Book more appointments',
    desc: 'Let customers schedule when it\'s convenient—even at 2am.',
  },
  {
    icon: FileText,
    title: 'Capture leads cleanly',
    desc: 'No more sticky notes or forgotten voicemails. Every inquiry is logged.',
  },
  {
    icon: ArrowsLeftRight,
    title: 'Stay in control',
    desc: 'It can hand off to you anytime. You decide when to step in.',
  },
  {
    icon: ChartLineUp,
    title: 'Get AI summaries & insights',
    desc: 'Review call summaries, measure performance, and see what customers are asking about.',
  },
];

export default function WhySection() {
  return (
    <Box component="section" sx={{ py: { xs: 12, md: 18 } }}>
      <Container maxWidth="lg">
        
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Why this exists
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 500, mx: 'auto' }}>
            Small businesses lose thousands every year to missed calls. We built this to fix that.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
                
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '20px',
                    bgcolor: '#FFF5F3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 4,
                  }}
                >
                  <item.icon size={32} weight="duotone" color="#FF5A3C" />
                </Box>

                <Typography variant="h3" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: '#666' }}>
                  {item.desc}
                </Typography>

              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

