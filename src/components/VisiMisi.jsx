import styles from './VisiMisi.module.css';

const VisiMisi = () => {
  return (
    <section id="visimisi" className={styles.visimisi}>
      <div className="container">
        <h2 className={styles.title}>Visi & Misi</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Visi</h3>
            <p>
              Menjadi perusahaan teknologi terdepan yang memberikan solusi inovatif
              dan berkelanjutan untuk memajukan ekonomi digital global.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Misi</h3>
            <ul className={styles.list}>
              <li>Memberikan layanan berkualitas tinggi yang berorientasi pada kepuasan pelanggan.</li>
              <li>Menciptakan lingkungan kerja yang kolaboratif dan inovatif.</li>
              <li>Terus beradaptasi dengan perkembangan teknologi terbaru.</li>
              <li>Membangun kemitraan jangka panjang yang saling menguntungkan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
