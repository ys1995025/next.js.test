import Image from "next/image";
import Link from "next/link";
import type { Blog } from "../lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-900">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <CardHeader>
        <h2 className="text-xl font-semibold">{blog.title}</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">
          {blog.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-4">{blog.author}</span>
          <span>{blog.date}</span>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href={`/blog/${blog.slug}`}>
            阅读更多
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 