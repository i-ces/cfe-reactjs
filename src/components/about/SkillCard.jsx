import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillCard.module.css';
import { useTheme } from '../../context/ThemeContext';

const SkillCard = ({ name, level, icon }) => {
    const { isDarkMode } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className={`${styles.skillCard} ${isDarkMode ? styles['skillCard--dark'] : ''}`}
        >
            <div className={styles.skillCard__header}>
                <span className={styles.skillCard__icon}>{icon}</span>
                <h3 className={styles.skillCard__name}>{name}</h3>
            </div>
            <div className={`${styles.skillCard__progressBar} ${isDarkMode ? styles['skillCard__progressBar--dark'] : ''}`}>
                <div
                    className={styles.skillCard__progress}
                    style={{ width: `${level}%` }}
                />
            </div>
        </motion.div>
    );
};

export default SkillCard;