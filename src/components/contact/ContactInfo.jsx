import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './ContactInfo.module.css';
import { useTheme } from '../../context/ThemeContext';

const ContactInfo = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={styles.contactInfo}>
            <div className={styles.contactInfo__item}>
                <Mail className={`${styles.contactInfo__icon} ${isDarkMode ? styles['contactInfo__icon--dark'] : ''}`} />
                <div>
                    <h3 className={styles.contactInfo__title}>Email</h3>
                    <p className={`${styles.contactInfo__text} ${isDarkMode ? styles['contactInfo__text--dark'] : ''}`}>contact@example.com</p>
                </div>
            </div>

            <div className={styles.contactInfo__item}>
                <Phone className={`${styles.contactInfo__icon} ${isDarkMode ? styles['contactInfo__icon--dark'] : ''}`} />
                <div>
                    <h3 className={styles.contactInfo__title}>Phone</h3>
                    <p className={`${styles.contactInfo__text} ${isDarkMode ? styles['contactInfo__text--dark'] : ''}`}>+1 (555) 123-4567</p>
                </div>
            </div>

            <div className={styles.contactInfo__item}>
                <MapPin className={`${styles.contactInfo__icon} ${isDarkMode ? styles['contactInfo__icon--dark'] : ''}`} />
                <div>
                    <h3 className={styles.contactInfo__title}>Location</h3>
                    <p className={`${styles.contactInfo__text} ${isDarkMode ? styles['contactInfo__text--dark'] : ''}`}>San Francisco, CA</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;