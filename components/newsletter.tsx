"use client"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="contato" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Newsletter
          </p>
          <h2 className="font-serif text-4xl font-light text-background md:text-5xl lg:text-6xl">
            <span className="text-balance">Fique por dentro das novidades</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/60">
            {
              "Receba em primeira mão nossos lançamentos, dicas de beleza natural e promoções exclusivas."
            }
          </p>

          {submitted ? (
            <div className="mt-10">
              <p className="text-lg font-medium text-accent">
                Obrigada por se inscrever!
              </p>
              <p className="mt-2 text-sm text-background/60">
                Voce recebera nossas novidades em breve.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Seu melhor e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 rounded-full border border-background/20 bg-transparent px-6 py-3.5 text-sm text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90"
              >
                Inscrever-se
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
