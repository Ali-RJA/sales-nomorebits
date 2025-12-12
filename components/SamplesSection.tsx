'use client';

import { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, IconButton, Chip, Divider } from '@mui/material';
import { Play, Pause, User, Headset, Clock, Check, Buildings } from '@phosphor-icons/react';

interface Message {
  speaker: 'assistant' | 'user';
  text: string;
}

interface Sample {
  id: string;
  title: string;
  business: string;
  duration: string;
  outcome: string;
  audioFile: string;
  transcript: Message[];
}

const samples: Sample[] = [
  {
    id: 'dentist',
    title: 'Booked dental cleaning + insurance check',
    business: 'Bright Smile Dental',
    duration: '1:30',
    outcome: 'Appointment booked',
    audioFile: '/audio/dentist.wav',
    transcript: [
      { speaker: 'assistant', text: "Hey. Bright Smile Dental here. How can I help you." },
      { speaker: 'user', text: "Hi. Um, are you guys taking new patients?" },
      { speaker: 'assistant', text: "Yes. We are currently accepting new patients." },
      { speaker: 'user', text: "Great. Uh, I'm looking for a cleaning and exam. Um, what's your, like, uh, earliest opening tomorrow?" },
      { speaker: 'assistant', text: "Tomorrow, we have three ten PM or four twenty PM." },
      { speaker: 'user', text: "Okay. Uh, three ten PM works." },
      { speaker: 'assistant', text: "Sounds good. What name should I put this under?" },
      { speaker: 'user', text: "Um, Ali, um, before we book it, uh, do you take Delta Dental PPO?" },
      { speaker: 'assistant', text: "We accept Delta Dental PPO in many cases, and we'll verify your exact benefits before quoting." },
      { speaker: 'user', text: "Good. Okay. Um, one nuance. I do have a crown on my upper right, um, and it's kinda, like, sensitive to cold. Um, not not an emergency. Can you note that?" },
      { speaker: 'assistant', text: "Yes. I'll add a note about the crown and cold sensitivity for the clinician." },
      { speaker: 'user', text: "Alright. Cool. Um, Yeah. Uh, sounds good. Um, my name is Ali, by the way." },
      { speaker: 'assistant', text: "Thanks. What's the best phone number for the appointment?" },
      { speaker: 'user', text: "Okay. Use five five five zero one zero two zero two zero." },
      { speaker: 'assistant', text: "Perfect. Thank you." },
      { speaker: 'user', text: "Thanks." },
    ],
  },
  {
    id: 'dealership',
    title: 'Vehicle inquiry + test drive booking',
    business: 'Riverside Auto',
    duration: '1:22',
    outcome: 'Test drive scheduled',
    audioFile: '/audio/dealership.wav',
    transcript: [
      { speaker: 'assistant', text: "Hey, Riverside Auto here. How may I help you?" },
      { speaker: 'user', text: "Hey. Yeah. Quick question. I saw twenty twenty two Honda Civic Sport hatchback in sonic gray on your site. Um, I think the stock number was four eight two one. Is that still available?" },
      { speaker: 'assistant', text: "Yes. Stock r c four eight two one is available." },
      { speaker: 'user', text: "Nice. And, uh, what's the mileage on it?" },
      { speaker: 'assistant', text: "It has twenty four thousand one hundred eighty miles." },
      { speaker: 'user', text: "Cool. Does it have a Honda Sensing?" },
      { speaker: 'assistant', text: "Yes. It has Honda sensing." },
      { speaker: 'user', text: "Okay. Okay. Uh, what's the earliest test drive slot tomorrow?" },
      { speaker: 'assistant', text: "Tomorrow, we have ten thirty AM or one fifteen PM." },
      { speaker: 'user', text: "Cool. Okay. Um, can you also do, like, a quick trade in estimate? I have a twenty sixteen Camry. It's, like, um, a hundred and eighteen thousand miles." },
      { speaker: 'assistant', text: "Yes. Bring your trade in, and we'll do a quick estimate during your visit." },
      { speaker: 'user', text: "Alright. Yeah. Then, uh, tomorrow, ten thirty AM works." },
      { speaker: 'assistant', text: "Sounds good. Uh, what name should I put this under?" },
      { speaker: 'user', text: "Ali." },
      { speaker: 'assistant', text: "Thanks. What's the best phone number for the appointment?" },
      { speaker: 'user', text: "Uh, five five five zero one zero two zero two zero" },
      { speaker: 'assistant', text: "Perfect. Thank you." },
    ],
  },
  {
    id: 'hardware',
    title: 'Product check + item hold for customer to pick up',
    business: 'Maple Hardware',
    duration: '1:03',
    outcome: 'Items held at counter',
    audioFile: '/audio/hardware.wav',
    transcript: [
      { speaker: 'assistant', text: "Hey. This is Maple Hardware. How can I help?" },
      { speaker: 'user', text: "Hey. Uh, do you have the Drano Max Gel eighty ounce?" },
      { speaker: 'assistant', text: "Yes. Drano Max Gel eighty ounces is in stock." },
      { speaker: 'user', text: "Nice. And what aisle is it in? And about how many are left?" },
      { speaker: 'assistant', text: "It's in aisle seven bay three, and we have six left." },
      { speaker: 'user', text: "Okay. Also, do you have a one and a half inch PVC p trap kit for, like, a bathroom sink?" },
      { speaker: 'assistant', text: "Yes. The one and a half inch p trap kit is in stock." },
      { speaker: 'user', text: "Cool. Uh, can you hold, like, one of each for me for about an hour?" },
      { speaker: 'assistant', text: "Sure. What name should I put the hold under?" },
      { speaker: 'user', text: "My name is Ali." },
      { speaker: 'assistant', text: "Thanks. What's the best phone number for the hold?" },
      { speaker: 'user', text: "Uh, my number is five five five zero one zero twenty twenty." },
      { speaker: 'assistant', text: "Perfect. Your hold will be ready at the front counter for one hour." },
      { speaker: 'user', text: "Cool. And, uh, what's the total before tax just, like, roughly?" },
      { speaker: 'assistant', text: "Before tax, the total is twenty forty eight." },
    ],
  },
];

function AudioCard({ sample }: { sample: Sample }) {
  const [playing, setPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioAvailable) {
      setExpanded(true);
      return;
    }
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          setAudioAvailable(false);
          setExpanded(true);
        });
      }
      setPlaying(!playing);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 4,
        border: '1px solid #e8e8e8',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Buildings size={18} weight="duotone" color="#999" />
            <Typography variant="body2" sx={{ color: '#999', fontWeight: 500 }}>
              {sample.business}
            </Typography>
          </Box>
          <IconButton
            onClick={togglePlay}
            sx={{
              width: 52,
              height: 52,
              bgcolor: !audioAvailable ? '#e8e8e8' : playing ? '#FF5A3C' : '#f5f5f5',
              color: !audioAvailable ? '#999' : playing ? '#fff' : '#FF5A3C',
              '&:hover': { 
                bgcolor: !audioAvailable ? '#e8e8e8' : '#FF5A3C', 
                color: !audioAvailable ? '#999' : '#fff' 
              },
            }}
          >
            {playing ? <Pause size={22} weight="fill" /> : <Play size={22} weight="fill" />}
          </IconButton>
        </Box>

        <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 3 }}>
          {sample.title}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
          <Chip 
            icon={<Clock size={14} />} 
            label={sample.duration} 
            size="small" 
            sx={{ bgcolor: '#f5f5f5', fontWeight: 500 }} 
          />
          <Chip 
            icon={<Check size={14} weight="bold" />} 
            label={sample.outcome} 
            size="small" 
            sx={{ bgcolor: '#E8F5E9', color: '#22C55E', fontWeight: 500 }} 
          />
        </Box>

        <audio 
          ref={audioRef} 
          src={sample.audioFile}
          onEnded={() => setPlaying(false)}
          onError={() => setAudioAvailable(false)}
          style={{ display: 'none' }}
        />

        {!audioAvailable && (
          <Typography variant="body2" sx={{ color: '#999', fontSize: '0.85rem', mb: 2 }}>
            Audio file not yet added. Read the transcript below.
          </Typography>
        )}

        <Box
          onClick={() => setExpanded(!expanded)}
          sx={{
            cursor: 'pointer',
            color: '#FF5A3C',
            fontWeight: 600,
            fontSize: '0.9rem',
            display: 'inline-block',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {expanded ? 'Hide transcript' : 'Show transcript'}
        </Box>
      </Box>

      {/* Transcript */}
      {expanded && (
        <Box sx={{ borderTop: '1px solid #f0f0f0', bgcolor: '#FAFAFA', p: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {sample.transcript.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: msg.speaker === 'assistant' ? '#FF5A3C' : '#e8e8e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {msg.speaker === 'assistant' ? (
                    <Headset size={16} weight="fill" color="#fff" />
                  ) : (
                    <User size={16} weight="fill" color="#666" />
                  )}
                </Box>
                <Box sx={{ pt: 0.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: msg.speaker === 'assistant' ? '#1a1a1a' : '#666',
                      fontWeight: msg.speaker === 'assistant' ? 500 : 400,
                      lineHeight: 1.6,
                    }}
                  >
                    {msg.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default function SamplesSection() {
  return (
    <Box component="section" id="samples" sx={{ py: { xs: 12, md: 18 } }}>
      <Container maxWidth="lg">

        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Hear real calls
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 500, mx: 'auto' }}>
            Listen to actual conversations handled by the AI assistant for different businesses.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {samples.map((sample) => (
            <Grid item xs={12} md={4} key={sample.id}>
              <AudioCard sample={sample} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
