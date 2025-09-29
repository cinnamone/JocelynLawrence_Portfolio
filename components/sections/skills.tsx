import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Braces,
  FileCode,
  Database,
  Terminal,
  Cog,
  PenTool,
  GitBranch,
  Monitor,
  Boxes,
  Coffee,
  FileText,
  Circle,
} from "lucide-react"

type SkillsGroup = { title: string; items: string[] }
type SkillsData = { id: string; title: string; items?: string[]; groups?: SkillsGroup[] }

export function Skills({ data }: { data: SkillsData }) {
  const getSkillIcon = (label: string) => {
    const l = label.toLowerCase()
    // Languages & Frameworks
    if (["html", "css"].includes(l)) return FileCode
    if (["javascript", "js"].includes(l)) return Braces
    if (["python"].includes(l)) return Code2
    if (["java"].includes(l)) return Coffee
    if (["c", "c++", "dev-c++"].includes(l)) return Terminal
    if (["sql"].includes(l)) return Database
    // Tools
    if (["figma", "canva"].includes(l)) return PenTool
    if (["github", "git"].includes(l)) return GitBranch
    if (["vs code", "vscode", "editor"].includes(l)) return Monitor
    if (["eclipse"].includes(l)) return Boxes
    if (["xampp"].includes(l)) return Cog
    if (["ms office", "microsoft office", "office"].includes(l)) return FileText
    // default
    return Circle
  }

  return (
    <section id={data.id} className="mx-auto mt-16 max-w-6xl px-4">
      <h2 className="text-2xl font-semibold">{data.title}</h2>

      {data.groups && data.groups.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-medium">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((s) => {
                  const Icon = getSkillIcon(s)
                  return (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{s}</span>
                    </Badge>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {data.items?.map((s) => {
            const Icon = getSkillIcon(s)
            return (
              <Badge
                key={s}
                variant="secondary"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{s}</span>
              </Badge>
            )
          })}
        </div>
      )}
    </section>
  )
}
