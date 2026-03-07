"use client"; // 標註為客戶端組件以支援 styled-jsx

export default function ProjectsPage() {
  return (
    <section>
      <h2>MY PROJECTS</h2>

      {/* ITD Pipeline 專案 */}
      <div className="project" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/ITD.png')" }}>
        <h3>ITD Mutation Analysis Pipeline</h3>
        <p>Designed a pipeline to detect Internal Tandem Duplications (ITDs) in cancer using Pindel, Genomon-ITDetector and ScanITD.</p>
        <a href="https://github.com/Juan-Jeffery/ITD-pipeline" target="_blank" rel="noreferrer" className="btn-link">VIEW REPO</a>
      </div>

      {/* iGEM 專案 */}
      <div className="project" style={{ backgroundImage: "url('https://raw.githubusercontent.com/Juan-Jeffery/juan-jeffery.github.io/main/plot/cir_rna.png')" }}>
        <h3>Circular-DNA Design</h3>
        <p>Generates circular DNA sequences specifically designed for GotCha’s Rolling Circle Amplification (RCA) mechanism based on user-inputted micro-RNA targets.</p>
        <a href="https://github.com/Juan-Jeffery/CSMU_iGEM" target="_blank" rel="noreferrer" className="btn-link">VIEW REPO</a>
      </div>

      <style jsx>{`
        h2, h3 {
          font-family: 'Press Start 2P', cursive;
          text-transform: uppercase;
        }

        section {
          padding: 100px 20px 40px 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        h2 {
          font-size: 1.2em;
          margin-top: 60px;
          margin-bottom: 30px;
          border-bottom: 4px solid #eee;
          padding-bottom: 10px;
        }

        .project {
          border-radius: 4px;
          padding: 30px;
          margin-bottom: 40px;
          border: 2px solid #111;
          box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.05);
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s;
        }

        .project:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0px rgba(0, 122, 204, 0.2);
        }

        .project::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255, 255, 255, 0.85);
          z-index: 0;
        }

        .project > :global(*) {
          position: relative;
          z-index: 1;
        }

        .project h3 {
          font-size: 0.9em;
          color: #007acc;
          margin-top: 0;
        }

        .project p {
          font-size: 0.95em;
          margin-bottom: 15px;
        }

        .btn-link {
          display: inline-block;
          background: #111;
          color: #fff;
          padding: 6px 12px;
          text-decoration: none;
          font-size: 0.8em;
          border-radius: 2px;
          transition: background 0.3s;
        }

        .btn-link:hover {
          background: #007acc;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          section { padding: 80px 15px; }
          h2 { font-size: 1em; }
        }
      `}</style>
    </section>
  );
}