"use client"

import Link from "next/link"
import { site } from "./site-config"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "mt-4 rounded-full border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60",
            "flex items-center justify-between px-4 py-3",
          )}
          aria-label="Main Navigation"
        >
          <Link href="#" className="font-semibold tracking-tight text-pretty">
            <span className="sr-only">Home</span>
            <span>Portfolio</span>
          </Link>

          <ul className="flex items-center gap-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition",
                    "hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
