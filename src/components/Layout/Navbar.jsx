import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isDarkMode ? styles['navbar--dark'] : ''}`}>
            <div className={styles.navbar__container}>
                <Link to="/" className={styles.navbar__brand}>
                    Moon
                </Link>

                {/* Desktop Navigation */}
                <div className={`${styles.navbar__nav} ${isOpen ? styles['navbar__nav--visible'] : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`${styles.navbar__link} ${location.pathname === item.path
                                ? isDarkMode
                                    ? styles['navbar__link--active-dark']
                                    : styles['navbar__link--active']
                                : isDarkMode
                                    ? styles['navbar__link--dark']
                                    : ''
                                }`}
                        >
                            {location.pathname === item.path && (
                                <motion.div
                                    layoutId="underline"
                                    className={`${styles.navbar__underline} ${isDarkMode ? styles['navbar__underline--dark'] : ''
                                        }`}
                                />
                            )}
                            {item.label}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className={`${styles.navbar__themeButton} ${isDarkMode ? styles['navbar__themeButton--dark'] : ''
                            }`}
                    >
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Navigation Button */}
                <button
                    className={styles.navbar__menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`${styles.navbar__mobileMenu} ${isDarkMode ? styles['navbar__mobileMenu--dark'] : ''
                        }`}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`${styles.navbar__mobileLink} ${location.pathname === item.path
                                ? isDarkMode
                                    ? styles['navbar__mobileLink--active-dark']
                                    : styles['navbar__mobileLink--active']
                                : isDarkMode
                                    ? styles['navbar__mobileLink--dark']
                                    : ''
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;