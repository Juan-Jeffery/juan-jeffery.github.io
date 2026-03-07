"use client";

import React from 'react';
import styles from './home.module.css';

/**
 * HomePage Component
 * * 首頁元件：包含帶有 GIF 背景的個人封面 (Hero Section)
 * 以及介紹與聯絡方式的資訊卡片 (Info Card)。
 * 採用與全站統一的 page-container 進行佈局與 RWD 補償。
 */
export default function HomePage() {
  return (
    /* ✅ 統一容器：page-container 確保全站頁面切換時，標題與外距完美對齊 */
    <main className={`page-container ${styles.homePage}`}>
      <div className={styles.contentWrapper}>
        
        {/* =========================================
             🖼️ 封面區塊 (Hero Section)
             包含背景 GIF 與覆蓋其上的大字標題
        ========================================= */}
        <div className={styles.hero}>
          <img 
            src="https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif" 
            alt="Bioinformatics Analysis Visualization GIF" 
            loading="lazy" /* 優化：延遲載入圖片，提升首頁初次渲染速度 */
          />
          {/* 文字層：使用絕對定位覆蓋於圖片上方，並套用半透明黑幕 */}
          <div className={styles.heroOverlay}>
            <div className={styles.heroText}>
              <h1>JUAN - JEFFERY</h1>
              <p>Bioinformatics | Genomic Data Science</p>
            </div>
          </div>
        </div>

        {/* =========================================
             📝 資訊卡片 (Info Card)
             呈現自我介紹 (About Me) 與聯絡方式 (Contact)
        ========================================= */}
        {/* 優化：將 div 改為 section，提升 HTML 語意化 */}
        <section className={styles.infoCard}>
          
          {/* --- 關於我 --- */}
          {/* 優化：將 span 改為 h2，建立正確的網頁標題階層結構 */}
          <h2 className={styles.sectionTitle}>{">"} ABOUT ME</h2>
          <p 
            className={styles.aboutText} 
            style={{ lineHeight: '1.8', fontSize: '0.9em', color: '#333' }}
          >
            I am a Bioinformatics Specialist with a Master's degree from NYCU, 
            passionate about cancer genomics and data-driven biology.
            I specialize in Linux-based pipeline development, mutation analysis (ITD, WES), 
            and biological data visualization using Python and R.
          </p>
          
          {/* 區塊分隔空間 (加入 aria-hidden 讓閱讀器忽略此純視覺元素) */}
          <div className={styles.spacer} aria-hidden="true"></div>
          
          {/* --- 聯絡資訊 --- */}
          <h2 className={styles.sectionTitle}>{">"} CONTACT</h2>
          
          <div className={styles.contactItem} style={{ marginBottom: '10px', fontSize: '0.9em' }}>
            <strong style={{ color: '#007acc' }}>GitHub:</strong>{" "}
            <a 
              href="https://github.com/Juan-Jeffery" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#111', textDecoration: 'underline' }}
            >
              Juan-Jeffery
            </a>
          </div>
          
          <div className={styles.contactItem} style={{ fontSize: '0.9em' }}>
            <strong style={{ color: '#007acc' }}>LinkedIn:</strong>{" "}
            <a 
              href="https://linkedin.com/in/juan-jeffery" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#111', textDecoration: 'underline' }}
            >
              linkedin.com/in/juan-jeffery
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}