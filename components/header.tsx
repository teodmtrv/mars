import { GitFork } from "lucide-react"
import Link from "next/link"
import ThemeToggleButton from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="h-14 bg-background border-border">
      <div className="h-full px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Mars</h1>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <Button variant="ghost" size="icon" className="size-8" asChild>
            <Link
              href="https://github.com/teodmtrv/mars"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <GitFork className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
