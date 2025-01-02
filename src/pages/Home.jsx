import React from 'react'
import styles from './Home.module.css'
import HeroSection from '../components/HeroSection'
export default function Home() {
    return (
        <div className={styles.home}>
            <HeroSection />
        </div>
    )
}
