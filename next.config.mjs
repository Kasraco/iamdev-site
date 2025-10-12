import createMDX from '@next/mdx'
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  
  options: {
    rehypePlugins: [],
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // لازم است MDX در پسوند صفحات فعال شود
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Turbopack تنظیم پیش‌فرض
  experimental: {
    turbo: {
      rules: {
        // پشتیبانی از mdx برای Turbopack
        '*.mdx': ['@mdx-js/loader'],
      },
    },
  },

  distDir: process.env.NODE_ENV == "development" ? ".dev" : ".next",
  reactStrictMode: false,
  cleanDistDir: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.reshot.com",
        port: "",
      },
    ],
  },

}

export default withMDX(nextConfig);