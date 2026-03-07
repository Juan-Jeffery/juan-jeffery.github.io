"use client";

import styles from './projects.module.css';

export default function ProjectsPage() {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.contentWrapper}>
        <h2 className="terminal-header" style={{ marginBottom: '50px' }}>
          <span className="prompt-symbol">{">"}</span> LOADING_PROJECTS...
        </h2>

        {/* ITD Pipeline 專案 */}
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>ITD Mutation Analysis</h3>
          <p style={{ fontSize: '0.9em', marginBottom: '20px' }}>
            Bioinformatics pipeline for detecting Internal Tandem Duplications in cancer genomes using Pindel and ScanITD.
          </p>
          <a href="https://github.com/Juan-Jeffery/ITD-pipeline" target="_blank" className={styles.btnLink}>VIEW_DATA</a>
        </div>

        {/* iGEM 專案 */}
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Circular-DNA Tool</h3>
          <p style={{ fontSize: '0.9em', marginBottom: '20px' }}>
            GotCha system: Optimized circular DNA design for RCA-based microRNA detection.
          </p>
          <a href="https://github.com/Juan-Jeffery/CSMU_iGEM" target="_blank" className={styles.btnLink}>VIEW_DATA</a>
        </div>
      </div>
    </section>
  );
}