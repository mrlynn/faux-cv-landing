// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
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
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';
import DemoForm from '../components/DemoForm';
import CodeExample from '../components/CodeExample';
import ResumePreview from '../components/ResumePreview';
import Footer from '../components/Footer';

export default function Home() {
  const theme = useTheme();
  const [showForm, setShowForm] = useState(false);

  const features = [
    {
      title: 'Realistic Content',
      description: 'Professionally written work experience, skills, education, and certifications that look authentic',
      icon: <DescriptionIcon sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Multiple Industries',
      description: 'Specialized profiles for tech, finance, healthcare, marketing, and education sectors',
      icon: <PeopleIcon sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Customizable Output',
      description: 'Generate in Markdown, JSON, PDF formats with customizable templates and styling',
      icon: <CodeIcon sx={{ color: theme.palette.primary.main }} />
    },
    {
      title: 'Batch Generation',
      description: 'Create multiple resumes at once with consistent, reproducible output using seeds',
      icon: <CheckCircleOutlineIcon sx={{ color: theme.palette.primary.main }} />
    }
  ];

  return (
    <>
      <Head>
        <title>Faux-CV | Generate Realistic Fake Resumes</title>
        <meta name="description" content="Generate realistic fake resumes for testing and development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Faux-CV
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            startIcon={<GitHubIcon />}
            href="https://github.com/username/faux-cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Toolbar>
      </AppBar>

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

      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Generate Realistic Fake Resumes
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: 4, fontWeight: 300 }}>
            Create authentic-looking resumes for testing and development with customizable industries, experience levels, and formats
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
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Hide Demo' : 'Try Demo'}
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

      {showForm && (
        <Box sx={{ py: 6, bgcolor: '#f5f5f5' }}>
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              Try It Out
            </Typography>
            <DemoForm />
          </Container>
        </Box>
      )}

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
          Quick Start
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f8f9fa' }}>
              <Typography variant="h6" gutterBottom>Global Installation</Typography>
              <Box sx={{ bgcolor: '#1a1a1a', p: 2, borderRadius: 1 }}>
                <Typography sx={{ color: '#fff', fontFamily: 'monospace' }}>
                  npm install -g faux-cv
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, bgcolor: '#f8f9fa' }}>
              <Typography variant="h6" gutterBottom>Quick Usage</Typography>
              <Box sx={{ bgcolor: '#1a1a1a', p: 2, borderRadius: 1 }}>
                <Typography sx={{ color: '#fff', fontFamily: 'monospace' }}>
                  npx faux-cv --industry tech --experience 5
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6, mt: 8 }}>
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
        
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Example Resumes
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={10} sx={{ mx: 'auto' }}>
              <ResumePreview />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Easy to Use
          </Typography>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2, bgcolor: '#f8f9fa' }}>
            <CodeExample />
          </Paper>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom>
                CLI Options
              </Typography>
              <Typography variant="body1" paragraph>
                Generate resumes directly from your command line with customizable options:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Industry Selection" 
                    secondary="tech | finance | healthcare | marketing | education" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="PDF Styling" 
                    secondary="Choose from default, modern, minimal, or professional themes" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Reproducible Output" 
                    secondary="Set random seeds for consistent generation" 
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h3" gutterBottom>
                Perfect For
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Application Testing" 
                    secondary="Test your ATS or resume parsing software with realistic data" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="UI Mockups" 
                    secondary="Fill your design mockups with believable content" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Training Data" 
                    secondary="Generate data for training resume analysis models" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Demos & Presentations" 
                    secondary="Create realistic examples for client presentations" 
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            PDF Template Styles
          </Typography>
          <Grid container spacing={4}>
            {['default', 'modern', 'minimal', 'professional'].map((style) => (
              <Grid item xs={12} sm={6} md={3} key={style}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize' }}>
                      {style}
                    </Typography>
                    <Box sx={{ height: 300, bgcolor: '#f5f5f5', mb: 2, position: 'relative' }}>
                      <Image
                        src={`/images/template-${style}.png`}
                        alt={`${style} template`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                    <Button 
                      variant="outlined" 
                      fullWidth
                      sx={{ mt: 1 }}
                      onClick={() => window.open(`/examples/${style}-example.pdf`)}
                    >
                      View Example
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                q: "Is the generated data completely fake?",
                a: "Yes, all generated data is fictional but designed to be realistic and professionally written."
              },
              {
                q: "Can I customize the output format?",
                a: "Yes, you can output in Markdown, JSON, or PDF formats, and even use custom Mustache templates."
              },
              {
                q: "Do I need additional dependencies for PDF generation?",
                a: "Yes, for PDF support you'll need to install puppeteer and showdown as optional dependencies."
              },
              {
                q: "Can I generate multiple resumes at once?",
                a: "Yes, use the --count option to generate multiple resumes in a single command."
              }
            ].map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={2}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{faq.q}</Typography>
                    <Typography variant="body1" color="text.secondary">{faq.a}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Divider />
      <Footer />
    </>
  );
}