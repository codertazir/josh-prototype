import type { MenuItem } from "@/data/menu";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:shadow-md">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-display text-base font-medium">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
      </div>
      <div className="shrink-0 whitespace-nowrap pl-1 font-display text-base text-accent-blue">
        SAR {item.price}
      </div>
    </article>
  );
}
