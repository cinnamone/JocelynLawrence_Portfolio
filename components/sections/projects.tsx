import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FigmaIcon, GithubIcon } from "lucide-react"

type Project = {
  title: string
  description: string
  href?: string
  image: string
  figma?: string
  github?: string
}
type ProjectsData = {
  id: string
  title: string
  items: Project[]
}

export function Projects({ data }: { data: ProjectsData }) {
  return (
    <section id={data.id} className="mx-auto mt-16 max-w-6xl px-4">
      <h2 className="text-2xl font-semibold">{data.title}</h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.items.slice(0, 6).map((p, idx) => (
          <Card
            key={idx}
            className="overflow-hidden rounded-2xl transition hover:-translate-y-0.5 hover:shadow-lg focus-within:shadow-lg"
          >
            <CardHeader className="p-0">
              {p.href ? (
                <a href={p.href} aria-label={`${p.title} live link`}>
                  <img
                    src={p.image || "/placeholder.svg?height=160&width=320&query=project%20screenshot"}
                    alt={`${p.title} screenshot`}
                    className="h-40 w-full object-cover transition hover:opacity-95"
                  />
                </a>
              ) : (
                <img
                  src={p.image || "/placeholder.svg?height=160&width=320&query=project%20screenshot"}
                  alt={`${p.title} screenshot`}
                  className="h-40 w-full object-cover"
                />
              )}
            </CardHeader>
            <CardContent className="p-3">
              <CardTitle className="text-base">{p.title}</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
            </CardContent>

            <CardFooter className="flex items-center gap-2 pb-3">
              {p.figma && (
                <Button asChild size="sm" variant="outline" className="rounded-full bg-transparent">
                  <a href={p.figma} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} Figma`}>
                    <span className="flex items-center gap-2">
                      <FigmaIcon className="h-4 w-4" aria-hidden="true" />
                      <span>Figma</span>
                    </span>
                  </a>
                </Button>
              )}
              {p.github && (
                <Button asChild size="sm" className="rounded-full">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} GitHub`}>
                    <span className="flex items-center gap-2">
                      <GithubIcon className="h-4 w-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
