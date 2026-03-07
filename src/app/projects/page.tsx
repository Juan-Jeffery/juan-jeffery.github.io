"use client";

import React from 'react';
import styles from './projects.module.css';

/**
 * ProjectsPage Component
 * * 專案作品集頁面：展示個人開發的生物資訊工具與研究項目。
 * 採用終端機風格標題，並配合 CSS Module 實作卡片掉落與漸顯動畫。
 */
export default function ProjectsPage() {
  return (
    /* ✅ 統一容器：page-container 確保全站頁面切換時，標題與外距完美對齊 */
    <section className={`page-container ${styles.projectsPage}`}>
      <div className={styles.contentWrapper}>
        
        {/* =========================================
             🖥️ 頁面標題 (Terminal Style)
        ========================================= */}
        <h2 className="terminal-header">          
          <span className="prompt-symbol">{">"}</span> LOADING_PROJECTS...
        </h2>

        {/* =========================================
             🧬 專案卡片 1：ITD Pipeline 
        ========================================= */}
        {/* 優化：改用 <article> 提升 HTML5 語意與 SEO */}
        <article className={styles.projectCard}>
          
          {/* 背景圖層：加入 role="img" 提升無障礙體驗 (a11y) */}
          <div 
            className={styles.bgImageOverlay} 
            role="img"
            aria-label="ITD Pipeline Visualization"
            style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/ITD.png')" }}
          ></div>
          
          <h3 className={styles.projectTitle}>ITD Mutation Detect pipeline</h3>
          
          {/* 專案描述：設定 z-index 確保文字在背景圖之上 */}
          <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4' }}>
            Bioinformatics pipeline for detecting Internal Tandem Duplications using Pindel and ScanITD.
          </p>
          
          {/* ✅ 外部連結安全優化：加入 rel="noopener noreferrer" 避免安全漏洞 */}
          <a 
            href="https://github.com/Juan-Jeffery/ITD-pipeline" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.btnLink}
          >
            VIEW_REPO
          </a>
        </article>

        {/* =========================================
             🧬 專案卡片 2：iGEM GotCha (2021 金牌)
        ========================================= */}
        <article className={styles.projectCard}>
          <div 
            className={styles.bgImageOverlay} 
            role="img"
            aria-label="Circular-DNA Tool Visualization"
            style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/cir_rna.png')" }}
          ></div>
          
          <h3 className={styles.projectTitle}>Circular-DNA Tool</h3>
          <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85em', margin: '15px 0', lineHeight: '1.4' }}>
            GotCha system: Optimized circular DNA design for RCA-based microRNA detection (iGEM Gold).
          </p>
          
          <a 
            href="https://github.com/Juan-Jeffery/CSMU_iGEM" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.btnLink}
          >
            VIEW_REPO
          </a>
        </article>

        {/* =========================================
             🚧 專案卡片 3 & 4：未來擴展區塊 (Placeholder)
        ========================================= */}
        <article className={styles.projectCard}>
          <div className={styles.toBeContinued}>
            {">"} TO BE CONTINUED...
            <p style={{ fontFamily: 'sans-serif', fontSize: '11px', marginTop: '10px', opacity: 0.8 }}>
              New analytical workflows in development.
            </p>
          </div>
        </article>

        <article className={styles.projectCard}>
          <div className={styles.toBeContinued}>
            {">"} TO BE CONTINUED...
            <p style={{ fontFamily: 'sans-serif', fontSize: '11px', marginTop: '10px', opacity: 0.8 }}>
              Stay tuned for more bioinformatics tools.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}