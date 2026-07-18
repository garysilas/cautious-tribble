import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { notFound } from "next/navigation";

type Distribution = {
  left: number;
  center: number;
  right: number;
};

type RelatedStory = {
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
};

type ArticleDetail = {
  category: string;
  region: string;
  title: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  distribution: Distribution;
  sources: number;
  body: string[];
  summary: string[];
  sourceBreakdown: { name: string; leaning: "Left" | "Center" | "Right" }[];
  relatedStories: RelatedStory[];
};

const detailArticles: Record<string, ArticleDetail> = {
  "peace-proposal": {
    category: "Politics",
    region: "United States",
    title: "Trump Sends Iran Revised Peace Proposal With Tougher Terms: Report",
    author: "David Morgan",
    publishedAt: "May 31, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "American flag in warm sunlight",
    imageCaption: "President Donald Trump in the Cabinet Room of the White House. Washington, D.C., May 30, 2026.",
    distribution: { left: 20, center: 31, right: 49 },
    sources: 12,
    body: [
      "The Trump administration has sent Iran a revised nuclear deal proposal that includes tougher terms on uranium enrichment and stronger verification measures, according to a report published Saturday.",
      "The new proposal, delivered through intermediaries in Oman, requires Iran to halt all uranium enrichment on its soil and ship its stockpile of enriched uranium out of the country. It also demands unrestricted access for international inspectors to all Iranian nuclear facilities, including military sites.",
      "This is a take-it-or-leave-it proposal, a senior administration official told the Wall Street Journal. The president wants a deal, but he will not accept a weak agreement that puts America or our allies at risk.",
      "Iran has not yet officially responded to the proposal. However, Iranian Foreign Minister Hossein Amir-Abdollahian said last week that any deal must respect Iran's right to peaceful nuclear energy and include the lifting of all U.S. sanctions.",
      "The revised proposal comes after several rounds of indirect talks between U.S. and Iranian officials failed to produce a breakthrough. The Trump administration has warned that if diplomacy fails, it is prepared to take other action to prevent Iran from obtaining a nuclear weapon.",
      "European allies have urged both sides to continue negotiations. We believe diplomacy is still the best path forward, said a spokesperson for the EU's foreign policy chief.",
      "Israel, which has long opposed the 2015 nuclear deal with Iran, praised the Trump administration's tougher stance. This is the kind of leadership that was missing in the past, said Israeli Prime Minister Benjamin Netanyahu in a statement.",
      "The fate of the proposal now rests with Iran, as global attention remains focused on whether a new nuclear agreement can be reached — or if tensions will escalate further.",
    ],
    summary: [
      "The Trump administration has sent Iran a revised nuclear deal proposal with tougher terms, including a complete halt to uranium enrichment and the removal of enriched uranium stockpiles.",
      "The proposal also demands unrestricted inspector access to all nuclear sites, including military facilities.",
      "Iran has not responded officially but says any deal must respect its right to peaceful nuclear energy and include sanctions relief.",
      "The U.S. warns it is prepared to take other action if diplomacy fails, while European allies urge continued negotiations.",
      "Israel supports the tougher stance, praising the administration's determination to prevent Iran from acquiring nuclear weapons.",
    ],
    sourceBreakdown: [
      { name: "Fox News", leaning: "Right" },
      { name: "The Wall Street Journal", leaning: "Center" },
      { name: "Reuters", leaning: "Center" },
      { name: "BBC", leaning: "Center" },
      { name: "CNN", leaning: "Left" },
      { name: "The New York Times", leaning: "Left" },
      { name: "The Washington Post", leaning: "Center" },
      { name: "Newsmax", leaning: "Right" },
    ],
    relatedStories: [
      { title: "Iran Says It Will Not Negotiate Under Maximum Pressure", category: "World · Middle East", date: "May 29, 2026 · 8 min read", image: "https://images.unsplash.com/photo-1552990763-2b3a5be1b4dd?auto=format&fit=crop&w=420&q=80", imageAlt: "Iranian flag on a pole" },
      { title: "Bipartisan Group Urges Diplomacy With Iran", category: "Politics · United States", date: "May 28, 2026 · 6 min read", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=420&q=80", imageAlt: "Federal building facade" },
      { title: "US Sanctions More Iranian Entities Over Nuclear Program", category: "Politics · United States", date: "May 28, 2026 · 8 min read", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=420&q=80", imageAlt: "City skyline in the Middle East" },
      { title: "What’s in the 2015 Iran Nuclear Deal?", category: "World · Middle East", date: "May 25, 2026 · 10 min read", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=420&q=80", imageAlt: "Globe viewed from space" },
      { title: "Oman Hosts Another Round of US-Iran Nuclear Talks", category: "World · Middle East", date: "May 27, 2026 · 8 min read", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=420&q=80", imageAlt: "Omani flag outside a building" },
      { title: "Israel Reaffirms Red Line Over Iranian Nuclear Program", category: "World · Middle East", date: "May 24, 2026 · 6 min read", image: "https://images.unsplash.com/photo-1542743408-218cc173cda5?auto=format&fit=crop&w=420&q=80", imageAlt: "Diplomatic meeting table" },
    ],
  },
};

const topics = ["World Cup", "IPL", "Social Media", "Business & Markets", "Health & Medicine", "Soccer", "Artificial Intelligence", "Arsenal FC", "Extreme Weather & Disasters"];

function MenuIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function ChevronIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m9 18 6-6-6-6" /></svg>;
}

function InfoIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="8.5" /><path d="M12 10.8v5M12 8h.01" /></svg>;
}

function BookmarkIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6.5 4.5h11v15l-5.5-3.6-5.5 3.6v-15Z" /></svg>;
}

function ShareIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="18" cy="5" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="19" r="2" /><path d="m8 11 8-5M8 13l8 5" /></svg>;
}

function MoreIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.4" /><circle cx="12" cy="12" r="1.4" /><circle cx="19" cy="12" r="1.4" /></svg>;
}

function Brand() {
  return <Link href="/" className="flex items-center leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2" aria-label="Biasly home"><span className="text-[21px] font-bold tracking-[-0.095em]">biasly</span><span className="ml-1 self-end pb-[1px] text-[7px] font-medium tracking-[-0.04em] text-[var(--ink-muted)]">News</span></Link>;
}

function DistributionMeter({ distribution, compact = false }: { distribution: Distribution; compact?: boolean }) {
  const labelClass = compact ? "text-[7px]" : "text-[8px]";
  return <div className="overflow-hidden rounded-[2px] border border-[#cdd0d7] font-semibold tracking-[-0.02em]"><div className={compact ? "flex h-3.5" : "flex h-4"}><span className={`flex items-center justify-center bg-[var(--left)] text-white ${labelClass}`} style={{ width: `${distribution.left}%` }}>{compact ? `${distribution.left}%` : `Left ${distribution.left}%`}</span><span className={`flex items-center justify-center bg-[var(--center)] text-[var(--ink)] ${labelClass}`} style={{ width: `${distribution.center}%` }}>{compact ? `${distribution.center}%` : `Center ${distribution.center}%`}</span><span className={`flex items-center justify-center bg-[var(--right)] text-white ${labelClass}`} style={{ width: `${distribution.right}%` }}>{compact ? `${distribution.right}%` : `Right ${distribution.right}%`}</span></div></div>;
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-[5px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)]"><div className="flex items-center justify-between"><h2 className="text-[12px] font-bold tracking-[-0.035em]">{title}</h2><span className="grid size-4 place-items-center text-[#383a40]"><InfoIcon /></span></div>{children}</section>;
}

function Footer() {
  return <footer className="mt-10 bg-[#1b1c1c] text-white"><div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_2fr] lg:px-8"><div><Brand /><p className="mt-4 max-w-36 text-[9px] leading-[1.6] text-[#c1c2bf]">Balanced news coverage,<br />powered by AI.</p></div><div><h2 className="text-[9px] font-semibold">Company</h2><ul className="mt-3 space-y-2 text-[8px] text-[#c1c2bf]"><li>About</li><li>Careers</li><li>Press</li><li>Contact</li></ul></div><div><h2 className="text-[9px] font-semibold">Help</h2><ul className="mt-3 space-y-2 text-[8px] text-[#c1c2bf]"><li>Help Center</li><li>Guides</li><li>Privacy Policy</li><li>Terms of Service</li></ul></div><div><h2 className="text-[9px] font-semibold">Connect</h2><div className="mt-3 flex gap-3 text-[#dededb]"><span className="grid size-4 place-items-center rounded border border-[#555] text-[8px]">in</span><span className="grid size-4 place-items-center rounded border border-[#555] text-[8px]">f</span><span className="grid size-4 place-items-center rounded border border-[#555] text-[8px]">◎</span></div></div></div><div className="mx-auto max-w-[1280px] border-t border-[#3c3d3d] px-4 py-4 text-[8px] text-[#a7a8a5] sm:px-6 lg:px-8">© 2026 Biasly News. All rights reserved.</div></footer>;
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = detailArticles[slug];

  if (!article) notFound();

  return <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]"><div className="bg-[#171818] text-[#e7e7e5]"><div className="mx-auto flex h-6 max-w-[1280px] items-center justify-between px-4 text-[8px] sm:px-6 lg:px-8"><div className="flex items-center gap-3 text-[#b8b8b4]"><span className="hidden sm:inline">Browser Extension</span><span>Theme: <button className="text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Light</button> <button className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Dark</button> <button className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white">Auto</button></span></div><div className="flex items-center gap-3 text-[#c9c9c5]"><span className="hidden md:inline">Monday, June 1, 2026</span><span className="hidden sm:inline">Set Location</span><span>International Edition⌄</span></div></div></div><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-[64px] max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:px-8"><button className="grid size-8 place-items-center rounded text-[var(--ink)] hover:bg-[#f0f0ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="Open navigation"><span className="size-5"><MenuIcon /></span></button><Brand /><nav aria-label="Primary navigation" className="ml-5 hidden h-full items-center gap-6 text-[10px] font-medium text-[#25262b] md:flex"><Link className="hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" href="/">Home</Link><span>For You</span><span>Local</span><span>Blindspot</span></nav><div className="ml-auto flex items-center gap-2"><button className="h-8 rounded-[3px] bg-[var(--ink)] px-4 text-[9px] font-semibold text-white transition hover:bg-[#2e3037] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2">Subscribe</button><Show when="signed-out"><SignUpButton><button className="hidden h-8 rounded-[3px] border border-[#bfc1c7] px-3 text-[9px] font-semibold hover:bg-[#f5f5f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2 sm:block">Sign up</button></SignUpButton><SignInButton><button className="hidden h-8 rounded-[3px] border border-[#bfc1c7] px-3 text-[9px] font-semibold hover:bg-[#f5f5f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2 sm:block">Login</button></SignInButton></Show><Show when="signed-in"><UserButton /></Show></div></div></header><nav aria-label="Topics" className="border-b border-[var(--border)] bg-[#f8f8f7]"><div className="mx-auto flex h-10 max-w-[1280px] items-center gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:px-8"><button className="sticky left-0 grid size-5 shrink-0 place-items-center bg-[#f8f8f7] text-[#5c5e66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="Browse topics"><span className="size-4 rotate-180"><ChevronIcon /></span></button>{topics.map((topic) => <span key={topic} className="shrink-0 rounded-[3px] border border-[#d9dadd] bg-[#ededeb] px-2.5 py-1 text-[8px] font-medium text-[#2d2f35]">{topic} <span className="ml-1 font-bold">+</span></span>)}<button className="ml-auto grid size-5 shrink-0 place-items-center bg-[#f8f8f7] text-[#5c5e66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="More topics"><span className="size-4"><ChevronIcon /></span></button></div></nav><div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8"><div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8"><article><p className="text-[9px] font-semibold tracking-[-0.015em] text-[#30323a]">{article.category} <span className="text-[#91939c]">·</span> {article.region}</p><h1 className="mt-1.5 max-w-[760px] text-[25px] font-bold leading-[1.14] tracking-[-0.06em] sm:text-[32px]">{article.title}</h1><div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[8px] text-[#5d6069]"><span>By <strong className="font-semibold text-[#2d2f35]">{article.author}</strong></span><span>·</span><span>{article.publishedAt}</span><span>·</span><span>{article.readTime}</span><div className="ml-1 flex items-center gap-1.5 text-[#41434b]"><button className="flex items-center gap-1 hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="Save article"><span className="size-3.5"><BookmarkIcon /></span><span className="hidden sm:inline">Save</span></button><button className="flex items-center gap-1 hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="Share article"><span className="size-3.5"><ShareIcon /></span><span className="hidden sm:inline">Share</span></button><button className="grid size-5 place-items-center hover:text-[var(--right)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]" aria-label="More article options"><span className="size-3.5"><MoreIcon /></span></button></div></div><figure className="mt-4"><div className="aspect-[16/9] overflow-hidden rounded-[4px] bg-[#d8d8d3]"><img className="h-full w-full object-cover" src={article.image} alt={article.imageAlt} width="1600" height="900" /></div><figcaption className="mt-1 text-[7px] leading-[1.4] text-[#6f7179]">{article.imageCaption} <span className="text-[#9a9ca2]">· Photo: Archive News/Getty Images</span></figcaption></figure><section className="mt-5 rounded-[4px] border border-[var(--border)] bg-white p-3.5" aria-labelledby="distribution-heading"><div className="flex items-center justify-between"><h2 id="distribution-heading" className="text-[10px] font-bold tracking-[-0.035em]">Bias Distribution <span className="ml-1 inline-block size-3 align-[-2px]"><InfoIcon /></span></h2></div><div className="mt-3"><DistributionMeter distribution={article.distribution} /></div><p className="mt-2 text-[8px] font-medium text-[#45474f]">{article.sources} sources</p></section><div className="mt-6 max-w-[780px] text-[11px] leading-[1.65] text-[#25272d]"><p className="border-l-2 border-[#1f2125] pl-3 font-medium text-[#34363c]">The Trump administration has sent Iran a revised nuclear deal proposal with tougher terms on uranium enrichment and stronger verification measures, according to a report published Saturday.</p>{article.body.slice(1).map((paragraph) => <p key={paragraph} className="mt-4">{paragraph}</p>)}</div><section className="mt-8" aria-labelledby="related-heading"><h2 id="related-heading" className="text-[12px] font-bold tracking-[-0.035em]">Related Stories</h2><div className="mt-3 grid gap-x-4 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">{article.relatedStories.map((story) => <article key={story.title} className="flex gap-2.5"><img className="size-[54px] shrink-0 rounded-[3px] object-cover" src={story.image} alt={story.imageAlt} width="108" height="108" /><div><p className="text-[7px] font-medium text-[#73757d]">{story.category}</p><h3 className="mt-0.5 text-[9px] font-bold leading-[1.25] tracking-[-0.025em]">{story.title}</h3><p className="mt-1 text-[7px] text-[#8a8c93]">{story.date}</p></div></article>)}</div></section></article><aside className="space-y-3" aria-label="Article analysis"><Panel title="Bias Analysis"><p className="mt-3 text-[8px] font-medium text-[#565861]">Overall Bias</p><p className="mt-0.5 text-[18px] font-bold tracking-[-0.05em] text-[var(--right)]">Right {article.distribution.right}%</p><p className="mt-0.5 text-[7px] text-[#686a72]">Based on 12 balanced sources</p><div className="mt-4 space-y-2 text-[8px]"><div className="grid grid-cols-[36px_28px_1fr] items-center gap-2"><span>Left</span><span className="font-bold text-[var(--left)]">{article.distribution.left}%</span><span className="h-1 rounded-full bg-[#f3e3e2]"><span className="block h-full rounded-full bg-[var(--left)]" style={{ width: `${article.distribution.left}%` }} /></span></div><div className="grid grid-cols-[36px_28px_1fr] items-center gap-2"><span>Center</span><span className="font-bold">{article.distribution.center}%</span><span className="h-1 rounded-full bg-[#ececef]"><span className="block h-full rounded-full bg-[#84878e]" style={{ width: `${article.distribution.center}%` }} /></span></div><div className="grid grid-cols-[36px_28px_1fr] items-center gap-2"><span>Right</span><span className="font-bold text-[var(--right)]">{article.distribution.right}%</span><span className="h-1 rounded-full bg-[#e2e9fb]"><span className="block h-full rounded-full bg-[var(--right)]" style={{ width: `${article.distribution.right}%` }} /></span></div></div><p className="mt-4 text-[8px] leading-[1.55] text-[#4b4d55]">Our analysis is based on the political leaning of the publications and how the story is framed. Sources are weighted by reliability and recency.</p><button className="mt-3 h-7 w-full rounded-[3px] border border-[#bfc1c7] text-[8px] font-semibold hover:bg-[#f5f5f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]">How We Analyze Bias</button></Panel><Panel title="AI Summary"><p className="mt-2 text-[7px] text-[#74767d]">Generated May 31, 2026 · 3 min read</p><ul className="mt-3 space-y-2 pl-3 text-[8px] leading-[1.5] text-[#313339]">{article.summary.map((item) => <li key={item} className="list-disc pl-0.5">{item}</li>)}</ul><p className="mt-4 text-[7px] text-[#74767d]">AI summaries can make mistakes.</p><button className="mt-3 h-7 rounded-[3px] border border-[#bfc1c7] px-3 text-[8px] font-semibold hover:bg-[#f5f5f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]">Provide Feedback</button></Panel><Panel title="Source Breakdown"><p className="mt-2 text-[8px] font-medium text-[#55575e]">{article.sources} Total Sources</p><div className="mt-3"><DistributionMeter distribution={article.distribution} compact /></div><div className="mt-4"><div className="flex justify-between text-[7px] font-semibold text-[#73757d]"><span>Top Sources</span><span>Bias</span></div><ul className="mt-2 space-y-1.5">{article.sourceBreakdown.map((source) => <li key={source.name} className="flex items-center justify-between text-[8px]"><span>{source.name}</span><span className={source.leaning === "Left" ? "font-semibold text-[var(--left)]" : source.leaning === "Right" ? "font-semibold text-[var(--right)]" : "text-[#5c5e66]"}>{source.leaning}</span></li>)}</ul></div><button className="mt-4 h-7 w-full rounded-[3px] border border-[#bfc1c7] text-[8px] font-semibold hover:bg-[#f5f5f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)]">View All Sources</button></Panel></aside></div><section className="mt-10 rounded-[4px] border border-[var(--border)] bg-white px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6"><div><h2 className="text-[12px] font-bold tracking-[-0.035em]">Stay Informed. Stay Balanced.</h2><p className="mt-1 text-[8px] text-[#696b72]">Get the top stories and bias analysis delivered to your inbox.</p></div><div className="mt-3 flex sm:mt-0"><input className="h-8 min-w-0 flex-1 rounded-l-[3px] border border-[#c9cbd0] bg-white px-3 text-[8px] outline-none placeholder:text-[#92949b] focus:border-[var(--right)] sm:w-44" aria-label="Email address" placeholder="Enter your email" type="email" /><button className="h-8 rounded-r-[3px] bg-[var(--ink)] px-4 text-[8px] font-semibold text-white hover:bg-[#2e3037] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--right)] focus-visible:ring-offset-2">Subscribe</button></div></section></div><Footer /></main>;
}
