import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Mulher com maquiagem natural e pele radiante"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Beleza Natural Brasileira
          </p>
          <h1 className="font-serif text-5xl font-light leading-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="block text-balance">A beleza que</span>
            <span className="block text-balance">nasce da terra</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
            {
              "Cosméticos inspirados na biodiversidade brasileira. Feitos com ingredientes naturais para celebrar a diversidade da sua pele."
            }
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#produtos"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
            >
              Explorar Produtos
            </Link>
            <Link
              href="#sobre"
              className="inline-flex items-center rounded-full border border-foreground/20 px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground transition-all hover:border-foreground/40"
            >
              Nossa Historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
