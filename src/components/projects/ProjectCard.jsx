import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ project }) => {
    const { isDarkMode } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className={`${styles.projectCard} ${isDarkMode ? styles['projectCard--dark'] : ''}`}
        >
            <img
                src={project.image}
                alt={project.title}
                className={styles.projectCard__image}
            />
            <div className={styles.projectCard__content}>
                <h3 className={styles.projectCard__title}>{project.title}</h3>
                <p className={`${styles.projectCard__description} ${isDarkMode ? styles['projectCard__description--dark'] : ''}`}>
                    {project.description}
                </p>
                <div className={styles.projectCard__tags}>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`${styles.projectCard__tag} ${isDarkMode ? styles['projectCard__tag--dark'] : ''}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className={styles.projectCard__links}>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectCard__link} ${isDarkMode ? styles['projectCard__link--dark'] : ''}`}
                    >
                        <Github size={20} />
                        <span>Code</span>
                    </a>
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectCard__link} ${isDarkMode ? styles['projectCard__link--dark'] : ''}`}
                    >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;