import React from 'react';
import { Github, Facebook, Twitter } from 'lucide-react';
import styles from './Footer.module.css';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    const socialLinks = [

        { Icon: Github, href: 'https://github.com/seamoonpandey', label: 'GitHub' },
        { Icon: Facebook, href: 'https://facebook.com/see.moon.pandey', label: 'Facebook' },
        { Icon: Twitter, href: 'https://twitter.com/seamoonpandey', label: 'Twitter' }

    ];

    return (
        <footer className={`${styles.footer} ${isDarkMode ? styles['footer--dark'] : ''}`}>
            <div className={styles.footer__container}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__socialLinks}>
                        {socialLinks.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.footer__socialLink} ${isDarkMode ? styles['footer__socialLink--dark'] : ''}`}
                                aria-label={label}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                    <p className={`${styles.footer__text} ${isDarkMode ? styles['footer__text--dark'] : ''}`}>
                        © {new Date().getFullYear()} Moon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;