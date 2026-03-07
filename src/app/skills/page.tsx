"use client"; // 必須放在第一行，支援 useEffect 與動畫邏輯

import { useEffect, useRef } from 'react';

export default function SkillsPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 自動複製卡牌達成無限循環效果
    if (trackRef.current && trackRef.current.children.length > 0) {
      const children = Array.from(trackRef.current.children);
      if (trackRef.current.children.length <= 5) { 
        children.forEach(card => {
          const clone = card.cloneNode(true);
          trackRef.current?.appendChild(clone);
        });
      }
    }
  }, []);

  return (
    <section>
      <h2 className="main-title">SKILLS</h2>

      {/* 上方 2 欄網格：程式語言與工具 */}
      <div className="skills-grid">
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

      {/* 下方無限輪播：生信專業知識 */}
      <div className="carousel-viewport">
        <div className="carousel-track" ref={trackRef}>
          
          <StatCard title="Pipeline development" tool="book">
            <div style={{ fontSize: '0.75em', fontWeight: 'bold', lineHeight: '1.4' }}>
              Expertise in developing and optimizing bioinformatics pipelines for DNA-seq, RNA-seq, scRNA-seq and GWAS.
            </div>
          </StatCard>

          <StatCard title="WES analysis" tool="book">
            <SubTitle text="Preprocessing" tags={['BWA', 'Samtools', 'fastQC', 'MultiQC']} />
            <SubTitle text="Variant Calling" tags={['GATK/Mutect2', 'MuSE', 'Varscan', 'CNVkit', 'Pindel', 'ScanITD']} />
            <SubTitle text="Annotation" tags={['Vep', 'Vcf2MAF', 'Arrnovar', 'IGV', 'Gistic2', 'Sigprofiler']} />
          </StatCard>

          <StatCard title="RNA analysis" tool="book">
            <SubTitle text="Mapping" tags={['STAR', 'HISAT2', 'Samtools', 'Kallisto']} />
            <SubTitle text="Expression" tags={['featureCounts', 'RSEM', 'Deseq2', 'Limma', 'KEGG']} />
          </StatCard>

          <StatCard title="scRNA analysis" tool="book">
            <SubTitle text="Mapping" tags={['CellRanger', 'Scrublet']} />
            <SubTitle text="Clustering" tags={['Seurat', 'Scanpy']} />
            <SubTitle text="ID" tags={['scDEA', 'Garnett', 'CellAssign', 'SingleR']} />
          </StatCard>

          <StatCard title="GWAS analysis" tool="book">
            <div className="tag-container" style={{ marginTop: '15px' }}>
              <span className="pixel-tag">eQTL</span>
              <span className="pixel-tag">Mendelian Randomization</span>
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  );
}

/* --- 子組件實作 --- */

function StatCard({ title, tool, children }: { title: string, tool: string, children: React.ReactNode }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <div className="stat-header">{title}</div>
        {children}
      </div>
      <div className="pixel-container-3d">
        <div className={`pixel-item mc-${tool}`}></div>
      </div>
    </div>
  );
}

function ExpBar({ label, score, width }: { label: string, score: string, width: string }) {
  return (
    <>
      <div className="exp-bar-label"><span>{label}</span><span>{score}</span></div>
      <div className="exp-bar-bg"><div className="exp-bar-fill" style={{ width }}></div></div>
    </>
  );
}

function SubTitle({ text, tags }: { text: string, tags: string[] }) {
  return (
    <>
      <div className="sub-section-title">{text}</div>
      <div className="tag-container">
        {tags.map(tag => <span key={tag} className="pixel-tag">{tag}</span>)}
      </div>
    </>
  );
}