# Faux-CV Marketing Website

A modern, responsive marketing website for the [faux-cv](https://www.npmjs.com/package/faux-cv) NPM package - a powerful library for generating realistic fake resumes for testing and development purposes.

[![npm version](https://img.shields.io/npm/v/faux-cv.svg)](https://www.npmjs.com/package/faux-cv)
[![CI](https://github.com/mrlynn/faux-cv/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/mrlynn/faux-cv/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/faux-cv.svg)](https://www.npmjs.com/package/faux-cv)

## Features

- 🎯 Interactive resume generator demo
- 📄 Multiple output formats (JSON, Markdown, PDF)
- 🎨 Industry-specific templates
- 💼 Customizable experience levels
- 🚀 Built with Next.js 14 and Material-UI
- 📱 Fully responsive design

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/faux-cv-website.git

# Navigate to the project directory
cd faux-cv-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`.

## Project Structure

```
faux-cv-website/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── theme.ts       # MUI theme configuration
│   └── public/            # Static assets
├── package.json
└── next.config.js
```

## Key Components

- `DemoForm`: Interactive resume generator with multiple output formats
- `CodeExample`: Code snippet showcase
- `ResumePreview`: Sample resume previews
- `ThemeRegistry`: Material-UI theme provider setup

## Dependencies

- Next.js 14
- Material-UI (MUI)
- jsPDF (PDF generation)
- html2canvas (PDF generation)
- TypeScript
- Marked (Markdown parsing)

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Related Projects

- [faux-cv](https://github.com/mrlynn/faux-cv) - The main NPM package
- [faux-cv-templates](https://github.com/mrlynn/faux-cv-templates) - Resume templates

## Support

- Documentation: [Link to docs]
- Issues: [GitHub Issues](https://github.com/yourusername/faux-cv-website/issues)
- Twitter: [@yourusername](https://twitter.com/yourusername)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Material-UI](https://mui.com/)
- PDF generation using [jsPDF](https://github.com/parallax/jsPDF)
