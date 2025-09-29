import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react"

type ContactMethod = { label: string; href: string }
type ContactData = { id: string; title: string; methods: ContactMethod[] }

export function Contact({ data }: { data: ContactData }) {
  const getIcon = (label: string, href: string) => {
    const l = label.toLowerCase()
    if (href.startsWith("mailto:")) return Mail
    if (href.startsWith("tel:")) return Phone
    if (l.includes("github")) return Github
    if (l.includes("linkedin")) return Linkedin
    return Globe
  }

  return (
    <section id={data.id} className="mx-auto mt-16 max-w-6xl px-4">
      <h2 className="text-2xl font-semibold">{data.title}</h2>

      <div className="mt-6">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg">Get in touch</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {data.methods.map((m, idx) => {
                const Icon = getIcon(m.label, m.href)
                return (
                  <li key={idx}>
                    <a
                      href={m.href}
                      className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition hover:-translate-y-0.5 hover:border-border hover:bg-muted/40 focus:outline-none"
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-sm font-medium">{m.label}</span>
                        <span className="truncate text-xs text-muted-foreground">{m.href}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
