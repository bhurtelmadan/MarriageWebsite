# A & B's Wedding Website (React Version)

A elegant, modern and responsive wedding website created using React.js with beautiful animations and styling.

## Features

- Elegant design with soft color scheme and decorative elements
- Smooth transitions and animations between tabs
- Responsive layout for all devices (mobile, tablet, desktop)
- Three sections/tabs: Home, About Us, and Photos
- Built with React.js for modern web development
- URL hash-based navigation (#home, #about, #photos)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone or download this repository
2. Navigate to the project directory in your terminal
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## Customization Guide

### Changing Content

#### Home Tab
- To replace the couple's image: Edit the `src` attribute in the image tag in `src/components/Home.js`
- To modify wedding details: Edit the text within the detail-item divs in `src/components/Home.js`

#### About Us Tab
- Update the placeholder text with your actual story in `src/components/AboutUs.js`

#### Photos Tab
- When your photos are ready, replace the placeholder grid in `src/components/Photos.js` with your actual images

### Styling Changes

If you want to change the color scheme or other styling elements:

- Open `src/styles.css` and look for these main colors:
  - `#fff9f9` - Light background color
  - `#d4a5a5` - Main accent color (soft pink)
  - `#f8d0d0` - Border color
  - `rgba(248, 208, 208, 0.5)` - Semi-transparent border color

- To change fonts, modify the Google Fonts link in the `public/index.html` file and update the font-family properties in `src/styles.css`

- The site includes decorative elements like:
  - Ornamental dividers (❦)
  - Heart symbols (♥)
  - Quotation marks in the About section
  - Gradient backgrounds and subtle paper textures

## Building for Production

When you're ready to deploy your website:

```
npm run build
```

This will create an optimized build in the `build` folder that can be deployed to any web hosting service.

## Additional Notes

- The site is a React single-page application with smooth transitions
- URL hash-based navigation allows for sharing direct links to specific tabs
- To add real photo uploading functionality, you would need to implement backend server code
- For any major functionality changes, you might need to consult a React developer

## Credits

- Placeholder couple image from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Subtle background patterns from [Transparent Textures](https://www.transparenttextures.com/)
- Wedding rings favicon from [Icons8](https://icons8.com)
- Built with [React](https://reactjs.org/) 