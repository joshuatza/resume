# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page React application that renders a professional resume with PDF export functionality. Built with Create React App, it displays a two-column resume layout with sidebar sections (Skills, Education, Certifications, References) and main content sections (Summary, Experience, Projects).

## Commands

### Development
```bash
npm start          # Start dev server at http://localhost:3000
npm test           # Run tests in watch mode
npm run build      # Build production bundle to /build
```

## Architecture

### Application Structure
- **Single Component App**: The entire resume is rendered in `src/App.js` as a single component with inline JSX structure
- **PDF Export**: Uses `html2pdf.js` library to convert the rendered resume DOM to PDF on-demand
- **Print Optimization**: Extensive print-specific CSS in `src/App.css` (lines 324-559) with two-column layout preservation

### Key Files
- `src/App.js`: Main component containing all resume content and PDF export logic
- `src/App.css`: All styling including responsive design and print-specific rules
- `src/index.js`: Standard React 19 entry point with StrictMode

### Styling Approach
The CSS uses a two-column grid layout (`.resume-content` with `grid-template-columns: 240px 1fr`):
- **Sidebar** (left, 240px): Skills, Education, Certifications, References
- **Main content** (right, flexible): Summary, Experience, Projects

Print styles heavily optimize spacing and font sizes for PDF output while maintaining the two-column layout.

### PDF Export Implementation
The `handleDownloadPDF` function (App.js:4-16) dynamically imports html2pdf.js and converts the `#resume-content` element to PDF with specific A4 formatting and margins (0.3in/0.4in).

## Important Patterns

When editing the resume content, maintain the semantic HTML structure with proper heading hierarchy (h2 for section titles, h3 for job/project titles) to ensure print styles apply correctly.

Print media queries use `page-break-inside: avoid` on sidebar sections to prevent content from splitting across pages.
