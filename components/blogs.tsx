"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { blogs } from "@/lib/blogs-data"
import { Reveal, RevealStagger } from "@/components/reveal"

export function Blogs() {
  return (
    <section aria-label="Blogs" className="px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">Blogs</h2>
        <p className="mt-3 text-muted-foreground">
          {"Selected highlights from our research and strategy engagements."}
        </p>
      </div>

      <Reveal as="div" variant="fade-up" className="max-w-6xl mx-auto mt-10">
        <RevealStagger
          items={blogs}
          stepDelayMs={80}
          variant="fade-up"
          render={(blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="block transition-transform hover:scale-105"
            >
              <Card className="text-center h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-balance">{blog.title}</CardTitle>
                  <div className="text-xs text-muted-foreground mt-1">By: {blog.writer}</div>
                  <div className="text-xs text-muted-foreground">{blog.date}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          )}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        />
      </Reveal>
    </section>
  )
}
