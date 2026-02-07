import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/about.jpg"
              alt="Ingredientes naturais brasileiros usados nos cosméticos Raízes"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Nossa Essencia
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="block text-balance">
                Raízes na natureza,
              </span>
              <span className="block text-balance">
                beleza na pele
              </span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {
                  "Nascemos da vontade de criar uma maquiagem que respeita a terra e celebra a pele brasileira em toda a sua diversidade."
                }
              </p>
              <p>
                {
                  "Nossos cosméticos são formulados com ativos da biodiversidade brasileira — açaí, buriti, castanha e cupuaçu — em processos sustentáveis que valorizam as comunidades locais."
                }
              </p>
              <p>
                {
                  "Cada produto é um convite para reconectar-se com a natureza e descobrir a beleza que já existe em você."
                }
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  100%
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Natural
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  50+
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Tons de pele
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  0%
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Crueldade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
