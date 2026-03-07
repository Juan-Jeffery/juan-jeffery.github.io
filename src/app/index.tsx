// src/app/page.tsx
export default function HomePage() {
  return (
    <main>
      <div className="hero">
        <img 
          src="https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif" 
          alt="Header GIF" 
        />
        <div className="hero-text">
          <h1>JUAN JEFFERY</h1>
          <p>Bioinformatics | Data Science</p>
        </div>
      </div>

      <section>
        <h2>{">"} ABOUT ME</h2>
        <p>
          I'm a master's student in Bioinformatics at NYCU, 
          passionate about cancer genomics and data-driven biology.
          I specialize in Linux-based pipeline development, mutation analysis, 
          and visualizing biological data using Python and R.
        </p>

        <h2>{">"} SKILLS</h2>
        <div className="skills-wrapper">
          <div className="skill-group">
            <span className="skill-group-title">Programming Languages</span>
            
            <SkillItem name="Python" score="8/10" percent="80%" />
            <SkillItem name="R Language" score="8/10" percent="80%" />
          </div>

          <div className="skill-group">
            <span className="skill-group-title">Bioinformatics</span>
            
            <SkillItem name="NGS Pipeline" score="9/10" percent="90%" />
            <SkillItem name="Linux / Shell" score="7/10" percent="70%" />
          </div>
        </div>

        <h2>{">"} CONTACT</h2>
        <p>GitHub: <a href="https://github.com/Juan-Jeffery" target="_blank" rel="noreferrer">Juan-Jeffery</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/juan-jeffery" target="_blank" rel="noreferrer">linkedin.com/in/juan-jeffery</a></p>
      </section>
    </main>
  );
}

// 為了讓代碼更乾淨，我們可以把重複的 Skill Item 寫成一個小組件
function SkillItem({ name, score, percent }: { name: string, score: string, percent: string }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span>{name}</span>
        <span>{score}</span>
      </div>
      <div className="pixel-progress-bg">
        <div className="pixel-progress-fill" style={{ width: percent }}></div>
      </div>
    </div>
  );
}