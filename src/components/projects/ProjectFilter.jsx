import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectFilter.module.css';
import { useTheme } from '../../context/ThemeContext';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.projectFilter}>
            {categories.map((category) => (
                <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onCategoryChange(category)}
                    className={`${styles.projectFilter__button} ${activeCategory === category
                        ? isDarkMode
                            ? styles['projectFilter__button--active-dark']
                            : styles['projectFilter__button--active']
                        : isDarkMode
                            ? styles['projectFilter__button--dark']
                            : ''
                        }`}
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};

export default ProjectFilter;