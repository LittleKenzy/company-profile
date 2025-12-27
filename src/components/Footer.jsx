import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} COMPANY NAME. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
