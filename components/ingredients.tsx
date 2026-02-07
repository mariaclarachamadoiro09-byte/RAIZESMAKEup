import { Leaf, Droplets, Sun, Heart } from "lucide-react"

const ingredients = [
  {
    icon: Droplets,
    name: "Açaí",
    description:
      "Rico em antioxidantes e antocianinas, protege a pele do envelhecimento precoce e confere pigmentação vibrante.",
  },
  {
    icon: Sun,
    name: "Buriti",
    description:
      "O fruto do cerrado com alto teor de betacaroteno, oferece proteção natural contra raios UV e hidratação profunda.",
  },
  {
    icon: Leaf,
    name: "Cupuaçu",
    description:
      "A manteiga mais hidratante da Amazônia, com capacidade superior de absorção de água e nutrição intensa.",
  },
  {
    icon: Heart,
    name: "Castanha",
    description:
      "Rica em selênio e vitamina E, a castanha-do-pará nutre e ilumina a pele com brilho natural e saudável.",
  },
]

export function Ingredients() {
  return (
    <section id="ingredientes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ingredientes
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Da floresta para a sua pele</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {
              "Selecionamos os melhores ativos da biodiversidade brasileira, extraídos de forma sustentável e ética."
            }
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium text-foreground">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
