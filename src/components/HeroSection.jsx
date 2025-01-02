import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <Fragment>


            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.heroSection}
            >
                <div className={styles.heroSection__container}>
                    <motion.h1
                        className={styles.heroSection__title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Creative Developer, Building Digital Experiences
                    </motion.h1>

                    <motion.p
                        className={styles.heroSection__description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        I craft modern web applications with a focus on user experience and clean code.
                    </motion.p>

                    <motion.div
                        className={styles.heroSection__buttons}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            to="/contact"
                            className={`${styles.heroSection__button} ${styles["heroSection__button--primary"]}`}
                        >
                            Hire Me
                        </Link>
                        <a
                            href="#_"
                            className={`${styles.heroSection__button} ${styles["heroSection__button--secondary"]}`}
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div >

                <motion.div
                    className={styles.heroSection__socials}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    {[
                        { Icon: Github, href: 'https://github.com/seamoonpandey', label: 'GitHub' },
                        { Icon: Facebook, href: 'https://facebook.com/see.moon.pandey', label: 'Facebook' },
                        { Icon: Twitter, href: 'https://twitter.com/seamoonpandey', label: 'Twitter' }
                    ].map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.heroSection__socialLink}
                            aria-label={label}
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </motion.div>
            </motion.section >
        </Fragment >
    );
};

export default HeroSection;