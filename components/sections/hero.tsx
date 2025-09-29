"use client"

import { Button } from "@/components/ui/button"

type HeroData = {
  id: string
  name: string
  tagline: string
  cta: { label: string; href: string }
  cv?: { label: string; href: string }
}

export function Hero({ data }: { data: HeroData }) {
  return (
    <section id={data.id} className="relative pt-28 md:pt-32">
      {/* Decorative bubbly background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bubble absolute -top-10 left-10 h-48 w-48 rounded-full bg-primary/20 blur-2xl" />
        <div className="bubble absolute top-20 right-10 h-64 w-64 rounded-full bg-accent/30 blur-2xl" />
        <div className="bubble absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-8">
          <div>
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">{data.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{data.tagline}</p>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <Button asChild className="rounded-full">
                  <a href={data.cta.href} aria-label={data.cta.label}>
                    {data.cta.label}
                  </a>
                </Button>
                {data.cv?.href ? (
                  <Button asChild variant="outline" className="rounded-full bg-transparent">
                    <a href={data.cv.href} aria-label={data.cv.label} download>
                      {data.cv.label}
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
