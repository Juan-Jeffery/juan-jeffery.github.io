/** @type {import('next').NextConfig} */
const nextConfig = {
  // 核心設定：讓 Next.js 輸出純 HTML/CSS/JS 檔案給 GitHub Pages 使用
  output: 'export', 
  
  // 關閉圖片優化，因為 GitHub Pages 不支援編譯後的圖片處理
  images: {
    unoptimized: true,
  },

  // 重要：如果你的 URL 是 https://Juan-Jeffery.github.io/ 就不需改下面這行。
  // 如果你的網址後面還有路徑 (如 /portfolio)，則需加上 basePath: '/portfolio'
};

export default nextConfig;