import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={38}
          priority
          className="dark:invert mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">关于 Next.js</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center">
          Next.js 是一个用于生产环境的 React 框架
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <FeatureCard
          title="混合渲染"
          description="支持服务端渲染(SSR)、静态生成(SSG)和客户端渲染，为每个页面选择最佳的渲染策略。"
        />
        <FeatureCard
          title="文件系统路由"
          description="基于文件系统的直观路由，支持动态路由、嵌套路由和平行路由。"
        />
        <FeatureCard
          title="零配置"
          description="自动编译和打包优化，开箱即用的 TypeScript 支持。"
        />
        <FeatureCard
          title="数据获取"
          description="内置数据获取方法，支持服务器组件、增量静态再生成(ISR)和动态API路由。"
        />
        <FeatureCard
          title="优化性能"
          description="自动图片优化、字体优化、脚本优化等，确保最佳的用户体验。"
        />
        <FeatureCard
          title="开发体验"
          description="快速刷新、TypeScript 支持、ESLint 集成，提供出色的开发体验。"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
} 