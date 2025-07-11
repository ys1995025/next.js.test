import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

type Articles = {
  [key: string]: Article;
};

// 模拟数据库中的文章数据
const articles: Articles = {
  "deep-dive-nextjs": {
    id: 1,
    title: "深入理解 Next.js",
    description: "探索 Next.js 的核心特性与最佳实践，助你构建高性能 Web 应用。",
    image: "/next.svg",
    date: "2024-06-01",
    author: "张三",
    content: `
# 深入理解 Next.js

Next.js 是一个用于生产环境的 React 框架，它提供了许多强大的特性，使得构建现代 Web 应用变得更加简单和高效。

## 服务器组件

服务器组件是 Next.js 13 引入的革命性特性。它们允许我们在服务器端渲染 React 组件，从而：

- 减少客户端 JavaScript 包大小
- 提高首次加载性能
- 改善搜索引擎优化（SEO）

## 数据获取

Next.js 提供了多种数据获取方式：

1. 服务器组件中的异步数据获取
2. 静态站点生成（SSG）
3. 增量静态再生成（ISR）
4. 服务器端渲染（SSR）

## 文件系统路由

Next.js 的文件系统路由非常直观：

- pages/about.js → /about
- pages/blog/[slug].js → /blog/:slug
- pages/[...all].js → 支持任意层级的动态路由

## 优化技术

Next.js 内置了多种优化技术：

- 自动图片优化
- 字体优化
- 脚本优化
- 代码分割
    `,
  },
  "frontend-performance": {
    id: 2,
    title: "前端性能优化指南",
    description: "掌握前端性能优化的关键技巧，让你的网站飞快加载。",
    image: "/vercel.svg",
    date: "2024-06-02",
    author: "李四",
    content: `
# 前端性能优化指南

性能优化是前端开发中的重要议题。本文将介绍一些关键的优化技巧。

## 资源优化

### 图片优化

- 使用现代图片格式（WebP）
- 响应式图片
- 懒加载
- 合适的图片尺寸

### JavaScript 优化

- 代码分割
- Tree Shaking
- 延迟加载
- 压缩和混淆

## 渲染优化

### React 优化技巧

1. 使用 memo 和 useMemo
2. 合理使用 useCallback
3. 虚拟列表
4. 状态管理优化

## 网络优化

- HTTP/2
- CDN
- 浏览器缓存
- 预加载关键资源
    `,
  },
};

// 生成静态路径参数
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

// 模拟异步获取文章数据
async function getArticle(slug: string): Promise<Article | null> {
  // 在实际应用中，这里会是一个数据库查询
  return articles[slug] || null;
}

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mb-8"
        >
          ← 返回博客列表
        </Link>
        
        <header className="mb-12">
          <div className="relative w-full h-64 mb-8 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-contain p-12"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{article.author}</span>
            <time>{article.date}</time>
          </div>
        </header>

        <div className="prose dark:prose-invert prose-lg max-w-none">
          {article.content.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{paragraph.slice(3)}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{paragraph.slice(4)}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-4">{paragraph.slice(2)}</li>;
            }
            if (paragraph.startsWith('1. ')) {
              return <li key={index} className="ml-4 list-decimal">{paragraph.slice(3)}</li>;
            }
            if (paragraph.trim() === '') {
              return null;
            }
            return <p key={index} className="mb-4">{paragraph}</p>;
          })}
        </div>
      </div>
    </article>
  );
} 