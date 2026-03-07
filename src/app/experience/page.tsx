"use client";

import React, { useState, useEffect } from 'react';
import styles from './experience.module.css';

export default function ExperiencePage() {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  // 阮亮學 (Juan Jeffery) 的資歷初始化內容
  const fullContent = `> Fetching career_data...
> Accessing NYCU Bioinformatics logs...
> Accessing CSMU Biomedical logs...

[SYSTEM INITIALIZED]
----------------------------------`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullContent.slice(0, i));
      i++;
      if (i > fullContent.length) {
        clearInterval(timer);
        setIsDone(true);
      }
    }, 25); 

    return () => clearInterval(timer);
  }, []);

  return (
    /* ✅ 統一容器：套用 page-container 讓背景透明並處理手機版位移 */
    <section className={`page-container ${styles.expPage}`}>
      <div className={styles.contentWrapper}>
        
        {/* ✅ 統一標題：移除 inline style，完全由 globals.css 控制對齊 */}
        <h2 className="terminal-header">
          <span className="prompt-symbol">{">"}</span> EXPERIENCE
        </h2>

        <div className={styles.terminalWindow}>
          {/* ✅ 右上角經驗值狀態框 */}
          <div className={styles.expLevelBox}>
            <span className={styles.levelText}>EXP GAINING...</span>
            <div className={styles.expBarSmall}>
              <div className={styles.expFillSmall}></div>
            </div>
          </div>

          <div className={styles.commandPrompt}>root@juan-jeffery:~$ ./show_experience.sh</div>
          
          <div className={styles.typingText}>
            {displayText}
            {!isDone && <span className={styles.cursor}></span>}
          </div>

          {/* 打字完畢後漸變顯現詳細經歷 */}
          <div style={{ opacity: isDone ? 1 : 0, transition: 'opacity 0.8s ease-out' }}>
            
            {/* 碩士學歷：陽明交通大學 生物資訊研究所 */}
            <div className={styles.expItem}>
              <div>
                <span className={styles.degreeTag}>M.S.</span>
                <span className={styles.institution}>Institute of Biomedical Informatics</span>
              </div>
              <p style={{ margin: '8px 0', fontSize: '0.85em', fontWeight: 'bold' }}>National Yang Ming Chiao Tung University (NYCU)</p>
              <ul className={styles.achievementList}>
                <li>Presented poster at APBJC (Asia-Pacific Bioinformatics Joint Conference)</li>
                <li>Presented poster at MOPM, awarded Best Poster</li>
                <li>Presented poster at RECOMB (Research in Computational Molecular Biology)</li>
              </ul>
            </div>

            {/* 學士學歷：中山醫學大學 生物醫學系 */}
            <div className={styles.expItem} style={{ marginTop: '40px' }}>
              <div>
                <span className={styles.degreeTag}>B.S.</span>
                <span className={styles.institution}>Department of Biomedical Sciences</span>
              </div>
              <p style={{ margin: '8px 0', fontSize: '0.85em', fontWeight: 'bold' }}>Chung Shan Medical University (CSMU)</p>
              <ul className={styles.achievementList}>
                <li>iGEM 2021 Competition - Gold Medal (DryLab Leader)</li>
                <li>iGEM 2021 Competition - Nominated for Best Software Tool</li>
              </ul>
            </div>

            {/* 結尾 Prompt：增加打字完成後的回饋感 */}
            {isDone && (
              <div className={styles.commandPrompt} style={{ marginTop: '30px' }}>
                root@juan-jeffery:~$ <span className={styles.cursor}></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}