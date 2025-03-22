'use client';

// Move all the content from pages/index.js to here
// The main difference is adding the 'use client' directive
// and ensuring all client-side components are properly handled

import { useState } from 'react';
import Image from 'next/image';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  AppBar, 
  Toolbar, 
  Card, 
  CardContent,
  Grid,
  Paper,
  useTheme
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
      icon: <DescriptionIcon sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Multiple Industries',
      description: 'Specialized profiles for tech, finance, healthcare, marketing, and education',
      icon: <PeopleIcon sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Customizable Output',
      description: 'Generate in Markdown, JSON, PDF formats with customizable templates',
      icon: <CodeIcon sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Batch Generation',
      description: 'Create multiple resumes at once with consistent output',
      icon: <CheckCircleOutlineIcon sx={{ color: theme.palette.primary.main }} />
    }
  ];

  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Faux-CV
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            startIcon={<GitHubIcon />}
            href="https://github.com/mrlynn/faux-cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Toolbar>
      </AppBar>

      {/* NPM Badges */}
      <Box sx={{ py: 2, bgcolor: '#f5f5f5', textAlign: 'center' }}>
        <Container>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Image 
              src="https://img.shields.io/npm/v/faux-cv.svg" 
              alt="npm version"
              width={100}
              height={20}
            />
            <Image 
              src="https://img.shields.io/npm/dm/faux-cv.svg" 
              alt="Downloads"
              width={100}
              height={20}
            />
            <Image 
              src="https://img.shields.io/badge/License-MIT-yellow.svg" 
              alt="License: MIT"
              width={100}
              height={20}
            />
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" component="h1" gutterBottom>
            Generate Realistic Fake Resumes
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
            A powerful Node.js library for creating customizable, realistic resumes for testing and development
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'white', 
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: 'white',
                  opacity: 0.9
                }
              }}
              onClick={() => setShowDemo(!showDemo)}
            >
              Try Demo
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
              href="https://www.npmjs.com/package/faux-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm install faux-cv
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Demo Section */}
      {showDemo && (
        <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              Try It Out
            </Typography>
            <DemoForm />
          </Container>
        </Box>
      )}

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3">
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
} 