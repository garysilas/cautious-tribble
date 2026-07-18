type Article = {
  id: string;
  category: string;
  region: string;
  title: string;
  image: string;
  imageAlt: string;
  left: number;
  center: number;
  right: number;
  sources: number;
};

const topics = [
  "World Cup",
  "IPL",
  "Social Media",
  "Business & Markets",
  "Health & Medicine",
  "Soccer",
  "Artificial Intelligence",
  "Arsenal FC",
  "Extreme Weather & Disasters",
];

const articles: Article[] = [
  {
    id: "peace-proposal",
    category: "Politics",
    region: "United States",
    title: "Trump Sends Iran Revised Peace Proposal With Tougher Terms: Report",
    image: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?auto=format&fit=crop&w=900&q=85",
    imageAlt: "American flag in warm sunlight",
    left: 20,
    center: 31,
    right: 49,
    sources: 12,
  },
  {
    id: "grapes-evidence",
    category: "Health",
    region: "United States",
    title: "Researchers Make Case for Grapes as a ‘Superfood’ After Review of Health Evidence",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Clusters of ripe grapes on a vine",
    left: 18,
    center: 42,
    right: 40,
    sources: 7,
  },
  {
    id: "cern-physics",
    category: "Science",
    region: "Switzerland",
    title: "CERN Finds High-Significance Hint of Physics Beyond Standard Model",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Worker walking through an industrial tunnel",
    left: 16,
    center: 62,
    right: 22,
    sources: 8,
  },
  {
    id: "nicaragua-detentions",
    category: "World",
    region: "Nicaragua",
    title: "Indigenous Leader Brooklyn Rivera Dies in Nicaraguan Jail After 3 Years of Detention",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Baseball coach gesturing from the sideline",
    left: 54,
    center: 28,
    right: 18,
    sources: 63,
  },
  {
    id: "un-lebanon",
    category: "World",
    region: "Middle East",
    title: "UN Security Council to Hold Emergency Meeting as Israel Passes Deep into Lebanon",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Damaged buildings in a city street",
    left: 21,
    center: 39,
    right: 43,
    sources: 15,
  },
  {
    id: "oil-prices",
    category: "Business",
    region: "Global",
    title: "Oil Prices Dip as OPEC+ Considers Output Increase Amid Easing Fears",
    image: "https://images.unsplash.com/photo-1517994112540-009c47ea476b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fuel nozzle at a gasoline station",
    left: 28,
    center: 50,
    right: 22,
    sources: 11,
  },
  {
    id: "spacex-mars",
    category: "Technology",
    region: "United States",
    title: "SpaceX Launches Starship Test Flight in Milestone for Mars Program",
    image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Rocket lifting off against a blue sky",
    left: 12,
    center: 45,
    right: 49,
    sources: 9,
  },
  {
    id: "apple-ai",
    category: "Business",
    region: "United States",
    title: "Apple Unveils AI-Powered Features Across iPhone, iPad, and Mac",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Apple logo on a dark glass building",
    left: 15,
    center: 40,
    right: 45,
    sources: 10,
  },
  {
    id: "warmest-years",
    category: "Climate",
    region: "Global",
    title: "2025 on Track to Be Among Top 3 Hottest Years, EU Climate Service Says",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Thermometer against a bright hot sky",
    left: 33,
    center: 34,
    right: 33,
    sources: 14,
  },
  {
    id: "fed-outlook",
    category: "Economy",
    region: "United States",
    title: "Fed Holds Rates Steady, Signals Caution on Inflation and Growth Outlook",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Federal building facade under a blue sky",
    left: 18,
    center: 49,
    right: 32,
    sources: 13,
  },
  {
    id: "madrid-final",
    category: "Soccer",
    region: "Europe",
    title: "Real Madrid Win Champions League After Comeback Victory in Final",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Soccer player celebrating in a stadium",
    left: 8,
    center: 20,
    right: 72,
    sources: 26,
  },
  {
    id: "canada-wildfire",
    category: "Environment",
    region: "Canada",
    title: "Wildfires Force Thousands to Evacuate Across Western Canada",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Forest wildfire burning at dusk",
    left: 27,
    center: 33,
    right: 40,
    sources: 17,
  },
];

function MenuIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function ChevronIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m9 18 6-6-6-6" /></svg>;
}

function InfoIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="8.5" /><path d="M12 10.8v5M12 8h.01" /></svg>;
}

function BiasMeter({ article }: { article: Article }) {
  return (
    <div className="mt-3 overflow-hidden rounded-[2px] border border-[#cdd0d7] text-[8px] font-semibold leading-4 tracking-[-0.02em]">
      <div className="flex h-4">
        <span className="flex items-center justify-center bg-[var(--left)] text-white" style={{ width: `${article.left}%` }}>L {article.left}%</span>
        <span className="flex items-center justify-center bg-[var(--center)] text-[var(--ink)]" style={{ width: `${article.center}%` }}>Center {article.center}%</span>
        <span className="flex items-center justify-center bg-[var(--right)] text-white" style={{ width: `${article.right}%` }}>R {article.right}%</span>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group overflow-hidden rounded-[5px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#d8d8d3]">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" src={article.image} alt={article.imageAlt} width="900" height="506" />
        <span className="absolute right-2 top-2 grid size-[18px] place-items-center rounded-full border border-white/90 bg-black/35 text-white"><InfoIcon /></span>
      </div>
      <div className="p-3">
        <p className="text-[9px] font-semibold tracking-[-0.015em] text-[#30323a]">{article.category} <span className="text-[#91939c]">·</span> {article.region}</p>
        <h2 className="mt-1.5 min-h-[42px] text-[13px] font-bold leading-[1.22] tracking-[-0.035em] text-[var(--ink)]">{article.title}</h2>
        <BiasMeter article={article} />
        <p className="mt-2 text-[9px] font-medium text-[#43454d]">{article.sources} sources</p>
      </div>
    </article>
  );
}

function Brand() {
  return <a href="#top" className="flex items-center leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2" aria-label="Biasly home"><span className="text-[21px] font-bold tracking-[-0.095em]">biasly</span><span className="ml-1 self-end pb-[1px] text-[7px] font-medium tracking-[-0.04em] text-[var(--ink-muted)]">News</span></a>;
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="bg-[#171818] text-[#e7e7e5]">
        <div className="mx-auto flex h-6 max-w-[1280px] items-center justify-between px-4 text-[8px] sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8b8b4]"><span className="hidden sm:inline">Browser Extension</span><span>Theme: <button className="text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Light</button> <button className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Dark</button> <button className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Auto</button></span></div>
          <div className="flex items-center gap-3 text-[#c9c9c5]"><span className="hidden md:inline">Monday, June 1, 2026</span><a href="#location" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Set Location</a><a href="#edition" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">International Edition⌄</a></div>
        </div>
      </div>

      <header className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <button className="grid size-8 place-items-center rounded text-[var(--ink)] hover:bg-[#f0f0ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="Open navigation"><span className="size-5"><MenuIcon /></span></button>
          <Brand />
          <nav aria-label="Primary navigation" className="ml-5 hidden h-full items-center gap-6 text-[10px] font-medium text-[#25262b] md:flex"><a className="hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" href="#top">Home</a><a className="hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" href="#for-you">For You</a><a className="hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" href="#local">Local</a><a className="hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" href="#blindspot">Blindspot</a></nav>
          <div className="ml-auto flex items-center gap-2"><button className="h-8 rounded-[3px] bg-[var(--ink)] px-4 text-[9px] font-semibold text-white transition hover:bg-[#2e3037] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2">Subscribe</button><button className="hidden h-8 rounded-[3px] border border-[#bfc1c7] px-4 text-[9px] font-semibold hover:bg-[#f5f5f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2 sm:block">Login</button></div>
        </div>
      </header>

      <nav aria-label="Topics" className="border-b border-[var(--border)] bg-[#f8f8f7]">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:px-8">
          <button className="sticky left-0 grid size-5 shrink-0 place-items-center bg-[#f8f8f7] text-[#5c5e66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="Browse topics"><span className="size-4 rotate-180"><ChevronIcon /></span></button>
          {topics.map((topic) => <a key={topic} href={`#${topic.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} className="shrink-0 rounded-[3px] border border-[#d9dadd] bg-[#ededeb] px-2.5 py-1 text-[8px] font-medium text-[#2d2f35] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]">{topic} <span className="ml-1 font-bold">+</span></a>)}
          <button className="ml-auto grid size-5 shrink-0 place-items-center bg-[#f8f8f7] text-[#5c5e66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="More topics"><span className="size-4"><ChevronIcon /></span></button>
        </div>
      </nav>

      <section className="mx-auto max-w-[1280px] px-4 py-7 sm:px-6 lg:px-8 lg:py-8" aria-labelledby="top-news-heading">
        <h1 id="top-news-heading" className="text-[18px] font-bold tracking-[-0.05em]">Top News</h1>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
        </div>
      </section>

      <footer className="bg-[#1b1c1c] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_2fr] lg:px-8">
          <div><Brand /><p className="mt-4 max-w-36 text-[9px] leading-[1.6] text-[#c1c2bf]">Balanced news coverage,<br />powered by AI.</p></div>
          <div><h2 className="text-[9px] font-semibold">Company</h2><ul className="mt-3 space-y-2 text-[8px] text-[#c1c2bf]"><li><a href="#about" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">About</a></li><li><a href="#careers" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Careers</a></li><li><a href="#press" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Press</a></li><li><a href="#contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Contact</a></li></ul></div>
          <div><h2 className="text-[9px] font-semibold">Help</h2><ul className="mt-3 space-y-2 text-[8px] text-[#c1c2bf]"><li><a href="#help" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Help Center</a></li><li><a href="#guides" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Guides</a></li><li><a href="#privacy" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Privacy Policy</a></li><li><a href="#terms" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Terms of Service</a></li></ul></div>
          <div className="lg:justify-self-end"><h2 className="text-[9px] font-semibold">Connect</h2><div className="mt-3 flex gap-3 text-[12px] text-[#d7d7d4]"><a href="#x" aria-label="Biasly on X" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">𝕏</a><a href="#linkedin" aria-label="Biasly on LinkedIn" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">in</a><a href="#instagram" aria-label="Biasly on Instagram" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">◎</a><a href="#youtube" aria-label="Biasly on YouTube" className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">▶</a></div></div>
        </div>
        <div className="border-t border-white/15"><div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-4 py-4 text-[8px] text-[#aaaba8] sm:flex-row sm:justify-between sm:px-6 lg:px-8"><span>© 2026 Biasly News. All rights reserved.</span><span>News, clearer.</span></div></div>
      </footer>
    </main>
  );
}
