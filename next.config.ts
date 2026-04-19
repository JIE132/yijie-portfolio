/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 关键：告诉 Next.js 将整个项目生成 HTML/CSS/JS 静态文件
  images: {
    unoptimized: true, // 静态导出必须关闭图片优化
  },
};

export default nextConfig;