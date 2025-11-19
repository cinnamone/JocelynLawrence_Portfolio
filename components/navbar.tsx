"use client"

import Link from "next/link"
import { useState } from "react"
import { site } from "./site-config"
import { cn } from "@/lib/utils"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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

          <ul className="hidden items-center gap-2 md:flex">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen && (
          <div className="mt-2 rounded-2xl border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 md:hidden">
            <ul className="flex flex-col p-4">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm transition",
                      "hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
