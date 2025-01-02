import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendEmail } from '../../utils/email';
import styles from './ContactForm.module.css';
import { useTheme } from '../../context/ThemeContext';

const ContactForm = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await sendEmail(formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div>
                <label htmlFor="name" className={styles.contactForm__label}>
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={`${styles.contactForm__input} ${isDarkMode ? styles['contactForm__input--dark'] : ''}`}
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className={styles.contactForm__label}>
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`${styles.contactForm__input} ${isDarkMode ? styles['contactForm__input--dark'] : ''}`}
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className={styles.contactForm__label}>
                    Message
                </label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={5}
                    className={`${styles.contactForm__textarea} ${isDarkMode ? styles['contactForm__textarea--dark'] : ''}`}
                    required
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className={styles.contactForm__button}
            >
                <Send size={20} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
                <p className={styles['contactForm__status--success']}>Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className={styles['contactForm__status--error']}>Failed to send message. Please try again.</p>
            )}
        </form>
    );
};

export default ContactForm;