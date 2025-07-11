import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">
            404
          </h1>
          <div className="animate-bounce mt-4">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={25}
              className="dark:invert mx-auto"
              priority
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          抱歉，页面未找到
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          您访问的页面可能已被移动、删除或暂时不可用
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-200"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
} 