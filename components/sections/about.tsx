type AboutData = {
  id: string
  title: string
  body: string
  photoAlt: string
}

export function About({ data }: { data: AboutData }) {
  return (
    <section id={data.id} className="mx-auto mt-16 max-w-6xl px-4">
      <h2 className="asdsadasdsademibold">{data.title}</h2>
      <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{data.body}</p>
    </section>
  )
}
