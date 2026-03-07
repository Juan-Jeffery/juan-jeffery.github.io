<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Juan Jeffery | Bioinformatics Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: "Fira Code", monospace;
      color: #111;
      background-color: #fff;
      line-height: 1.6;
    }

    /* 標題使用像素字體 */
    h1, h2, .skill-group-title {
      font-family: 'Press Start 2P', cursive;
      text-transform: uppercase;
      letter-spacing: -1px;
    }

    nav {
      position: fixed;
      top: 20px;
      left: 30px;
      z-index: 1000;
      background: white;
      padding: 6px 12px;
      border-radius: 4px;
      border: 2px solid #000; /* 輕微像素感邊框 */
      box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
    }

    nav a {
      margin-right: 20px;
      text-decoration: none;
      font-weight: bold;
      color: #111;
      font-size: 0.8em;
    }

    .hero {
      position: relative;
      text-align: center;
      margin-top: 70px;
      background: #f9f9f9;
    }

    .hero img {
      width: 100%;
      height: auto;
      opacity: 0.3;
      image-rendering: pixelated; /* 讓圖片看起來有像素感 */
    }

    .hero-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .hero-text h1 {
      font-size: 2em;
      margin: 0;
      color: #111;
    }

    .hero-text p {
      font-size: 1em;
      background: #000;
      color: #fff;
      padding: 4px 8px;
      margin-top: 10px;
    }

    section {
      padding: 50px 20px;
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

    /* 技能區域佈局 */
    .skills-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin-bottom: 40px;
    }

    .skill-group {
      flex: 1;
      min-width: 300px;
    }

    .skill-group-title {
      font-size: 0.7em;
      color: #007acc;
      margin-bottom: 20px;
      display: block;
    }

    .skill-item {
      margin-bottom: 15px;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.9em;
      margin-bottom: 5px;
      font-weight: bold;
    }

    /* 像素風格進度條 */
    .pixel-progress-bg {
      height: 16px;
      background: #f0f0f0;
      border: 2px solid #111;
      position: relative;
    }

    .pixel-progress-fill {
      height: 100%;
      background: #007acc;
      /* 利用內陰影做出像素方塊感 */
      box-shadow: inset -4px 0px 0px #005a99; 
    }

    a { color: #007acc; text-decoration: none; }
    a:hover { text-decoration: underline; }

    @media (max-width: 600px) {
      .skill-group { min-width: 100%; }
      .hero-text h1 { font-size: 1.2em; }
    }
  </style>
</head>
<body>

  <nav>
    <a href="index.html">HOME</a>
    <a href="projects.html">PROJECTS</a>
    <a href="experience.html">EXP</a>
    <a href="skills.html">SKILLS</a>
  </nav>
  
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Juan Jeffery | Skills Stat</title>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; font-family: "Fira Code", monospace; background-color: #ffffff; color: #111; overflow-x: hidden; }
    h1, h2, .stat-header { font-family: 'Press Start 2P', cursive; text-transform: uppercase; }
    section { padding: 40px 20px; max-width: 1000px; margin: 0 auto; }
    h2.main-title { font-size: 1.2em; color: #222; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px; margin-bottom: 30px; }

    /* ✅ 上方 2 欄網格 (保持不動) */
    .skills-grid { 
      display: grid; 
      grid-template-columns: repeat(2, 1fr); 
      gap: 15px; 
    }

    /* --- 無縫環繞動畫容器 --- */
    .carousel-viewport {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding: 20px 0;
    }

    .carousel-track {
      display: flex;
      gap: 15px;
      width: max-content; /* ✅ 讓軌道寬度等於所有卡片總和 */
      animation: infinite-scroll 10s linear infinite; /* ✅ 向左無限捲動 */
    }

    .carousel-viewport:hover .carousel-track {
      animation-play-state: paused;
    }

    @keyframes infinite-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50% - 7.5px)); } /* 7.5px 是 gap 的一半，修正對齊誤差 */
    }

    /* --- 卡牌樣式 --- */
    .stat-card {
      background: #ffffff;
      padding: 20px 25px; 
      border: 2px solid #000;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      perspective: 1200px;
      box-shadow: 6px 6px 0px #eeeeee;
      transition: all 0.2s ease;
    }

    /* ✅ 下方循環卡牌：窄長且固定寬度 */
    .carousel-track .stat-card {
      min-width: 280px;
      max-width: 280px;
      min-height: 300px; /* ✅ 增加高度以容納所有展開內容 */
    }

    .stat-card:hover {
      transform: translate(-1px, -1px);
      box-shadow: 8px 8px 0px #e0e0e0;
    }

    /* 3D 旋轉背景圖騰 */
    .pixel-container-3d { position: absolute; top: 50%; left: 50%; transform-style: preserve-3d; animation: mc-rotate 10s linear infinite; opacity: 0.1; z-index: 0; pointer-events: none; }
    @keyframes mc-rotate { 0% { transform: translate(-50%, -50%) rotateY(0deg) scale(6); } 100% { transform: translate(-50%, -50%) rotateY(360deg) scale(6); } }
    .pixel-item { width: 4px; height: 4px; background: transparent; }

    /* 像素圖示 */
    .mc-sword { box-shadow: 8px -8px #000, 12px -12px #000, 16px -16px #000, 20px -20px #000, 8px -12px #4deeea, 12px -16px #4deeea, 16px -20px #4deeea, 4px -8px #33b1b1, 8px -16px #33b1b1, 12px -20px #33b1b1, 0px 0px #000, 4px 4px #000, -4px -4px #000, -4px 4px #7a5230, -8px 8px #7a5230, -12px 12px #000; }
    .mc-mace { box-shadow: -4px -12px #000, 0px -12px #000, 4px -12px #000, -8px -8px #000, -4px -8px #4deeea, 0px -8px #4deeea, 4px -8px #4deeea, 8px -8px #000, -8px -4px #000, -4px -4px #33b1b1, 0px -4px #33b1b1, 4px -4px #33b1b1, 8px -4px #000, -4px 0px #000, 0px 0px #000, 4px 0px #000, 0px 4px #7a5230, 0px 8px #7a5230, 0px 12px #000; }
    .mc-book { box-shadow: -8px -4px #000, -4px -4px #000, 0px -4px #000, 4px -4px #000, -8px 0px #000, -4px 0px #fff, 0px 0px #fff, 4px 0px #fff, 8px 0px #000, -8px 4px #000, -4px 4px #a200ff, 0px 4px #a200ff, 4px 4px #fff, 8px 4px #000, -8px 8px #000, -4px 8px #000, 0px 8px #000, 4px 8px #000, 0px 4px #7a5230; }

    /* 經驗條 */
    .exp-bar-label { display: flex; justify-content: space-between; font-size: 0.75em; font-weight: bold; margin-top: 10px; color: #333; }
    .exp-bar-bg { height: 10px; background: #333; border: 1px solid #000; margin: 4px 0 8px 0; overflow: hidden; position: relative; }
    .exp-bar-fill { height: 100%; background-color: #7cfc00; background-image: repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(0, 0, 0, 0.4) 14px, rgba(0, 0, 0, 0.4) 16px); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3); }

    .stat-header { font-size: 0.55em; color: #666; padding-bottom: 8px; border-bottom: 1px dashed #eee; margin-bottom: 15px; }
    
    /* ✅ 移除隱藏屬性，全顯示 */
    .tag-container { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 5px; margin-bottom: 10px; }
    .pixel-tag { background: #f9f9f9; border: 1px solid #ddd; padding: 1px 6px; font-size: 0.65em; }
    .sub-section-title { font-size: 0.7em; font-weight: bold; margin-top: 12px; margin-bottom: 5px; color: #007acc; }

    @media (max-width: 800px) { .skills-grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>

  <section>
    <h2 class="main-title">SKILLS</h2>

    <div class="skills-grid">
      <div class="stat-card" data-tool="sword">
        <div class="stat-content">
          <div class="stat-header">PROGRAMMING LANGUAGES</div>
          <div class="exp-bar-label"><span>Python</span><span>8/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 80%;"></div></div>
          <div class="exp-bar-label"><span>R</span><span>8/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 80%;"></div></div>
          <div class="exp-bar-label"><span>Bash</span><span>8/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 80%;"></div></div>
          <div class="exp-bar-label"><span>HTML & JS</span><span>4/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 40%;"></div></div>
          <div class="exp-bar-label"><span>SQL</span><span>3/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 30%;"></div></div>
          <div class="exp-bar-label"><span>C#</span><span>2/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 20%;"></div></div>
        </div>
      </div>

      <div class="stat-card" data-tool="mace">
        <div class="stat-content">
          <div class="stat-header">TOOLS & TECHNOLOGIES</div>
          <div class="exp-bar-label"><span>Linux (Ubuntu)</span><span>9/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 90%;"></div></div>
          <div class="exp-bar-label"><span>Conda</span><span>9/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 90%;"></div></div>
          <div class="exp-bar-label"><span>Git</span><span>8/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 80%;"></div></div>
          <div class="exp-bar-label"><span>Docker</span><span>5/10</span></div>
          <div class="exp-bar-bg"><div class="exp-bar-fill" style="width: 50%;"></div></div>
        </div>
      </div>
    </div>

    <div class="carousel-viewport">
      <div class="carousel-track" id="carouselTrack">
        
        <div class="stat-card" data-tool="book">
          <div class="stat-content">
            <div class="stat-header">Pipeline development implementation</div>
            <div style="font-size: 0.75em; font-weight: bold; line-height: 1.4;">Expertise in developing and optimizing bioinformatics pipelines for DNA-seq, RNA-seq, scRNA-seq and GWAS.</div>
          </div>
        </div>

        <div class="stat-card" data-tool="book">
          <div class="stat-content">
            <div class="stat-header">WES analysis</div>
            <div class="sub-section-title">Preprocessing</div>
            <div class="tag-container">
              <span class="pixel-tag">BWA</span><span class="pixel-tag">Samtools</span><span class="pixel-tag">fastQC</span><span class="pixel-tag">MultiQC</span>
            </div>
            <div class="sub-section-title">Variant Calling</div>
            <div class="tag-container">
              <span class="pixel-tag">GATK/Mutect2</span><span class="pixel-tag">MuSE</span><span class="pixel-tag">Varscan</span><span class="pixel-tag">CNVkit</span>
              <span class="pixel-tag">Pindel</span><span class="pixel-tag">Varscan2</span><span class="pixel-tag">GenomonITD</span><span class="pixel-tag">ScanITD</span>
            </div>
            <div class="sub-section-title">Annotation</div>
            <div class="tag-container">
              <span class="pixel-tag">Vep</span><span class="pixel-tag">Vcf2MAF</span><span class="pixel-tag">Arrnovar</span><span class="pixel-tag">IGV</span>
              <span class="pixel-tag">Gistic2</span><span class="pixel-tag">MusigCV</span><span class="pixel-tag">Sigprofiler</span>
            </div>
          </div>
        </div>

        <div class="stat-card" data-tool="book">
          <div class="stat-content">
            <div class="stat-header">RNA analysis</div>
            <div class="sub-section-title">Preprocessing</div>
            <div class="tag-container">
              <span class="pixel-tag">fastQC</span><span class="pixel-tag">MultiQC</span>
            </div>
            <div class="sub-section-title">Mapping</div>
            <div class="tag-container">
              <span class="pixel-tag">STAR</span><span class="pixel-tag">HISAT2</span><span class="pixel-tag">Samtools</span><span class="pixel-tag">Kallisto</span>
            </div>
            <div class="sub-section-title">Expression Quantification</div>
            <div class="tag-container">
              <span class="pixel-tag">featureCounts</span><span class="pixel-tag">RSEM</span>
            </div>
            <div class="sub-section-title" style="border-top: 1px dashed #ccc; padding-top: 5px;">Cor-analysis</div>
            <div class="tag-container">
              <span class="pixel-tag">Deseq2</span><span class="pixel-tag">Limma</span><span class="pixel-tag">EdgeR</span>
              <span class="pixel-tag">KEGG</span><span class="pixel-tag">Gene Ontology</span>
            </div>
          </div>
        </div>

        <div class="stat-card" data-tool="book">
          <div class="stat-content">
            <div class="stat-header">scRNA analysis</div>
            <div class="sub-section-title">Preprocessing</div>
            <div class="tag-container">
              <span class="pixel-tag">fastQC</span><span class="pixel-tag">MultiQC</span>
            </div>
            <div class="sub-section-title">Mapping & filtering</div>
            <div class="tag-container"><span class="pixel-tag">CellRanger</span></div>
            <div class="sub-section-title">Remove low-quality cells</div>
            <div class="tag-container"><span class="pixel-tag">Scrublet</span></div>
            <div class="sub-section-title">Filter & clustering</div>
            <div class="tag-container">
              <span class="pixel-tag">Seurat</span><span class="pixel-tag">Scanpy</span>
            </div>
            <div class="sub-section-title">DE analysis & ID</div>
            <div class="tag-container">
              <span class="pixel-tag">scDEA</span><span class="pixel-tag">Garnett</span><span class="pixel-tag">CellAssign</span><span class="pixel-tag">SingleR</span>
            </div>
          </div>
        </div>

        <div class="stat-card" data-tool="book">
          <div class="stat-content">
            <div class="stat-header">GWAS analysis</div>
            <div class="tag-container" style="margin-top: 15px;">
              <span class="pixel-tag">eQTL</span><span class="pixel-tag">Mendelian Randomization</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <script>
    // 1. 自動複製卡牌達成無限循環
    const track = document.getElementById('carouselTrack');
    const cards = Array.from(track.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    // 2. 注入 3D 旋轉圖騰
    document.querySelectorAll('.stat-card').forEach(card => {
      const toolType = card.dataset.tool;
      const container = document.createElement('div');
      container.className = 'pixel-container-3d';
      const item = document.createElement('div');
      item.className = `pixel-item mc-${toolType}`;
      container.appendChild(item);
      card.appendChild(container);
    });
  </script>

</body>
</html>