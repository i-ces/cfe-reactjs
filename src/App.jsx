import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const isDarkMode = false;

  return (
    <ThemeProvider>
      <Router>
        <div
          className={`${styles.app} ${isDarkMode ? styles["app--dark"] : ""}`}
        >
          <Navbar />
          <main className={styles.app__main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
