import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type MouseEvent } from "react";
import { Search as SearchIcon } from "lucide-react";
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
          <a href="#search" className="hover:text-foreground transition">Shop</a>
          <a href="#makers" className="hover:text-foreground transition">Makers</a>
          <a href="#journal" className="hover:text-foreground transition">Journal</a>
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
  return LabelInner();
}

type Product = {
  id: string;
  name: string;
  company: string;
  type: "Tops" | "Bottoms" | "Outerwear" | "Knitwear" | "Dresses";
  score: number; // 0-100
  price: number;
  material: string;
  description: string;
  palette: [string, string];
};

const PRODUCTS: Product[] = [
  { id: "p1", name: "Madder Linen Tunic", company: "Studio Anjali", type: "Tops", score: 96, price: 128, material: "Organic linen, madder dye", description: "Loose hand-loomed tunic dyed with madder root. Breathes like a second skin.", palette: ["#c2956b", "#8b6f5e"] },
  { id: "p2", name: "Indigo Field Shirt", company: "Studio Anjali", type: "Tops", score: 92, price: 145, material: "GOTS cotton, plant indigo", description: "Workwear shirt vat-dyed in small batches. Softens over years, not weeks.", palette: ["#2d5a7a", "#1a3c52"] },
  { id: "p3", name: "Porto Wide Trouser", company: "Loom & Linden", type: "Bottoms", score: 88, price: 168, material: "European flax linen", description: "High-rise trouser woven on century-old looms in northern Portugal.", palette: ["#dce5d4", "#a8c0a0"] },
  { id: "p4", name: "Oat Carpenter Pant", company: "Loom & Linden", type: "Bottoms", score: 84, price: 152, material: "Hemp-cotton blend", description: "Utility cut with corozo buttons and reinforced tool loops. Built to outlast you.", palette: ["#e8d5b7", "#c4a47a"] },
  { id: "p5", name: "Sauvage Wool Cardigan", company: "Maison Sauvage", type: "Knitwear", score: 90, price: 245, material: "Undyed highland wool", description: "Chunky cardigan knit by a four-woman co-op in Oaxaca. Naturally lanolin-rich.", palette: ["#6b5d4a", "#3d352a"] },
  { id: "p6", name: "Sage Crewneck", company: "Maison Sauvage", type: "Knitwear", score: 86, price: 198, material: "Alpaca, plant-dyed", description: "Featherweight crew dyed with sage. Warm, light, biodegradable.", palette: ["#87a878", "#4a6741"] },
  { id: "p7", name: "Terra Field Jacket", company: "North Bothy", type: "Outerwear", score: 82, price: 385, material: "Waxed organic cotton", description: "Waxed with beeswax and pine resin — no PFAS, no plastics. Re-waxable forever.", palette: ["#9b4423", "#5c2018"] },
  { id: "p8", name: "Moss Chore Coat", company: "North Bothy", type: "Outerwear", score: 79, price: 298, material: "Hemp canvas", description: "Boxy chore coat with four utility pockets. Stiff at first, then molded to you.", palette: ["#4a6741", "#2d3f28"] },
  { id: "p9", name: "Almond Slip Dress", company: "Casa Lino", type: "Dresses", score: 94, price: 215, material: "Peace silk, undyed", description: "Bias-cut slip in non-violent silk. The colour of the cocoon itself.", palette: ["#e8c5a0", "#c9a87a"] },
  { id: "p10", name: "Cochineal Midi", company: "Casa Lino", type: "Dresses", score: 89, price: 268, material: "Organic cotton, cochineal", description: "Midi dress flooded with cochineal red — a 3,000-year-old natural pigment.", palette: ["#c44569", "#7a2a3d"] },
  { id: "p11", name: "Reseda Tee", company: "Studio Anjali", type: "Tops", score: 91, price: 78, material: "Pima cotton, weld dye", description: "Boxy tee in soft weld-yellow. The everyday staple, done properly.", palette: ["#d4c270", "#8a8045"] },
  { id: "p12", name: "Bothy Overshirt", company: "North Bothy", type: "Outerwear", score: 85, price: 225, material: "Recycled wool", description: "Heavy overshirt made from reclaimed mill ends. No two are exactly alike.", palette: ["#3d4a52", "#1f2a30"] },
];

type GroupBy = "company" | "type" | "score";

function Search() {
  const [q, setQ] = useState("");
  const [groupBy, setGroupBy] = useState<GroupBy>("company");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return PRODUCTS;
    return PRODUCTS.filter((p) =>
      [p.name, p.company, p.type, p.material, p.description].some((f) =>
        f.toLowerCase().includes(needle),
      ),
    );
  }, [q]);

  const groups = useMemo(() => {
    const map = new Map<string, Product[]>();
    for (const p of filtered) {
      let key: string;
      if (groupBy === "company") key = p.company;
      else if (groupBy === "type") key = p.type;
      else key = p.score >= 90 ? "Exceptional (90–100)" : p.score >= 85 ? "Excellent (85–89)" : "Verified (75–84)";
      const arr = map.get(key) ?? [];
      arr.push(p);
      map.set(key, arr);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered, groupBy]);

  return (
    <section id="search" className="px-6 py-28 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">The Marketplace</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1.05]">
              Search by what's <em className="italic text-clay font-light">inside.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Filter by maker, material, or sustainability score. Every result is verified to our standard.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-10">
          <label className="flex items-center gap-3 flex-1 rounded-full border border-border bg-card px-5 py-3.5 focus-within:border-foreground/40 transition">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Try 'linen', 'indigo', or 'Oaxaca'"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            {q && (
              <button onClick={() => setQ("")} className="text-xs text-muted-foreground hover:text-foreground">Clear</button>
            )}
          </label>
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            {(["company", "type", "score"] as GroupBy[]).map((g) => (
              <button
                key={g}
                onClick={() => setGroupBy(g)}
                className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition ${
                  groupBy === g ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {g === "company" ? "Maker" : g === "type" ? "Type" : "Score"}
              </button>
            ))}
          </div>
        </div>

        {groups.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-16 text-center text-muted-foreground">
            No garments match "{q}". Try a different fibre or maker.
          </div>
        ) : (
          <div className="space-y-16">
            {groups.map(([key, items]) => (
              <div key={key}>
                <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-border">
                  <h3 className="font-display text-2xl">{key}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {items.length} {items.length === 1 ? "piece" : "pieces"}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((p) => (
                    <ProductCard key={p.id} p={p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-soft)] transition">
      <div className="aspect-[4/5] relative overflow-hidden">
        <GarmentVisual type={p.type} colors={p.palette} />
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-background/90 backdrop-blur px-2.5 py-1 rounded-full">
          {p.type}
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-background/90 backdrop-blur px-2.5 py-1 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          <span className="text-[10px] font-medium">{p.score}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.company}</div>
        <h4 className="font-display text-xl mt-1.5 leading-tight">{p.name}</h4>
        <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed line-clamp-2">{p.description}</p>
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-foreground/70">{p.material}</span>
          <span className="font-display text-lg">${p.price}</span>
        </div>
      </div>
    </article>
  );
}

function GarmentVisual({ type, colors }: { type: Product["type"]; colors: [string, string] }) {
  const [c1, c2] = colors;
  const bg = `linear-gradient(135deg, ${c1}22, ${c2}33)`;
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: bg }}>
      <svg viewBox="0 0 200 240" className="h-[78%] w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]">
        <defs>
          <linearGradient id={`g-${c1}-${c2}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        {type === "Tops" && (
          <path d="M40 50 L80 30 Q100 50 120 30 L160 50 L150 90 L130 80 L130 200 Q100 210 70 200 L70 80 L50 90 Z" fill={`url(#g-${c1}-${c2})`} />
        )}
        {type === "Bottoms" && (
          <path d="M55 30 L145 30 L150 110 L130 230 L110 230 L100 130 L90 230 L70 230 L50 110 Z" fill={`url(#g-${c1}-${c2})`} />
        )}
        {type === "Outerwear" && (
          <>
            <path d="M30 55 L80 25 L100 45 L120 25 L170 55 L160 95 L150 90 L150 215 L100 220 L50 215 L50 90 L40 95 Z" fill={`url(#g-${c1}-${c2})`} />
            <line x1="100" y1="45" x2="100" y2="220" stroke={c2} strokeWidth="2" opacity="0.4" />
          </>
        )}
        {type === "Knitwear" && (
          <>
            <path d="M45 55 L80 35 Q100 55 120 35 L155 55 L145 100 L135 95 L135 210 Q100 220 65 210 L65 95 L55 100 Z" fill={`url(#g-${c1}-${c2})`} />
            <path d="M65 120 Q100 130 135 120 M65 150 Q100 160 135 150 M65 180 Q100 190 135 180" stroke={c2} strokeWidth="1.5" fill="none" opacity="0.35" />
          </>
        )}
        {type === "Dresses" && (
          <path d="M70 30 Q100 50 130 30 L135 70 L155 230 Q100 240 45 230 L65 70 Z" fill={`url(#g-${c1}-${c2})`} />
        )}
      </svg>
    </div>
  );
}

function LabelInner() {
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
