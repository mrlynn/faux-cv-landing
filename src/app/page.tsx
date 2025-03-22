'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent,
  Grid,
  Paper,
  useTheme,
  Divider
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DemoForm from './components/DemoForm';

export default function Home() {
  const theme = useTheme();
  const [showDemo, setShowDemo] = useState(false);

  const features = [
    {
      title: 'Realistic Content',
      description: 'Professionally written work experience, skills, education, and certifications',
      icon: <DescriptionIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
    },
    {
      title: 'Multiple Industries',
      description: 'Specialized profiles for tech, finance, healthcare, marketing, and education',
      icon: <PeopleIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
    },
    {
      title: 'Customizable Output',
      description: 'Generate in Markdown, JSON, PDF formats with customizable templates',
      icon: <CodeIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
    },
    {
      title: 'Batch Generation',
      description: 'Create multiple resumes at once with consistent output',
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{ 
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Generate Realistic Fake Resumes
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 400,
                  opacity: 0.9,
                }}
              >
                A powerful Node.js library for creating customizable, realistic resumes for testing and development
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    bgcolor: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: theme.palette.primary.contrastText,
                      opacity: 0.9,
                    },
                  }}
                  onClick={() => setShowDemo(!showDemo)}
                >
                  Try Demo
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    borderColor: theme.palette.primary.contrastText,
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                      borderColor: theme.palette.primary.contrastText,
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                  href="https://www.npmjs.com/package/faux-cv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  npm install faux-cv
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 300, md: 400 },
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/resume-preview.png"
                  alt="Resume Preview"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Demo Section */}
      {showDemo && (
        <Box 
          sx={{ 
            py: 8,
            bgcolor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              sx={{ 
                textAlign: 'center', 
                mb: 6,
                fontWeight: 700,
              }}
            >
              Try It Out
            </Typography>
            <DemoForm />
          </Container>
        </Box>
      )}

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              fontWeight: 700,
            }}
          >
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    bgcolor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ mr: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  component="div"
                  sx={{ 
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}
                >
                  5+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Industries
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  component="div"
                  sx={{ 
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}
                >
                  3
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Output Formats
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  component="div"
                  sx={{ 
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}
                >
                  100%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Customizable
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 8,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              mb: 4,
              fontWeight: 700,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              textAlign: 'center',
              mb: 4,
              opacity: 0.9,
            }}
          >
            Install faux-cv today and start generating realistic resumes for your projects
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: theme.palette.primary.contrastText,
                  opacity: 0.9,
                },
              }}
              href="https://www.npmjs.com/package/faux-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm install faux-cv
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                borderColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  borderColor: theme.palette.primary.contrastText,
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
              href="https://github.com/mrlynn/faux-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ mr: 1 }} />
              GitHub
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
} 