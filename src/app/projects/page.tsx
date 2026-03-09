"use client";

import React, { useState } from 'react';
import styles from './projects.module.css';

export default function ProjectsPage() {
  // 控制目前展開的是哪個分類 ('bio', 'app', 'other', 或 null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // 切換手風琴狀態：點同一個會關閉，點別的會切換
  const toggleCategory = (category: string) => {
    setActiveCategory(prev => prev === category ? null : category);
  };

  return (
    <section className={`page-container ${styles.projectsPage}`}>
      <div className={styles.contentWrapper}>
        
        <h2 className="terminal-header">          
          <span className="prompt-symbol">{">"}</span> Progect
        </h2>

        {/* =========================================
             節點 1：Bioinformatics (左入，偏左)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInLeft}`}>
          {/* ✅ 圓角矩形按鈕：應用莫蘭迪藍光 (Dusty Blue) */}
          <div 
            className={`${styles.categoryRect} ${styles.posLeft} ${activeCategory === 'bio' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(123, 150, 166, 0.8)' } as React.CSSProperties} 
            onClick={() => toggleCategory('bio')}
          >
            <span>Bioinformatics</span>
          </div>

          {/* 展開的內容區塊 (手風琴伸縮) */}
          <div className={`${styles.accordionContent} ${activeCategory === 'bio' ? styles.open : ''}`}>
            {activeCategory === 'bio' && (
              <>
                <article className={styles.projectCard}>
                  <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/ITD.png')" }}></div>
                  <h3 className={styles.projectTitle}>ITD Mutation Pipeline</h3>
                  <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                    Bioinformatics pipeline for detecting Internal Tandem Duplications using Pindel and ScanITD.
                  </p>
                  <a href="https://github.com/Juan-Jeffery/ITD-pipeline" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>VIEW_REPO</a>
                </article>

                <article className={styles.projectCard}>
                  <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/cir_rna.png')" }}></div>
                  <h3 className={styles.projectTitle}>GotCha System</h3>
                  <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                    Optimized circular DNA design tool for RCA-based microRNA detection (iGEM Gold).
                  </p>
                  <a href="https://github.com/Juan-Jeffery/CSMU_iGEM" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>VIEW_REPO</a>
                </article>

                <article className={styles.projectCard}>
                  <h3 className={styles.projectTitle}>MR Analysis Pipeline</h3>
                  <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                    Automated R pipeline for Mendelian Randomization on GWAS summary statistics with strict LD clumping.
                  </p>
                  <span className={styles.btnLink} style={{ backgroundColor: '#555', cursor: 'not-allowed' }}>INTERNAL_TOOL</span>
                </article>
              </>
            )}
          </div>
        </div>

        {/* =========================================
             節點 2：Web Apps (右入，偏右)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInRight}`}>
          {/* ✅ 圓角矩形按鈕：應用莫蘭迪綠光 (Sage Green) */}
          <div 
            className={`${styles.categoryRect} ${styles.posCenter} ${activeCategory === 'app' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(140, 156, 118, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('app')}
          >
            <span>Web<br/><br/>Apps</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'app' ? styles.open : ''}`}>
            {activeCategory === 'app' && (
              <article className={styles.projectCard}>
                <h3 className={styles.projectTitle}>Chef's Assistant</h3>
                <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                  A weekly planner and recipe management application with an intuitive frontend interface.
                </p>
                <a href="https://github.com/Juan-Jeffery" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>VIEW_GITHUB</a>
              </article>
            )}
          </div>
        </div>

        {/* =========================================
             節點 3：Other Projects (左入，偏左)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInLeft}`}>
          {/* ✅ 圓角矩形按鈕：應用莫蘭迪黃光 (Dusty Gold) */}
          <div 
            className={`${styles.categoryRect} ${styles.posRight} ${activeCategory === 'other' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(181, 166, 66, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('other')}
          >
            <span>Other<br/><br/>Projects</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'other' ? styles.open : ''}`}>
            {activeCategory === 'other' && (
              <article className={styles.projectCard}>
                <h3 className={styles.projectTitle}>Pixel Portfolio</h3>
                <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                  An 8-bit retro-themed personal website built with React and CSS Modules, featuring interactive UI mechanics.
                </p>
                <a href="https://github.com/Juan-Jeffery" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>YOU_ARE_HERE</a>
              </article>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}