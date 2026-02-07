import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Base Buriti",
    description: "Cobertura natural com proteção solar, enriquecida com óleo de buriti.",
    price: "R$ 89,90",
    image: "/images/product-1.jpg",
  },
  {
    name: "Blush Açaí",
    description: "Cor vibrante e duradoura extraída do pigmento natural do açaí.",
    price: "R$ 59,90",
    image: "/images/product-2.jpg",
  },
  {
    name: "Batom Pitanga",
    description: "Hidratação intensa com manteiga de cupuaçu e cor de pitanga madura.",
    price: "R$ 49,90",
    image: "/images/product-3.jpg",
  },
  {
    name: "Iluminador Castanha",
    description: "Brilho dourado sutil com extrato de castanha-do-pará.",
    price: "R$ 69,90",
    image: "/images/product-4.jpg",
  },
]

export function Products() {
  return (
    <section id="produtos" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Colecao
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">Nossos Produtos</span>
            </h2>
          </div>
          <a
            href="#produtos"
            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            Ver todos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <p className="mt-3 text-sm font-semibold tracking-wide text-primary">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
