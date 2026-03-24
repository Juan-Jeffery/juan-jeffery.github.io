"use client";

import React, { useState } from 'react';
import styles from './projects.module.css';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(prev => prev === category ? null : category);
  };

  return (
    <section className={`page-container ${styles.projectsPage}`}>
      <div className={styles.contentWrapper}>
        
        <h2 className="terminal-header">          
          <span className="prompt-symbol">{">"}</span> Project
        </h2>

        {/* =========================================
             節點 1：Bioinformatics (ID: bio)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInLeft}`}>
          <div 
            className={`${styles.categoryRect} ${styles.pos1} ${activeCategory === 'bio' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(123, 150, 166, 0.8)' } as React.CSSProperties} 
            onClick={() => toggleCategory('bio')}
          >
            <span>Bioinformatics <br/><br/> tools & pipelines</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'bio' ? styles.open : ''}`}>
            {/* ✅ 移除了條件渲染，讓卡片永遠在 HTML 裡，交由 CSS 控制顯示與動畫 */}
            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/cir_rna.png')" }}></div>
              <h3 className={styles.projectTitle}>GotCha System (circular DNA design)</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                Optimized circular DNA design tool for RCA-based microRNA detection (iGEM Gold).
              </p>
              <a href="https://github.com/Juan-Jeffery/CSMU_iGEM" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>check here</a>
            </article>

            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/ITD.png')" }}></div>
              <h3 className={styles.projectTitle}>ITD Mutation Detection Pipeline</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                Bioinformatics pipeline for detecting Internal Tandem Duplications using Pindel, Genomonitdetector and ScanITD.
              </p>
              <a href="https://github.com/Juan-Jeffery/ITD-pipeline" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>check here</a>
            </article>

            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/dna.png')" }}></div>
              <h3 className={styles.projectTitle}>DNA variant calling pipeline</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                Using Linux environment, built a pipeline for calling DNA variants from sequencing data.
              </p>
              <a href="https://github.com/Juan-Jeffery/DNA_Variant_Calling_pipeline" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>check here</a>
            </article>

            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/MR.png')" }}></div>
              <h3 className={styles.projectTitle}>GWAS MR Analysis Pipeline</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                Automated R pipeline for Mendelian Randomization on GWAS summary statistics with strict LD clumping.
              </p>
              <a href="https://github.com/Juan-Jeffery/GWAS_MR_pipeline" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>check here</a>
            </article>
          </div>
        </div>

        {/* =========================================
             節點 2：Bioinformatics Sideproject (ID: bio_side)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInRight}`}>
          <div 
            className={`${styles.categoryRect} ${styles.pos2} ${activeCategory === 'bio_side' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(230, 167, 135, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('bio_side')}
          >
            <span>Bioinformatics<br/><br/>sideproject</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'bio_side' ? styles.open : ''}`}>
            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/Algorithm.png')" }}></div>
              <h3 className={styles.projectTitle}>Algorithm Visualization web</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                A web-based interactive system for learning and visualizing classic algorithms.
              </p>
              <a href="https://juan-jeffery.github.io/Algorithm/main.html" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>Get started</a>
            </article>

            <article className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Caculator</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                A collection of specialized calculators for scientific and mathematical applications.
              </p>
              <a href="https://github.com/Juan-Jeffery/Caculator/" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>VIEW_GITHUB</a>
            </article>
          </div>
        </div>

        {/* =========================================
             節點 3：Web Apps (ID: app)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInLeft}`}>
          <div 
            className={`${styles.categoryRect} ${styles.pos3} ${activeCategory === 'app' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(140, 156, 118, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('app')}
          >
            <span>Web<br/><br/>Apps</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'app' ? styles.open : ''}`}>
            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/Chef_Assistant.png')" }}></div>
              <h3 className={styles.projectTitle}>Chef's Assistant</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                A weekly planner and recipe management application with an intuitive frontend interface.
              </p>
              <a href="https://juan-jeffery.github.io/Chef-s_Assistant/" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>Get started</a>
            </article>

            <article className={styles.projectCard}>
              <div className={styles.bgImageOverlay} role="img" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/Bridge_go.png')" }}></div>
              <h3 className={styles.projectTitle}>Bridge go (Under development)</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#333' }}>
                A bridge game for four players, tense, exciting, and full of special effects.
              </p>
              <a href="https://juan-jeffery.github.io/Bridge_go/" target="_blank" rel="noopener noreferrer" className={styles.btnLink}>Get started</a>
            </article>
          </div>
        </div>

        {/* =========================================
             節點 4：Other Projects (ID: other)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInRight}`}>
          <div 
            className={`${styles.categoryRect} ${styles.pos4} ${activeCategory === 'other' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(181, 166, 66, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('other')}
          >
            <span>Other Projects</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'other' ? styles.open : ''}`}>
            <article className={styles.projectCard}>
              <h3 className={styles.projectTitle} style={{ color: '#888' }}>To Be Continued</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#555' }}>
                To Be Continued
              </p>
            </article>
          </div>
        </div>

        {/* =========================================
             節點 5：To Be Continued 1 (ID: tbc1)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInLeft}`}>
          <div 
            className={`${styles.categoryRect} ${styles.pos5} ${activeCategory === 'tbc1' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(170, 160, 170, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('tbc1')}
          >
            <span>To Be<br/><br/>Continued</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'tbc1' ? styles.open : ''}`}>
            <article className={styles.projectCard}>
              <h3 className={styles.projectTitle} style={{ color: '#888' }}>To Be Continued</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#555' }}>
                To Be Continued
              </p>
            </article>
          </div>
        </div>

        {/* =========================================
             節點 6：To Be Continued 2 (ID: tbc2)
        ========================================= */}
        <div className={`${styles.nodeWrapper} ${styles.flyInRight}`}>
          <div 
            className={`${styles.categoryRect} ${styles.pos6} ${activeCategory === 'tbc2' ? styles.activeRect : ''}`}
            style={{ '--glow-color': 'rgba(160, 170, 160, 0.8)' } as React.CSSProperties}
            onClick={() => toggleCategory('tbc2')}
          >
            <span>To Be<br/><br/>Continued</span>
          </div>

          <div className={`${styles.accordionContent} ${activeCategory === 'tbc2' ? styles.open : ''}`}>
            <article className={styles.projectCard}>
              <h3 className={styles.projectTitle} style={{ color: '#888' }}>To Be Continued</h3>
              <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4', color: '#555' }}>
                To Be Continued
              </p>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}