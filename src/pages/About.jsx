import React from 'react';
import PageTransition from '../components/shared/PageTransition.jsx';
import SectionTitle from '../components/shared/SectionTitle.jsx';
import SkillCard from '../components/about/SkillCard.jsx';
import styles from './About.module.css';

const About = () => {
    const skills = [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'CSS/Tailwind', level: 85, icon: '🎨' },
    ];

    return (
        <PageTransition>
            <div className={styles.about}>
                <div className={styles.about__sectionTitle}>
                    <SectionTitle
                        title="About Me"
                        subtitle="Passionate developer crafting exceptional web experiences"
                    />
                </div>

                <div className={styles.about__description}>
                    <p>
                        With over 5 years of experience in web development, I specialize in building
                        modern, responsive, and user-friendly applications. My focus is on creating
                        clean, efficient code that delivers exceptional user experiences.
                    </p>
                </div>

                <div className={styles.about__skills}>
                    <h3 className={styles.about__skillsTitle}>Skills</h3>
                    <div className={styles.about__skillsGrid}>
                        {skills.map((skill) => (
                            <SkillCard
                                key={skill.name}
                                name={skill.name}
                                level={skill.level}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;