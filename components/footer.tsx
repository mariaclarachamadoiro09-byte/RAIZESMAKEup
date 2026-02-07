import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-serif text-3xl font-semibold text-foreground"
            >
              Raízes
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {
                "Cosméticos naturais inspirados na biodiversidade brasileira. Beleza autêntica, sustentável e para todos."
              }
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Navegacao
            </h4>
            <ul className="mt-4 space-y-3">
              {["Sobre", "Produtos", "Ingredientes", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Redes Sociais
            </h4>
            <ul className="mt-4 space-y-3">
              {["Instagram", "Facebook", "Pinterest", "TikTok"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Raízes Makeup. Todos os direitos reservados."}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
