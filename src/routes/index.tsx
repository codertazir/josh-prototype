import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-breakfast.jpg";
import pancakesImg from "@/assets/pancakes.jpg";
import omeletteImg from "@/assets/omelette.jpg";
import burgerImg from "@/assets/burger.jpg";
import croissantImg from "@/assets/croissant.jpg";
import interiorImg from "@/assets/interior.jpg";
import joshLogo from "@/assets/josh-logo.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josh — The Breakfast Shop | Al Jubail" },
      {
        name: "description",
        content:
          "Josh (جوش الفناتير) — a beloved breakfast shop in Al Jubail serving fluffy pancakes, cheesy omelettes, golden croissants and coffee from 5AM to 1AM.",
      },
      { property: "og:title", content: "Josh — The Breakfast Shop" },
      {
        property: "og:description",
        content: "Fluffy pancakes, cheesy omelettes, golden croissants. Al Shati Street, Al Jubail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  {
    section: "Pancakes & Sweet",
    items: [
      { name: "Classic Buttermilk Stack", desc: "Fluffy pancakes, butter, warm maple syrup.", price: "24" },
      { name: "Lotus Dream", desc: "Pancakes drenched in Lotus caramel and crushed biscuit.", price: "31" },
      { name: "Berry Cloud", desc: "Fresh berries, mascarpone, powdered sugar.", price: "29" },
    ],
  },
  {
    section: "Omelettes & Eggs",
    items: [
      { name: "Cheesy Omelette", desc: "Three-cheese pull, herbs, sourdough toast.", price: "29" },
      { name: "Shakshuka Fanateer", desc: "Eggs poached in spiced tomato, feta, bread.", price: "27" },
      { name: "Dynamite Chicken", desc: "Crispy chicken, eggs, spicy Josh sauce.", price: "31" },
    ],
  },
  {
    section: "Loaf, Buns & Burgers",
    items: [
      { name: "Golden Bun", desc: "Toasted brioche, cream cheese, honey drizzle.", price: "19" },
      { name: "Chicken Burger", desc: "Buttermilk fried chicken, pickles, brioche.", price: "17" },
      { name: "Le Croissant", desc: "Butter croissant, choice of jam or Nutella.", price: "15" },
    ],
  },
  {
    section: "From the Bar",
    items: [
      { name: "Spanish Latte", desc: "Espresso, steamed milk, condensed sweetness.", price: "16" },
      { name: "V60 Pour Over", desc: "Rotating single origin, bright and clean.", price: "18" },
      { name: "Karak", desc: "Spiced milk tea, brewed slow.", price: "10" },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Nav */}
      <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1120px)] -translate-x-1/2 animate-fade-in">
        <nav className="flex items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 py-2.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl md:px-6 md:py-3">
          <a href="#top" className="flex items-center gap-2">
            <img src={joshLogo.url} alt="Josh" className="h-8 w-auto md:h-9" />
          </a>
          <ul className="hidden gap-8 text-sm text-foreground/80 md:flex">
            <li><a href="#menu" className="transition-colors hover:text-accent-blue">Menu</a></li>
            <li><a href="#story" className="transition-colors hover:text-accent-blue">Story</a></li>
            <li><a href="#visit" className="transition-colors hover:text-accent-blue">Visit</a></li>
          </ul>
          <a
            href="tel:+966598678697"
            className="rounded-full bg-accent-blue px-4 py-2 text-xs font-medium uppercase tracking-widest text-white shadow-sm transition hover:opacity-90 hover:shadow-md"
          >
            Call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-white">
        <img
          src={heroImg}
          alt="Breakfast spread of pancakes, croissants, omelette and coffee"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
          {/* Blurred glass panel behind text for legibility */}
          <div className="max-w-3xl animate-fade-up rounded-3xl border border-white/50 bg-white/55 p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent-blue">
              Al Jubail · Since sunrise
            </p>
            <h1 className="font-display text-5xl font-medium leading-[0.95] text-foreground md:text-7xl">
              Breakfast, <em className="italic text-accent-blue">slowly</em> — the way mornings were meant to taste.
            </h1>
            <p className="mt-6 max-w-xl text-base text-foreground/70 md:text-lg">
              Josh — جوش الفناتير — a small breakfast shop pouring hot coffee and stacking pancakes from 5 in the morning until 1 at night.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                See the menu
              </a>
              <a
                href="#visit"
                className="rounded-full border border-foreground/20 bg-white/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-accent-blue hover:text-accent-blue"
              >
                Find us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section id="story" className="border-b border-border bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">Our story</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
              A neighborhood table on Al Shati Street.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
            <p>
              Josh started as a tiny counter in Fanateer with one espresso machine, a hot griddle, and a
              simple idea — make the first meal of the day worth waking up for. Years and a thousand
              breakfasts later, the idea hasn't changed.
            </p>
            <p>
              Everything is made to order. Pancakes hit the pan when you sit down. Omelettes are folded
              soft. Coffee is pulled slow. Come alone with a book, come with the whole family — the
              door's open before the sun.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="font-display text-3xl text-accent-blue">4.9</div>
                <div className="text-xs uppercase tracking-widest">1.2K reviews</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-accent-blue">20h</div>
                <div className="text-xs uppercase tracking-widest">Open daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature dishes gallery */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">Signatures</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">The things people come back for.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A handful of dishes we've been perfecting since day one.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-12">
            <Dish img={pancakesImg} name="Classic Stack" tag="Pancakes" price="24" className="md:col-span-6 md:row-span-2 aspect-[4/5]" featured />
            <Dish img={omeletteImg} name="Cheesy Omelette" tag="Eggs" price="29" className="md:col-span-6 aspect-[4/3]" />
            <Dish img={burgerImg} name="Chicken Burger" tag="Josh Classic" price="17" className="md:col-span-3 aspect-square" />
            <Dish img={croissantImg} name="Le Croissant" tag="Bakery" price="15" className="md:col-span-3 aspect-square" />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="grain-bg bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">The menu</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">All day, every day.</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Prices in Saudi Riyal. Menu rotates with the seasons and the mood of the kitchen.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
            {menu.map((sec) => (
              <div key={sec.section}>
                <h3 className="mb-8 flex items-baseline gap-4 font-display text-2xl">
                  <span className="text-accent-blue">—</span>
                  {sec.section}
                </h3>
                <ul className="space-y-6">
                  {sec.items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-4 transition-transform hover:translate-x-1">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-lg font-medium">{it.name}</span>
                          <span className="flex-1 border-b border-dashed border-border" />
                          <span className="font-display text-lg text-accent-blue">{it.price}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="relative overflow-hidden bg-white text-foreground">
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
          <div className="relative min-h-[420px]">
            <img
              src={interiorImg}
              alt="Josh café interior"
              width={1600}
              height={1000}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="px-6 py-20 md:px-16 md:py-28">
            <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">Visit</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">Come sit with us.</h2>

            <dl className="mt-12 space-y-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Address</dt>
                <dd className="mt-2 text-lg">
                  Al Shati Street I, Al Shati, Fanateer<br />
                  Al Jubail, Saudi Arabia
                </dd>
                <a
                  href="https://www.google.com/maps/place/Josh+Fanateer+I+%D8%AC%D9%88%D8%B4+%D8%A7%D9%84%D9%81%D9%86%D8%A7%D8%AA%D9%8A%D8%B1"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-accent-blue underline underline-offset-4 hover:opacity-80"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Hours</dt>
                <dd className="mt-2 grid grid-cols-2 gap-x-8 gap-y-1 text-base">
                  <span>Sun – Thu</span><span>5 AM – 1 AM</span>
                  <span>Fri – Sat</span><span>6 AM – 1 AM</span>
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Contact</dt>
                <dd className="mt-2 space-y-1 text-base">
                  <div>
                    <a href="tel:+966598678697" className="hover:text-accent-blue">+966 59 867 8697</a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/josh_ksa"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent-blue"
                    >
                      @josh_ksa
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pb-10 pt-4 text-muted-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border px-6 pt-8 text-xs md:px-10">
          <img src={joshLogo.url} alt="Josh" className="h-7 w-auto" />
          <span>© {new Date().getFullYear()} Josh, The Breakfast Shop. All mornings reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function Dish({
  img,
  name,
  tag,
  price,
  className = "",
  featured = false,
}: {
  img: string;
  name: string;
  tag: string;
  price: string;
  className?: string;
  featured?: boolean;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/90">{tag}</div>
          <div className={`font-display ${featured ? "text-3xl md:text-4xl" : "text-xl"} text-white`}>
            {name}
          </div>
        </div>
        <div className="rounded-full bg-white/90 px-3 py-1 font-display text-sm text-accent-blue">SAR {price}</div>
      </figcaption>
    </figure>
  );
}
