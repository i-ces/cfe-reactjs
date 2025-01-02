import React from 'react';
import PageTransition from '../components/shared/PageTransition';
import SectionTitle from '../components/shared/SectionTitle';
import ContactForm from '../components/contact/ContactForm.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx/index.js';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <PageTransition>
            <div className={styles.contact}>
                <SectionTitle
                    title="Get in Touch"
                    subtitle="Let's discuss your project or just say hello"
                />

                <div className={styles.contact__grid}>
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;