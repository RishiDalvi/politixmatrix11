export function SiteFooter() {
  return (
    <footer aria-label="Footer" className="px-6 py-10 border-t">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
        <p className="font-semibold">Politix Matrix</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6">
          <a href="/" className="hover:text-accent transition-colors">Home</a>
          <a href="/blogs" className="hover:text-accent transition-colors">Blogs</a>
          <a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a>
          <a href="/about" className="hover:text-accent transition-colors">About Us</a>
          <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
          <span className="inline-block h-4 w-px bg-border" aria-hidden="true"></span>
          <a href="/privacy" className="hover:text-accent transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-accent transition-colors">Terms</a>
        </nav>
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Politix Matrix</p>
      </div>
    </footer>
  )
}
