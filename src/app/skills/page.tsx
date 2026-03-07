"use client";

import React from 'react';
import styles from './skills.module.css';

/* =========================================
   🧬 輪播內容組件 (Carousel Content)
   =========================================
   ✅ 優化：將此組件移至主函數外部，避免 React 每次渲染時重複建立該組件，提升效能。
   包含核心的生物資訊分析流程與技能展示。
*/
const CarouselContent = () => (
  <>
    <StatCard title="Pipeline development" tool="book">
      {/* 使用 <p> 標籤取代 <div> 提升語意 */}
      <p style={{ fontSize: '0.75em', fontWeight: 'bold', lineHeight: '1.4', margin: 0 }}>
        Expertise in developing and optimizing bioinformatics 
        pipelines for DNA-seq, RNA-seq, scRNA-seq and GWAS.
      </p>
    </StatCard>

    <StatCard title="WES analysis" tool="book">
      <SubTitle text="Preprocessing" tags={['BWA', 'Samtools', 'fastQC', 'MultiQC']} />
      <SubTitle text="Variant Calling" tags={['GATK/Mutect2', 'MuSE', 'Varscan', 'CNVkit', 'Pindel', 'ScanITD']} />
      <SubTitle text="Annotation" tags={['Vep', 'Vcf2MAF', 'Arrnovar', 'IGV', 'Gistic2', 'Sigprofiler']} />
    </StatCard>

    <StatCard title="RNA analysis" tool="book">
      <SubTitle text="Mapping" tags={['STAR', 'HISAT2', 'Samtools', 'Kallisto']} />
      <SubTitle text="Expression" tags={['featureCounts', 'RSEM', 'Deseq2', 'Limma', 'EdgeR', 'KEGG']} />
    </StatCard>

    <StatCard title="scRNA analysis" tool="book">
      <SubTitle text="Mapping & filtering" tags={['CellRanger', 'Scrublet']} />
      <SubTitle text="Filter & clustering" tags={['Seurat', 'Scanpy']} />
      <SubTitle text="DE analysis & ID" tags={['scDEA', 'Garnett', 'CellAssign', 'SingleR']} />
    </StatCard>

    <StatCard title="GWAS analysis" tool="book">
      <div className={styles.tagContainer} style={{ marginTop: '15px' }}>
        <span className={styles.pixelTag}>eQTL</span>
        <span className={styles.pixelTag}>Mendelian Randomization</span>
      </div>
    </StatCard>
  </>
);

/* =========================================
   🌟 主頁面組件 (Skills Page)
   =========================================
*/
export default function SkillsPage() {
  return (
    /* ✅ 統一容器：page-container 負責全站 RWD 補償，並確保透出 globals.css 的背景動畫 */
    <section className={`page-container ${styles.skillsPage}`}>
      <div className={styles.contentWrapper}>
        
        {/* --- 🖥️ 終端機風格標題 --- */}
        <h2 className="terminal-header">
          {/* 保留 \u00a0 用於微調對齊，若全站已由 padding-left 統一，此處也可移除 */}
          <span className="prompt-symbol">{"\u00a0\u00a0\u00a0\u00a0\u00a0"}{">"}</span> SKILLS
        </h2>
        
        {/* --- 📊 靜態技能網格 (語言與工具) --- */}
        <div className={styles.skillsGrid}>
          <StatCard title="PROGRAMMING LANGUAGES" tool="sword">
            <ExpBar label="Python" score="8/10" width="80%" />
            <ExpBar label="R" score="8/10" width="80%" />
            <ExpBar label="Bash" score="8/10" width="80%" />
            <ExpBar label="HTML & JS" score="4/10" width="40%" />
            <ExpBar label="SQL" score="3/10" width="30%" />
            <ExpBar label="C#" score="2/10" width="20%" />
          </StatCard>

          <StatCard title="TOOLS & TECHNOLOGIES" tool="mace">
            <ExpBar label="Linux (Ubuntu)" score="9/10" width="90%" />
            <ExpBar label="Conda" score="9/10" width="90%" />
            <ExpBar label="Git" score="8/10" width="80%" />
            <ExpBar label="Docker" score="5/10" width="50%" />
          </StatCard>
        </div>

        {/* --- 🔄 無縫輪播區塊 (生物資訊專業技能) --- */}
        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack}>
            {/* 放置兩組內容以達成無縫無限輪播 */}
            <CarouselContent />
            <CarouselContent />
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================
   🧩 輔助子組件 (Helper Components)
   =========================================
   ✅ 優化：加入 TypeScript Interface 讓屬性定義更嚴謹
*/

interface StatCardProps {
  title: string;
  tool: string;
  children: React.ReactNode;
}

/**
 * 狀態卡片：展示一個大類別的技能 (例如：程式語言、WES分析)
 */
function StatCard({ title, tool, children }: StatCardProps) {
  const toolClass = styles['mc' + tool.charAt(0).toUpperCase() + tool.slice(1)];
  return (
    /* 改用 article 提升語意 */
    <article className={styles.statCard}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 className={styles.statHeader}>{title}</h3>
        {children}
      </div>
      
      {/* 裝飾性圖示容器：加上 aria-hidden 讓閱讀器忽略 */}
      <div className={styles.pixelContainer3d} aria-hidden="true">
        <div className={`${styles.pixelItem} ${toolClass}`}></div>
      </div>
    </article>
  );
}

interface ExpBarProps {
  label: string;
  score: string;
  width: string;
}

/**
 * 經驗值條：顯示單項技能的熟練度
 */
function ExpBar({ label, score, width }: ExpBarProps) {
  return (
    <>
      <div className={styles.expBarLabel}>
        <span>{label}</span>
        <span>{score}</span>
      </div>
      {/* 進度條背景與填滿：加上 aria-hidden 讓閱讀器忽略視覺特效 */}
      <div className={styles.expBarBg} aria-hidden="true">
        <div className={styles.expBarFill} style={{ width }}></div>
      </div>
    </>
  );
}

interface SubTitleProps {
  text: string;
  tags: string[];
}

/**
 * 子標題與標籤列：用於生物資訊分析管線的各個步驟與對應軟體
 */
function SubTitle({ text, tags }: SubTitleProps) {
  return (
    <>
      <h4 className={styles.subSectionTitle}>{text}</h4>
      <div className={styles.tagContainer}>
        {tags.map(tag => (
          <span key={tag} className={styles.pixelTag}>{tag}</span>
        ))}
      </div>
    </>
  );
}