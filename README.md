# Portfolio App

This project is a portfolio website built with React. It showcases various projects, skills, and contact information.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [JavaScript Concepts](#javascript-concepts)
- [Styling](#styling)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the app in development mode:**

   ```sh
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build the app for production:**

   ```sh
   npm run build
   ```

   This will create a `build` folder with the production build of the app.

## Project Structure

The project structure is as follows:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

## JavaScript Concepts

### 1. **React Components**

- **Function Components**: Used throughout the project to define UI components. Example: [HeroSection](http://_vscodecontentref_/3), [Navbar](http://_vscodecontentref_/4), [Footer](http://_vscodecontentref_/5), etc.
- **Props**: Used to pass data to components. Example: [SectionTitle](http://_vscodecontentref_/6) receives [title](http://_vscodecontentref_/7) and [subtitle](http://_vscodecontentref_/8) as props.
- **State**: Managed using the [useState](http://_vscodecontentref_/9) hook. Example: [ContactForm](http://_vscodecontentref_/10) manages form data and submission status.
- **Context**: Used to manage global state. Example: [ThemeContext](http://_vscodecontentref_/11) provides theme management across the app.

### 2. **React Router**

- **BrowserRouter**: Used to wrap the application and enable routing. Example: [App.jsx](http://_vscodecontentref_/12).
- **Routes and Route**: Define different routes in the application. Example: [App.jsx](http://_vscodecontentref_/13) defines routes for [Home](http://_vscodecontentref_/14), [About](http://_vscodecontentref_/15), [Projects](http://_vscodecontentref_/16), and [Contact](http://_vscodecontentref_/17).

### 3. **CSS Modules**

- **Scoped Styles**: CSS modules are used to scope styles to components. Example: [HeroSection.module.css](http://_vscodecontentref_/18), [Navbar.module.css](http://_vscodecontentref_/19), etc.

### 4. **Framer Motion**

- **Animations**: Used to add animations to components. Example: [HeroSection](http://_vscodecontentref_/20), [ProjectCard](http://_vscodecontentref_/21), [PageTransition](http://_vscodecontentref_/22).

### 5. **JavaScript ES6+ Features**

- **Arrow Functions**: Used to define functions. Example: [const handleSubmit = async (e) => { ... }](http://_vscodecontentref_/23) in [ContactForm](http://_vscodecontentref_/24).
- **Template Literals**: Used to create dynamic strings. Example: [className={](http://_vscodecontentref_/25)${styles.projectCard} ${isDarkMode ? styles['projectCard--dark'] : ''}`}` in [ProjectCard](http://_vscodecontentref_/26).
- **Destructuring**: Used to extract values from objects and arrays. Example: `const { isDarkMode } = useTheme();` in [ContactInfo](http://_vscodecontentref_/27).
- **Spread Operator**: Used to copy and merge objects and arrays. Example: [setFormData(prev => ({ ...prev, name: e.target.value }))](http://_vscodecontentref_/28) in [ContactForm](http://_vscodecontentref_/29).

## Styling

The project uses CSS modules for styling. Each component has its own CSS module file for scoped styles. Global styles are defined in [index.css](http://_vscodecontentref_/95) ).
