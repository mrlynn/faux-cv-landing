'use client';

import { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Grid,
  SelectChangeEvent
} from '@mui/material';
import { marked } from 'marked';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    industry: 'tech',
    experience: '5',
    format: 'json'
  });

  const [result, setResult] = useState('');

  const handleChange = (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateMarkdown = (data: any) => {
    return `# ${data.basics.name}
${data.basics.label}

## Contact
- Email: ${data.basics.email}
- Phone: ${data.basics.phone}
- Location: ${data.basics.location.city}, ${data.basics.location.state}

## Professional Experience
${data.work.map((job: any) => `
### ${job.company}
**${job.position}** | ${job.startDate} - ${job.endDate}

${job.highlights.map((highlight: string) => `- ${highlight}`).join('\n')}
`).join('\n')}

## Skills
### Technical
${data.skills.technical.map((skill: string) => `- ${skill}`).join('\n')}

### Soft Skills
${data.skills.soft.map((skill: string) => `- ${skill}`).join('\n')}

## Education
${data.education.map((edu: any) => `
### ${edu.institution}
**${edu.studyType} in ${edu.area}** | ${edu.startDate} - ${edu.endDate}
`).join('\n')}

## Certifications
${data.certifications.map((cert: any) => `
- ${cert.name} (${cert.issuer}) - ${cert.date}
`).join('\n')}

## Profiles
${data.basics.profiles.map((profile: any) => `- [${profile.network}](${profile.url})`).join('\n')}
`;
  };

  const generatePDF = async (data: any) => {
    // Create a temporary div to render the resume
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `
      <div style="padding: 40px; font-family: Arial, sans-serif;">
        <h1 style="color: #2e3440; margin-bottom: 5px;">${data.basics.name}</h1>
        <h2 style="color: #4c566a; margin-top: 0; font-size: 18px;">${data.basics.label}</h2>
        
        <div style="margin: 20px 0; color: #4c566a;">
          ${data.basics.email} | ${data.basics.phone}<br/>
          ${data.basics.location.city}, ${data.basics.location.state}
        </div>

        <h3 style="color: #2e3440; border-bottom: 2px solid #4c566a;">Professional Experience</h3>
        ${data.work.map((job: any) => `
          <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 5px;">${job.company}</h4>
            <div style="color: #4c566a; margin-bottom: 10px;">
              <strong>${job.position}</strong> | ${job.startDate} - ${job.endDate}
            </div>
            <ul style="margin-top: 5px;">
              ${job.highlights.map((highlight: string) => `
                <li style="margin-bottom: 5px;">${highlight}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}

        <h3 style="color: #2e3440; border-bottom: 2px solid #4c566a;">Skills</h3>
        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 5px;">Technical</h4>
          <div style="color: #4c566a;">${data.skills.technical.join(' • ')}</div>
          
          <h4 style="margin-bottom: 5px; margin-top: 15px;">Soft Skills</h4>
          <div style="color: #4c566a;">${data.skills.soft.join(' • ')}</div>
        </div>

        <h3 style="color: #2e3440; border-bottom: 2px solid #4c566a;">Education</h3>
        ${data.education.map((edu: any) => `
          <div style="margin-bottom: 15px;">
            <h4 style="margin-bottom: 5px;">${edu.institution}</h4>
            <div style="color: #4c566a;">
              <strong>${edu.studyType} in ${edu.area}</strong> | ${edu.startDate} - ${edu.endDate}
            </div>
          </div>
        `).join('')}

        <h3 style="color: #2e3440; border-bottom: 2px solid #4c566a;">Certifications</h3>
        <ul>
          ${data.certifications.map((cert: any) => `
            <li style="margin-bottom: 5px;">
              <strong>${cert.name}</strong> (${cert.issuer}) - ${cert.date}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    document.body.appendChild(tempDiv);

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('resume.pdf');
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Generate more realistic resume data based on industry and experience
    const resume = {
      basics: {
        name: "Alex Thompson",
        label: formData.industry === 'tech' ? "Senior Software Engineer" : 
               formData.industry === 'finance' ? "Senior Financial Analyst" :
               formData.industry === 'healthcare' ? "Clinical Director" :
               formData.industry === 'marketing' ? "Marketing Manager" : "Education Specialist",
        email: "alex.thompson@example.com",
        phone: "(555) 123-4567",
        location: {
          city: "San Francisco",
          state: "CA",
          country: "USA"
        },
        profiles: [
          {
            network: "LinkedIn",
            url: "https://linkedin.com/in/alexthompson"
          },
          {
            network: "GitHub",
            url: "https://github.com/alexthompson"
          }
        ]
      },
      work: [
        {
          company: formData.industry === 'tech' ? "TechCorp Solutions" :
                  formData.industry === 'finance' ? "Global Finance Partners" :
                  formData.industry === 'healthcare' ? "HealthCare Systems" :
                  formData.industry === 'marketing' ? "Digital Marketing Pro" : "Education First",
          position: "Senior " + (
            formData.industry === 'tech' ? "Software Engineer" :
            formData.industry === 'finance' ? "Financial Analyst" :
            formData.industry === 'healthcare' ? "Healthcare Administrator" :
            formData.industry === 'marketing' ? "Marketing Strategist" : "Education Coordinator"
          ),
          startDate: `${2024 - Number(formData.experience)}`,
          endDate: "Present",
          highlights: [
            `Led ${formData.industry} initiatives resulting in 40% improvement in key metrics`,
            `Managed team of ${Math.min(Math.floor(Number(formData.experience) * 1.5), 12)} professionals`,
            `Implemented innovative solutions for ${formData.industry}-specific challenges`,
            `Reduced operational costs by 25% through process optimization`
          ]
        },
        {
          company: formData.industry === 'tech' ? "Innovation Labs" :
                  formData.industry === 'finance' ? "Investment Strategies" :
                  formData.industry === 'healthcare' ? "Medical Center" :
                  formData.industry === 'marketing' ? "Brand Builders" : "Learning Academy",
          position: formData.industry === 'tech' ? "Software Engineer" :
                   formData.industry === 'finance' ? "Financial Analyst" :
                   formData.industry === 'healthcare' ? "Healthcare Manager" :
                   formData.industry === 'marketing' ? "Marketing Specialist" : "Education Specialist",
          startDate: `${2024 - Number(formData.experience) - 3}`,
          endDate: `${2024 - Number(formData.experience)}`,
          highlights: [
            `Developed and implemented ${formData.industry} strategies`,
            `Increased team productivity by 35%`,
            `Collaborated with cross-functional teams on key projects`
          ]
        }
      ],
      skills: {
        technical: formData.industry === 'tech' ? 
          ["JavaScript", "Python", "React", "Node.js", "AWS", "Docker"] :
          formData.industry === 'finance' ? 
          ["Financial Modeling", "Risk Analysis", "Bloomberg Terminal", "Excel", "SQL"] :
          formData.industry === 'healthcare' ?
          ["Electronic Health Records", "Healthcare Administration", "Clinical Workflows", "HIPAA"] :
          formData.industry === 'marketing' ?
          ["Digital Marketing", "SEO", "Content Strategy", "Analytics", "Social Media"] :
          ["Curriculum Development", "Educational Technology", "Student Assessment", "LMS"],
        soft: [
          "Leadership",
          "Project Management",
          "Team Collaboration",
          "Problem Solving",
          "Communication"
        ]
      },
      education: [
        {
          institution: "University of California, Berkeley",
          area: formData.industry === 'tech' ? "Computer Science" :
                formData.industry === 'finance' ? "Finance" :
                formData.industry === 'healthcare' ? "Healthcare Administration" :
                formData.industry === 'marketing' ? "Marketing" : "Education",
          studyType: "Bachelor of Science",
          startDate: "2010",
          endDate: "2014"
        }
      ],
      certifications: [
        {
          name: formData.industry === 'tech' ? "AWS Solutions Architect" :
                formData.industry === 'finance' ? "CFA Level III" :
                formData.industry === 'healthcare' ? "Healthcare Management Certificate" :
                formData.industry === 'marketing' ? "Google Analytics Certification" : "Teaching Certification",
          issuer: formData.industry === 'tech' ? "Amazon Web Services" :
                 formData.industry === 'finance' ? "CFA Institute" :
                 formData.industry === 'healthcare' ? "ACHE" :
                 formData.industry === 'marketing' ? "Google" : "State Board of Education",
          date: "2023"
        }
      ]
    };

    // Format the output based on selected format
    switch (formData.format) {
      case 'markdown':
        setResult(generateMarkdown(resume));
        break;
      case 'pdf':
        await generatePDF(resume);
        setResult('PDF has been generated and downloaded.');
        break;
      case 'json':
      default:
        setResult(JSON.stringify(resume, null, 2));
        break;
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="industry-label">Industry</InputLabel>
              <Select
                labelId="industry-label"
                name="industry"
                value={formData.industry}
                label="Industry"
                onChange={handleChange}
              >
                <MenuItem value="tech">Technology</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="healthcare">Healthcare</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
                <MenuItem value="education">Education</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Years of Experience"
              name="experience"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              InputProps={{ inputProps: { min: 0, max: 40 } }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="format-label">Output Format</InputLabel>
              <Select
                labelId="format-label"
                name="format"
                value={formData.format}
                label="Output Format"
                onChange={handleChange}
              >
                <MenuItem value="json">JSON</MenuItem>
                <MenuItem value="markdown">Markdown</MenuItem>
                <MenuItem value="pdf">PDF</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              size="large"
            >
              Generate Resume
            </Button>
          </Grid>
        </Grid>
      </form>

      {result && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>Generated Resume:</Typography>
          <Paper 
            sx={{ 
              p: 2, 
              bgcolor: '#f5f5f5',
              maxHeight: '400px',
              overflow: 'auto',
              fontFamily: formData.format === 'markdown' ? 'monospace' : 'inherit',
              whiteSpace: formData.format === 'markdown' ? 'pre-wrap' : 'normal'
            }}
          >
            <pre style={{ margin: 0 }}>
              {result}
            </pre>
          </Paper>
        </Box>
      )}
    </Paper>
  );
} 