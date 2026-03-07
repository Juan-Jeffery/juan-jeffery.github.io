"use client";

import styles from './projects.module.css';

export default function ProjectsPage() {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.contentWrapper}>
        <h2 className="terminal-header" style={{ marginBottom: '50px' }}>
          <span className="prompt-symbol">{">"}</span> LOADING_PROJECTS...
        </h2>

        {/* 1. ITD Pipeline */}
        <div className={styles.projectCard}>
          <div className={styles.bgImageOverlay} style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/ITD.png')" }}></div>
          <h3 className={styles.projectTitle}>ITD Mutation Detect pipeline</h3>
          <p style={{ position: 'relative', zIndex: 1, fontSize: '0.9em', margin: '15px 0' }}>
            Bioinformatics pipeline for detecting Internal Tandem Duplications using Pindel and ScanITD.
          </p>
          <a href="https://github.com/Juan-Jeffery/ITD-pipeline" target="_blank" className={styles.btnLink}>VIEW_REPO</a>
        </div>

        {/* 2. iGEM GotCha */}
        <div className={styles.projectCard}>
          <div className={styles.bgImageOverlay} style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/cir_rna.png')" }}></div>
          <h3 className={styles.projectTitle}>Circular-DNA Tool</h3>
          <p style={{ position: 'relative', zIndex: 1, fontSize: '0.9em', margin: '15px 0' }}>
            GotCha system: Optimized circular DNA design for RCA-based microRNA detection (iGEM Gold).
          </p>
          <a href="https://github.com/Juan-Jeffery/CSMU_iGEM" target="_blank" className={styles.btnLink}>VIEW_REPO</a>
        </div>

        {/* 3. To Be Continued */}
        <div className={styles.projectCard}>
          <div className={styles.toBeContinued}>
            {">"} TO BE CONTINUED...
            <p style={{ fontFamily: 'sans-serif', fontSize: '12px', marginTop: '10px' }}>New analytical workflows in development.</p>
          </div>
        </div>

        {/* 4. To Be Continued */}
        <div className={styles.projectCard}>
          <div className={styles.toBeContinued}>
            {">"} TO BE CONTINUED...
            <p style={{ fontFamily: 'sans-serif', fontSize: '12px', marginTop: '10px' }}>Stay tuned for more bioinformatics tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}