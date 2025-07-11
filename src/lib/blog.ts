export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "深入理解 Next.js",
    description: "探索 Next.js 的核心特性与最佳实践，助你构建高性能 Web 应用。",
    image: "/next.svg",
    date: "2024-06-01",
    author: "张三",
    slug: "deep-dive-nextjs",
  },
  {
    id: 2,
    title: "前端性能优化指南",
    description: "掌握前端性能优化的关键技巧，让你的网站飞快加载。",
    image: "/vercel.svg",
    date: "2024-06-02",
    author: "李四",
    slug: "frontend-performance",
  },
];

export async function getBlogs(): Promise<Blog[]> {
  // 模拟API延迟
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return blogs;
} 