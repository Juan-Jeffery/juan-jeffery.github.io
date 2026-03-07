"use client";

import styles from './home.module.css';

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <div className={styles.contentWrapper}>
        
        {/* ✅ 封面區塊：文字疊加在 GIF 上 */}
        <div className={styles.hero}>
          <img 
            src="https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif" 
            alt="Bioinformatics Analysis GIF" 
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroText}>
              <h1>JUAN - JEFFERY</h1>
              <p>Bioinformatics | Genomic Data Science</p>
            </div>
          </div>
        </div>

        {/* 自我介紹卡片 */}
        <div className={styles.infoCard}>
          <span className={styles.sectionTitle}>{">"} ABOUT ME</span>
          <p className={styles.aboutText}>
            I am a Bioinformatics Specialist with a Master's degree from NYCU, 
            passionate about cancer genomics and data-driven biology.
            I specialize in Linux-based pipeline development, mutation analysis (ITD, WES), 
            and biological data visualization using Python and R.
          </p>
          <div className={styles.spacer}></div>
          <span className={styles.sectionTitle}>{">"} CONTACT</span>
          <div className={styles.contactItem}>
            <strong>GitHub:</strong> <a href="https://github.com/Juan-Jeffery" target="_blank">Juan-Jeffery</a>
          </div>
          <div className={styles.contactItem}>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/juan-jeffery" target="_blank">linkedin.com/in/juan-jeffery</a>
          </div>
        </div>

      </div>
    </main>
  );
}