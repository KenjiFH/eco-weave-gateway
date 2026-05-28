import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import fabricImg from "@/assets/fabric.jpg";
import makerImg from "@/assets/maker.jpg";
import garmentsImg from "@/assets/garments.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecowear — The ingredient label for fashion" },
      { name: "description", content: "A global marketplace connecting you with verified small makers of organic, non-toxic clothing. Know exactly what you wear." },
      { property: "og:title", content: "Ecowear — The ingredient label for fashion" },
      { property: "og:description", content: "A global marketplace connecting you with verified small makers of organic, non-toxic clothing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Search />
      <Label />
      <Makers />
      <Manifesto />
      <Journal />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-moss" />
          <span className="font-display text-xl tracking-tight">Ecowear</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/70">
          <a href="#label" className="hover:text-foreground transition">The Label</a>
          <a href="#makers" className="hover:text-foreground transition">Makers</a>
          <a href="#journal" className="hover:text-foreground transition">Journal</a>
          <a href="#search" className="hover:text-foreground transition">Shop</a>
        </nav>
        <a href="#" className="text-sm rounded-full border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition">
          Sign in
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="h-px w-8 bg-foreground/40" />
            Slow fashion, verified
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95]">
            Know what<br />
            <em className="italic text-clay font-light">you wear.</em>
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed">
            Ecowear is the ingredient label for fashion — a global marketplace of small,
            verified makers producing organic, non-toxic clothing you can trace, thread by thread.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#" className="rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-moss transition">
              Explore the marketplace
            </a>
            <a href="#label" className="rounded-full px-2 py-3.5 text-sm font-medium underline-offset-4 hover:underline">
              How verification works →
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              ["240+", "verified makers"],
              ["38", "countries"],
              ["0", "toxic dyes"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img src={heroImg} alt="Woman in flowing organic cotton garment" width={1080} height={1350} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -left-6 bottom-10 bg-background/95 backdrop-blur rounded-xl p-4 shadow-[var(--shadow-soft)] max-w-[220px]">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Composition</div>
            <div className="mt-2 space-y-1.5 text-sm">
              <Row label="Organic cotton" value="92%" />
              <Row label="Plant-dyed" value="100%" />
              <Row label="Water saved" value="2,700L" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-foreground/70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Marquee() {
  const items = ["GOTS Certified", "Fair Trade", "Plant-Dyed", "Zero PFAS", "Living Wage", "Small-Batch", "Traceable"];
  return (
    <div className="border-y border-border/60 bg-secondary/40 py-6 overflow-hidden">
      <div className="flex gap-14 animate-[scroll_40s_linear_infinite] whitespace-nowrap text-sm tracking-[0.15em] uppercase text-foreground/70">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-14">
            {t}
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  );
}

function Label() {
  const rows = [
    { name: "Material", val: "100% Organic Cotton", note: "GOTS certified, regeneratively farmed in Gujarat" },
    { name: "Dye", val: "Madder root + indigo", note: "Plant-based, no heavy metals" },
    { name: "Maker", val: "Studio Anjali, India", note: "12 artisans, living wage verified" },
    { name: "Trims", val: "Corozo nut buttons", note: "Biodegradable, fairly sourced" },
    { name: "Footprint", val: "0.4 kg CO₂e", note: "vs. 5.5 kg fast-fashion average" },
    { name: "End of life", val: "Compostable", note: "Returns to soil in 6 months" },
  ];
  return (
    <section id="label" className="px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">The Label</div>
          <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
            We read your clothes the way you read your food.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
            Every Ecowear piece ships with a complete ingredient label — a verified, line-by-line
            account of what's inside, who made it, and what it leaves behind.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-[var(--shadow-soft)]">
            <div className="flex items-baseline justify-between pb-6 border-b border-border">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Garment ID</div>
                <div className="font-display text-2xl mt-1">EW-0241 · Linen Tunic</div>
              </div>
              <span className="text-xs rounded-full bg-moss text-primary-foreground px-3 py-1">Verified</span>
            </div>
            <dl className="divide-y divide-border">
              {rows.map((r, i) => (
                <div key={r.name} className="grid grid-cols-12 gap-4 py-5 items-baseline">
                  <dt className="col-span-3 text-xs uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} · {r.name}
                  </dt>
                  <dd className="col-span-4 font-display text-lg">{r.val}</dd>
                  <dd className="col-span-5 text-sm text-muted-foreground">{r.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Makers() {
  const makers = [
    { img: fabricImg, name: "Loom & Linden", place: "Porto, Portugal", craft: "Hand-loomed linen" },
    { img: makerImg, name: "Studio Anjali", place: "Gujarat, India", craft: "Plant-dyed cotton" },
    { img: garmentsImg, name: "Maison Sauvage", place: "Oaxaca, Mexico", craft: "Naturally dyed knits" },
  ];
  return (
    <section id="makers" className="px-6 py-28 lg:py-40 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Meet the makers</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
              240 small studios.<br />
              <em className="italic text-clay font-light">One honest standard.</em>
            </h2>
          </div>
          <a href="#" className="text-sm underline underline-offset-4">View all makers →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {makers.map((m) => (
            <article key={m.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img src={m.img} alt={m.name} width={800} height={1000} loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.place}</p>
                </div>
                <span className="text-xs text-foreground/70 mt-1">{m.craft}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const principles = [
    { n: "01", t: "Anti fast-fashion", d: "No 52 micro-seasons. No synthetic shortcuts. Garments built to outlast the trend cycle." },
    { n: "02", t: "Radically transparent", d: "Every maker, every material, every mile — published, audited, and signed off." },
    { n: "03", t: "Non-toxic, always", d: "Zero PFAS, zero azo dyes, zero greenwash. If it touches your skin, we know what's in it." },
    { n: "04", t: "Pay the makers", d: "Verified living wages and direct trade. Small studios get a fair share, not a sweatshop rate." },
  ];
  return (
    <section className="px-6 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Our manifesto</div>
        <h2 className="font-display text-5xl lg:text-7xl leading-[1] max-w-4xl">
          Fashion's dirty. <em className="italic text-clay font-light">We're not.</em>
        </h2>
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-14">
          {principles.map((p) => (
            <div key={p.n} className="flex gap-6">
              <div className="font-display text-2xl text-clay shrink-0 w-10">{p.n}</div>
              <div>
                <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journal() {
  const posts = [
    { tag: "Materials", title: "Why we will never use recycled polyester", min: "4 min" },
    { tag: "Makers", title: "Inside a plant-dye workshop in Oaxaca", min: "7 min" },
    { tag: "Policy", title: "The PFAS loophole still hiding in your raincoat", min: "5 min" },
  ];
  return (
    <section id="journal" className="px-6 py-28 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <h2 className="font-display text-4xl lg:text-5xl">From the Journal</h2>
          <a href="#" className="text-sm underline underline-offset-4">All stories →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {posts.map((p) => (
            <a key={p.title} href="#" className="bg-background p-8 hover:bg-secondary/40 transition group">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span>{p.tag}</span>
                <span>{p.min}</span>
              </div>
              <h3 className="font-display text-2xl mt-12 leading-snug group-hover:text-clay transition">
                {p.title}
              </h3>
              <div className="mt-8 text-sm">Read →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bark text-background/85 px-6 pt-24 pb-10 rounded-t-[2.5rem] mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-background/15">
          <div className="lg:col-span-6">
            <h3 className="font-display text-5xl lg:text-6xl leading-[1.05] max-w-lg text-background">
              Dress like the planet's watching.
            </h3>
            <form className="mt-10 flex max-w-md border-b border-background/30 pb-2">
              <input type="email" placeholder="you@earth.com"
                className="flex-1 bg-transparent outline-none placeholder:text-background/40 text-background py-2" />
              <button className="text-sm uppercase tracking-widest text-background/90 hover:text-background">
                Subscribe →
              </button>
            </form>
            <p className="text-xs text-background/50 mt-3">Quiet emails. Real makers. No spam, no greenwash.</p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-3 gap-8 text-sm">
            {[
              ["Shop", ["Women", "Men", "New arrivals", "Sale"]],
              ["Ecowear", ["The Label", "Makers", "Journal", "Standards"]],
              ["Support", ["Contact", "Shipping", "Returns", "FAQ"]],
            ].map(([h, ls]) => (
              <div key={h as string}>
                <div className="text-xs uppercase tracking-widest text-background/50 mb-4">{h}</div>
                <ul className="space-y-2.5">
                  {(ls as string[]).map((l) => (
                    <li key={l}><a href="#" className="hover:text-background text-background/80">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-background/50">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sage" />
            <span>© {new Date().getFullYear()} Ecowear · A B Corp pending company</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Impact report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
