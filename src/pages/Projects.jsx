import React, { useState, useMemo } from 'react';
import PageTransition from '../components/shared/PageTransition';
import SectionTitle from '../components/shared/SectionTitle';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter.jsx';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = useMemo(() => {
        const allTags = projects.flatMap((project) => project.tags);
        return ['All', ...new Set(allTags)];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return projects;
        return projects.filter((project) =>
            project.tags.includes(activeCategory)
        );
    }, [activeCategory]);

    return (
        <PageTransition>
            <div className={styles.projects}>
                <SectionTitle
                    title="My Projects"
                    subtitle="Explore my latest work and side projects"
                />

                <ProjectFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                <div className={styles.projects__grid}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default Projects;