"use client"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <nav aria-label="Main navigation" className="container mx-auto px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Politix Matrix logo"
          width={24}
          height={24}
          className="h-6 w-6 rounded-[6px] object-contain"
          priority
        />
        <span className="text-lg font-semibold tracking-tight">Politix Matrix</span>
      </Link>

      <ul className={cn("hidden md:flex items-center gap-6 text-sm text-muted-foreground")}>

        <li>
          <Link href="/blogs" className="hover:text-foreground">
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/case-studies" className="hover:text-foreground">
            Case Studies
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        {/* Optional: add a mobile menu later */}
        <Link href="/#contact" className="text-primary">
          Contact
        </Link>
      </div>
    </nav>
  )
}
