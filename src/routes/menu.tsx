import { createFileRoute, Link } from "@tanstack/react-router";
import { menu } from "@/data/menu";
import joshLogo from "@/assets/josh-logo.webp.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Full Menu — Josh, The Breakfast Shop" },
      {
        name: "description",
        content:
          "The full Josh menu: buttermilk pancakes, cheesy omelettes, brioche burgers, croissants and slow-pulled coffee. Prices in Saudi Riyal, VAT included.",
      },
      { property: "og:title", content: "Full Menu — Josh, The Breakfast Shop" },
      {
        property: "og:description",
        content: "Pancakes, omelettes, buns and coffee — all day, every day in Al Jubail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Nav */}
      <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1120px)] -translate-x-1/2 animate-fade-in">
        <nav className="flex items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-2.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl md:px-6 md:py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={joshLogo.url} alt="Josh" className="h-8 w-auto rounded-lg md:h-9" />
          </Link>
          <ul className="hidden gap-8 text-sm text-foreground/80 md:flex">
            <li>
              <Link to="/" hash="story" className="transition-colors hover:text-accent-blue">
                Story
              </Link>
            </li>
            <li>
              <Link to="/menu" className="font-medium text-accent-blue">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/" hash="visit" className="transition-colors hover:text-accent-blue">
                Visit
              </Link>
            </li>
          </ul>
          <a
            href="tel:+966598678697"
            className="rounded-full bg-accent-blue px-4 py-2 text-xs font-medium uppercase tracking-widest text-white shadow-sm transition hover:opacity-90 hover:shadow-md"
          >
            Call
          </a>
        </nav>
      </header>

      <section className="px-6 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-6xl animate-fade-up text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">The full menu</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">All day, every day.</h1>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Prices in Saudi Riyal · VAT included.
          </p>
        </div>
      </section>

      {menu.map((sec, i) => (
        <section
          key={sec.section}
          className={i % 2 === 1 ? "bg-accent-blue/[0.04] py-16 md:py-20" : "bg-white py-16 md:py-20"}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <h2 className="mb-10 flex items-baseline gap-4 font-display text-3xl md:text-4xl">
              <span className="text-accent-blue">—</span>
              {sec.section}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sec.items.map((it) => (
                <MenuItemCard key={it.name} item={it} />
              ))}
            </div>

          </div>
        </section>
      ))}

      <footer className="bg-white pb-10 pt-4 text-muted-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border px-6 pt-8 text-xs md:px-10">
          <img src={joshLogo.url} alt="Josh" className="h-16 w-auto md:h-20" />
          <Link to="/" className="hover:text-accent-blue">
            ← Back home
          </Link>
        </div>
      </footer>
    </div>
  );
}
