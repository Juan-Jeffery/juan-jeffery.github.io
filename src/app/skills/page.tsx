"use client";

import styles from './skills.module.css';

export default function SkillsPage() {
  const CarouselContent = () => (
    <>
      <StatCard title="Pipeline development" tool="book">
        <div style={{ fontSize: '0.75em', fontWeight: 'bold', lineHeight: '1.4' }}>
          Expertise in developing and optimizing bioinformatics 
          pipelines for DNA-seq, RNA-seq, scRNA-seq and GWAS.
        </div>
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

  return (
    /* ✅ 使用 styles.skillsPage 來帶入 CSS 設定的暗黃色底色 */
    <section className={styles.skillsPage}>
      <div className={styles.contentWrapper}>
        <h2 className="terminal-header" style={{ 
          paddingLeft: '6.5%', marginBottom: '20px' ,marginTop: '40px' 
        }}>
        <span className="prompt-symbol">{">"}</span> SKILLS
        </h2>
        
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

        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack}>
            {/* ✅ 透過渲染兩份內容達成純 CSS 無限循環，不依賴 cloneNode */}
            <CarouselContent />
            <CarouselContent />
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ 統計卡片組件：整合半透明背景與 3D 背景圖騰
function StatCard({ title, tool, children }: { title: string, tool: string, children: React.ReactNode }) {
  // 動態獲取 CSS Module 中的 class 名稱
  const toolClass = styles['mc' + tool.charAt(0).toUpperCase() + tool.slice(1)];
  
  return (
    <div className={styles.statCard}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.statHeader}>{title}</div>
        {children}
      </div>
      
      {/* 3D 旋轉圖騰：z-index 在內容下方，opacity 受 CSS 控制 */}
      <div className={styles.pixelContainer3d}>
        <div className={`${styles.pixelItem} ${toolClass}`}></div>
      </div>
    </div>
  );
}

// 經驗條組件
function ExpBar({ label, score, width }: { label: string, score: string, width: string }) {
  return (
    <>
      <div className={styles.expBarLabel}><span>{label}</span><span>{score}</span></div>
      <div className={styles.expBarBg}><div className={styles.expBarFill} style={{ width }}></div></div>
    </>
  );
}

// 副標題與標籤組件
function SubTitle({ text, tags }: { text: string, tags: string[] }) {
  return (
    <>
      <div className={styles.subSectionTitle}>{text}</div>
      <div className={styles.tagContainer}>
        {tags.map(tag => <span key={tag} className={styles.pixelTag}>{tag}</span>)}
      </div>
    </>
  );
}