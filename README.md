# ChillsBay

## Live Demo

### [Visit us ➡️ ChillsBay](https://chillsbay-kazimorwan498.vercel.app/)

## 💫 About Me

Assalamu Alaikum, how are you? I hope you are well.

I'm Frontend Developer.

## 🌐 Socials

[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/kazimorwan498)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/kazimorwan498)
[![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@kazimorwan498)
[![Codepen](https://img.shields.io/badge/Codepen-000000?logo=codepen&logoColor=white)](https://codepen.io/kazimorwan498)

## 💻 Project Languages

React, Tailwind CSS, HeroUi, React-Slick

## Installation

Project setup by Vite

Step 1:

```
npm create vite@latest
```

Step 2:

```
npm install
```

Step 3:

```
cd your-project-name
```

Step 4:

```
npm run dev
```

Now install Tailwind CSS

- [Tailwind CSS](https://v3.tailwindcss.com/docs/guides/vite)
    I uses Tailwind CSS v3.4.x for this project.

Step 1:

Install Tailwind CSS

```
npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p
```

Step 2:

Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Step 3:

Add the Tailwind directives to your CSS

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now install HeroUi

- [HeroUI](https://www.heroui.com/docs/guide/installation)

Step 1:

Install Packages

```
npm install @heroui/react framer-motion
```

Step 2:

Add the HeroUI CSS

```
// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
```

### Project is ready to run

Now go to your browser and visit this site ➡️ `localhost:5173`
