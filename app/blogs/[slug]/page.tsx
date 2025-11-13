import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-primary hover:opacity-80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        <article className="prose prose-lg max-w-none">
          {blog.image && (
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>By {blog.writer}</span>
              <span>•</span>
              <time>{blog.date}</time>
            </div>
          </header>

          <div
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-primary hover:opacity-80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all blogs
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
