'use client';

import { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CaretDown } from '@phosphor-icons/react';

const faqs = [
  { q: 'Will it replace my staff?', a: 'No. It handles repetitive calls so staff can focus on customers in front of them.' },
  { q: 'Can I keep my phone number?', a: 'Yes! Calls to your existing number route through the assistant.' },
  { q: 'What if it doesn\'t know something?', a: 'It takes a message or offers to transfer the call to you.' },
  { q: 'Can it book appointments?', a: 'Yes. We connect it to your calendar system.' },
  { q: 'Do I need to be "techy"?', a: 'No. We handle all setup. You get a simple dashboard.' },
  { q: 'Is recording required?', a: 'No, recording is optional.' },
  { q: 'How fast can I launch?', a: 'Most businesses are live within a few days.' },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | false>(0);

  return (
    <Box component="section" id="faq" sx={{ py: { xs: 12, md: 18 }, bgcolor: '#FAFAFA' }}>
      <Container maxWidth="md">

        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Frequently asked questions
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expanded === i}
              onChange={(_, isExpanded) => setExpanded(isExpanded ? i : false)}
              sx={{
                bgcolor: '#fff',
                borderRadius: '16px !important',
                border: expanded === i ? '2px solid #FF5A3C' : '1px solid #e8e8e8',
                mb: 2,
                '&:before': { display: 'none' },
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={<CaretDown size={20} weight="bold" color={expanded === i ? '#FF5A3C' : '#999'} />}
                sx={{ py: 1, px: 3 }}
              >
                <Typography variant="h3" sx={{ fontSize: '1.1rem', color: expanded === i ? '#FF5A3C' : '#1a1a1a' }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.8 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

      </Container>
    </Box>
  );
}

