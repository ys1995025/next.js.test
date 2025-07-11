import { getBlogs, type Blog } from "../../src/lib/blog";
import { BlogCard } from "../../src/components/BlogCard";

export default async function BlogPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">博客</h1>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
