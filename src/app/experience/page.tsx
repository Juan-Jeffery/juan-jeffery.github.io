// src/app/experience/page.tsx
export default function ExperiencePage() {
  return (
    <section>
      <h2>{">"} EXPERIENCE</h2>
      
      <div className="experience-wrapper">
        {/* 碩士學歷區塊 */}
        <div className="experience-item">
          <div className="exp-header">
            <span className="degree-tag">M.S.</span>
            <h3 className="institution">Institute of Biomedical Informatics</h3>
          </div>
          <p className="university">National Yang Ming Chiao Tung University (NYCU)</p>
          <ul className="achievement-list">
            <li>Presented poster at <strong>APBJC</strong> (Asia-Pacific Bioinformatics Joint Conference)</li>
            <li>Presented poster at <strong>MOPM</strong> (台灣多體學與精準醫學研討會), awarded <strong>Best Poster</strong></li>
            <li>Presented poster at <strong>RECOMB</strong> (International Conference on Research in Computational Molecular Biology)</li>
          </ul>
        </div>

        {/* 學士學歷區塊 */}
        <div className="experience-item">
          <div className="exp-header">
            <span className="degree-tag">B.S.</span>
            <h3 className="institution">Department of Biomedical Sciences</h3>
          </div>
          <p className="university">Chung Shan Medical University (CSMU)</p>
          <ul className="achievement-list">
            <li><strong>iGEM 2021</strong> (International Genetically Engineered Machine) Competition, awarded <strong>Gold Medal</strong></li>
            <li><strong>iGEM 2021</strong> Competition, nominated for <strong>Best Software Tool</strong></li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .experience-wrapper {
          margin-top: 20px;
        }
        .experience-item {
          margin-bottom: 50px;
          border-left: 4px solid #eee;
          padding-left: 20px;
          position: relative;
        }
        .experience-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -10px;
          width: 16px;
          height: 16px;
          background: #007acc;
          border: 2px solid #111;
        }
        .exp-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
        }
        .degree-tag {
          background: #111;
          color: #fff;
          font-family: 'Press Start 2P', cursive;
          font-size: 0.7em;
          padding: 5px 10px;
        }
        .institution {
          margin: 0;
          font-size: 1em;
          color: #007acc;
        }
        .university {
          font-weight: bold;
          margin-bottom: 15px;
          font-size: 0.95em;
        }
        .achievement-list {
          padding-left: 20px;
        }
        .achievement-list li {
          margin-bottom: 10px;
          font-size: 0.9em;
        }
      `}</style>
    </section>
  );
}