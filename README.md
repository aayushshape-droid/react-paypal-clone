# PayPal Open - React Project

A simple single page website built with React as a college assignment. The layout is based on the PayPal Open business landing page. All the data in this project is static, so there is no API, database or backend.

## Description

This project recreates the top part of the PayPal Open page, with a navigation bar, a Personal / Business toggle and a hero section. Below it there are a few extra sections so that every link in the navigation bar has a place to go on the same page.

The goal of this project is to practice the basics of React: components, JSX, state, events and CSS styling.

## Features

- Navigation bar with the PayPal logo, Personal, Business, Partners and Useful Info links
- Every navigation link scrolls to its own section on the same page
- Log In and Sign Up buttons in the navbar
- Personal / Business toggle in the hero section that changes the heading and text
- Hero section with the "PayPal Open" heading, subheading, description, Sign Up and Contact Sales buttons
- Sections for Personal, Business, Partners and Useful Info
- Simple Log In, Sign Up and Contact Sales forms (demo only, nothing is saved or sent)
- Sticky navbar that stays at the top while scrolling
- Basic responsive layout for smaller screens

## Technologies Used

- React 18
- Vite (to run and build the project)
- HTML
- CSS
- JavaScript

No UI libraries such as Bootstrap, Tailwind or Material UI are used.

## Project Structure

```
paypal-open/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    └── App.css
```

- `index.html` - the main HTML file with the root div
- `src/main.jsx` - connects React to the HTML page
- `src/App.jsx` - the whole page: navbar, hero, sections and forms
- `src/App.css` - all the styling

## How to Run the Project

Make sure Node.js is installed on your computer.

1. Clone or download this repository

```
git clone <your-repository-link>
cd paypal-open
```

2. Install the dependencies

```
npm install
```

3. Start the development server

```
npm run dev
```

4. Open the link shown in the terminal in your browser (usually http://localhost:5173)

## Build for Production

```
npm run build
```

The final files will be created in the `dist` folder.

## How It Works

- The navigation links use normal anchor tags like `<a href="#business">`, and each section has a matching `id`, so clicking a link scrolls to that section.
- `useState` is used to remember which toggle is selected (Personal or Business) and to show the demo message after a form is submitted.
- The text for the Personal and Business toggle is stored in a simple JavaScript object inside `App.jsx`.
- The forms use `onSubmit` with `preventDefault()` so the page does not reload.

## Notes

- This is a student project and not the official PayPal website.
- All content is static and written only for learning purposes.
- The logo and design are only a simple imitation of the reference image.

## Author

Your Name - Aayush Shape / Course - MCA
