import { MapPin, Mail, Phone } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hubungi Kami</h2>
        
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <MapPin size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>Alamat</h3>
            <p className={styles.infoText}>Jl. Teknologi No. 123, Jakarta Selatan</p>
          </div>
          
          <div className={styles.infoItem}>
            <Mail size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>info@companyname.com</p>
          </div>
          
          <div className={styles.infoItem}>
            <Phone size={32} className={styles.icon} />
            <h3 className={styles.infoTitle}>WhatsApp</h3>
            <p className={styles.infoText}>+62 812 3456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
