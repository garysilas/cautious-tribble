const iconPaths = [
  "M4 6h16M4 12h16M4 18h16",
  "m21 21-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
  "M6 3h12v18l-6-3-6 3V3Z",
  "M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "M12 17h.01M12 7a5 5 0 0 0-5 5v1a5 5 0 0 0 10 0v-1a5 5 0 0 0-5-5Z",
  "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
  "M7 10v9h10v-9M12 3v11m0-11 4 4m-4-4-4 4",
  "M14 3h7v7m0-7-9 9M5 5h5M5 5v14h14v-5",
  "M7 3v3m10-3v3M4 8h16M5 5h14v16H5V5Z",
  "M4 19V9m5 10V5m5 14v-7m5 7V3",
  "M20 13.5 13.5 20a2.12 2.12 0 0 1-3 0L4 13.5V4h9.5L20 10.5a2.12 2.12 0 0 1 0 3Z",
  "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0",
  "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
  "M4 12h16M12 4v16M5 5l14 14M19 5 5 19",
  "m5 12 4 4L19 6",
  "M5 12h.01M12 12h.01M19 12h.01",
];

const typeRows = [
  ["H1", "Page / Screen Title", "32px", "Bold", "1.2"],
  ["H2", "Section Title", "24px", "SemiBold", "1.3"],
  ["H3", "Card / Module Title", "20px", "SemiBold", "1.3"],
  ["H4", "Subheading", "16px", "Medium", "1.4"],
  ["Body Large", "Important content", "16px", "Regular", "1.6"],
  ["Body Medium", "Body text", "14px", "Regular", "1.6"],
  ["Body Small", "Supporting text", "13px", "Regular", "1.6"],
  ["Caption", "Labels, meta text", "11px", "Regular", "1.4"],
];

const swatches = [
  ["Primary", "#0A0A0D", "bg-[#0a0a0d]"],
  ["Text secondary", "#6F7280", "bg-[#6f7280]"],
  ["Surface", "#FFFFFF", "bg-white"],
];

const semanticSwatches = [
  ["Left bias", "#B42318", "bg-[#b42318]"],
  ["Center", "#E5E7EB", "bg-[#e5e7eb]"],
  ["Right bias", "#1D4ED8", "bg-[#1d4ed8]"],
];

const neutralSwatches = [
  ["BG primary", "#F7F7F5", "bg-[#f7f7f5]"],
  ["BG secondary", "#F0F0F2", "bg-[#f0f0f2]"],
  ["Border", "#E3E4E8", "bg-[#e3e4e8]"],
  ["Divider", "#E8E8EA", "bg-[#e8e8ea]"],
];

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-[8px] border border-[#e3e4e8] bg-white p-4 ${className}`}>{children}</section>;
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="border-b border-[#e3e4e8] pb-2 text-[11px] font-bold uppercase tracking-[-0.02em]">{children}</h2>;
}

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <path d={path} />
    </svg>
  );
}

function BiasMeter() {
  return (
    <div className="space-y-1.5">
      <div className="flex h-5 overflow-hidden rounded-[3px] text-[8px] font-semibold text-white">
        <span className="flex w-1/4 items-center justify-center bg-[#b42318]">Left 25%</span>
        <span className="flex w-1/2 items-center justify-center bg-[#e5e7eb] text-[#0a0a0d]">Center 50%</span>
        <span className="flex w-1/4 items-center justify-center bg-[#1d4ed8]">Right 25%</span>
      </div>
      <div className="flex justify-between text-[8px] text-[#6f7280]"><span>0%</span><span>50%</span><span>100%</span></div>
    </div>
  );
}

function Portrait() {
  return (
    <div className="relative h-full min-h-28 overflow-hidden rounded-[5px] bg-[linear-gradient(135deg,#1c2125_0%,#736a5a_42%,#162837_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(110deg,#101e31_0%,#17293d_45%,#0c1422_100%)]" />
      <div className="absolute left-[34%] top-[18%] h-[49%] w-[32%] rounded-[48%] bg-[#e4b194] shadow-[inset_-7px_-5px_0_rgba(110,58,42,.18)]" />
      <div className="absolute left-[30%] top-[9%] h-[26%] w-[42%] rotate-[-7deg] rounded-[58%_45%_30%_34%] bg-[#d9b27a]" />
      <div className="absolute left-[22%] bottom-[-18%] h-[55%] w-[58%] rounded-t-[50%] bg-[#162438]" />
      <div className="absolute left-[44%] bottom-[5%] h-[37%] w-[12%] bg-[#bd2631] [clip-path:polygon(50%_0,100%_24%,68%_100%,50%_100%,32%_100%,0_24%)]" />
      <span className="absolute right-2 top-2 grid size-4 place-items-center rounded-full border border-white/70 text-[8px] text-white">i</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] p-2 text-[#0a0a0d] sm:p-3 lg:p-4">
      <h1 className="sr-only">Biasly design system</h1>
      <div className="grid gap-2 lg:grid-cols-[.93fr_1.17fr]">
        <div className="grid gap-2">
          <Panel className="flex min-h-[218px] flex-col">
            <PanelTitle>Brand</PanelTitle>
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="text-[41px] font-bold leading-[.75] tracking-[-.09em]">biasly</div>
              <div className="mt-1 text-[14px] font-semibold tracking-[-.05em] text-[#6f7280]">News</div>
              <p className="mt-4 max-w-36 text-[11px] leading-[1.55] text-[#464854]">Balanced news coverage,<br />powered by AI.</p>
            </div>
          </Panel>
          <Panel>
            <PanelTitle>Colors</PanelTitle>
            <div className="mt-3 space-y-4">
              <div><p className="mb-2 text-[9px] font-semibold uppercase text-[#6f7280]">Primary</p><div className="grid grid-cols-3 gap-3">{swatches.map(([name, hex, color]) => <div key={name}><div className={`h-10 rounded-[4px] border border-[#e3e4e8] ${color}`} /><p className="mt-1 text-[7px] font-semibold uppercase">{name}</p><p className="text-[7px] text-[#6f7280]">{hex}</p></div>)}</div></div>
              <div><p className="mb-2 text-[9px] font-semibold uppercase text-[#6f7280]">Semantic</p><div className="grid grid-cols-3 gap-3">{semanticSwatches.map(([name, hex, color]) => <div key={name}><div className={`h-10 rounded-[4px] ${color}`} /><p className="mt-1 text-[7px] font-semibold uppercase">{name}</p><p className="text-[7px] text-[#6f7280]">{hex}</p></div>)}</div></div>
              <div><p className="mb-2 text-[9px] font-semibold uppercase text-[#6f7280]">Neutrals</p><div className="grid grid-cols-4 gap-3">{neutralSwatches.map(([name, hex, color]) => <div key={name}><div className={`h-8 rounded-[4px] border border-[#e3e4e8] ${color}`} /><p className="mt-1 text-[7px] font-semibold uppercase">{name}</p><p className="text-[7px] text-[#6f7280]">{hex}</p></div>)}</div></div>
            </div>
          </Panel>
        </div>

        <div className="grid gap-2">
          <Panel>
            <PanelTitle>Typography</PanelTitle>
            <div className="mt-3 grid grid-cols-[.78fr_1.22fr] gap-5">
              <div><p className="text-[9px] font-semibold uppercase text-[#6f7280]">Font family</p><p className="mt-1 text-[27px] font-semibold leading-none tracking-[-.06em]">Poppins</p><p className="mt-2 max-w-42 text-[9px] leading-[1.45] text-[#464854]">Poppins is a modern geometric sans-serif typeface that ensures clarity and excellent readability.</p></div>
              <div className="min-w-0"><div className="grid grid-cols-[.55fr_1.2fr_.48fr_.55fr_.55fr] gap-x-2 text-[7px] font-semibold uppercase text-[#6f7280]"><span>Style</span><span></span><span>Size</span><span>Weight</span><span>Line height</span></div><div className="mt-2 space-y-1.5">{typeRows.map(([style, use, size, weight, line]) => <div key={style} className="grid grid-cols-[.55fr_1.2fr_.48fr_.55fr_.55fr] gap-x-2 text-[8px] leading-4"><span className="font-semibold text-[#0a0a0d]">{style}</span><span className="truncate text-[#6f7280]">{use}</span><span>{size}</span><span>{weight}</span><span>{line}</span></div>)}</div></div>
            </div>
          </Panel>
          <Panel>
            <PanelTitle>UI elements</PanelTitle>
            <div className="mt-3 space-y-3 text-[8px]">
              <div className="grid grid-cols-[42px_repeat(4,minmax(0,1fr))] items-center gap-2"><span className="font-semibold">Buttons</span><span>Default</span><span>Hover</span><span>Outline</span><span>Disabled</span></div>
              <div className="grid grid-cols-[42px_repeat(4,minmax(0,1fr))] items-center gap-2"><span className="font-medium">Primary</span><button className="h-7 rounded-[4px] bg-[#0a0a0d] px-2 text-[8px] font-medium text-white">Button</button><button className="h-7 rounded-[4px] bg-[#272832] px-2 text-[8px] font-medium text-white">Button</button><button className="h-7 rounded-[4px] border border-[#d4d5db] px-2 text-[8px] font-medium">Button</button><button disabled className="h-7 rounded-[4px] bg-[#e5e5e8] px-2 text-[8px] text-[#92949e]">Button</button></div>
              <div className="grid grid-cols-[42px_repeat(4,minmax(0,1fr))] items-center gap-2"><span className="font-medium">Secondary</span><button className="h-7 rounded-[4px] border border-[#d4d5db] px-2 text-[8px]">Button</button><button className="h-7 rounded-[4px] bg-[#f0f0f2] px-2 text-[8px]">Button</button><button className="h-7 rounded-[4px] border border-[#d4d5db] px-2 text-[8px]">Button</button><button disabled className="h-7 rounded-[4px] bg-[#e5e5e8] px-2 text-[8px] text-[#92949e]">Button</button></div>
              <div className="grid grid-cols-[42px_repeat(4,minmax(0,1fr))] items-center gap-2"><span className="font-medium">Text</span><button className="text-left text-[8px] font-semibold">Button</button><button className="text-left text-[8px] font-semibold text-[#1d4ed8]">Button</button><span className="text-center text-[#6f7280]">—</span><span className="text-center text-[#6f7280]">—</span></div>
              <div className="border-t border-[#e8e8ea] pt-3"><p className="mb-2 text-[8px] font-semibold uppercase">Chip / category</p><div className="flex flex-wrap gap-2">{["World", "IPL", "Business & Markets", "More"].map((label) => <button key={label} className="inline-flex h-6 items-center gap-2 rounded-[4px] bg-[#f0f0f2] px-2 text-[8px] font-medium">{label}<span className="text-[12px] leading-none">+</span></button>)}</div></div>
              <div className="border-t border-[#e8e8ea] pt-3"><p className="mb-2 text-[8px] font-semibold uppercase">Bias meter</p><BiasMeter /></div>
            </div>
          </Panel>
        </div>
      </div>

      <div className="mt-2 grid gap-2 lg:grid-cols-[.95fr_1.2fr]">
        <Panel>
          <PanelTitle>Icons</PanelTitle>
          <div className="mt-4 grid grid-cols-6 gap-x-5 gap-y-5 px-2 text-[#11131a]">{iconPaths.map((path, index) => <div key={`${path}-${index}`} className="grid place-items-center"><Icon path={path} /></div>)}</div>
          <p className="mt-5 text-[9px] text-[#6f7280]">Line style&nbsp; · &nbsp;2px stroke&nbsp; · &nbsp;Rounded caps</p>
        </Panel>
        <Panel>
          <PanelTitle>Card example</PanelTitle>
          <article className="mt-3 grid gap-3 rounded-[6px] border border-[#d9dade] p-2.5 sm:grid-cols-[38%_1fr]">
            <Portrait />
            <div className="min-w-0"><p className="text-[8px] text-[#6f7280]">Politics&nbsp; · &nbsp;United States</p><h3 className="mt-1 text-[12px] font-semibold leading-[1.35] tracking-[-.025em]">Trump Sends Iran Revised Peace Proposal With Tougher Terms: Report</h3><p className="mt-2 text-[8px] leading-[1.55] text-[#565965]">The proposal includes stricter limits on uranium enrichment and enhanced verification measures.</p><div className="mt-3"><BiasMeter /></div><div className="mt-3 flex gap-4 text-[8px] text-[#565965]"><span className="inline-flex items-center gap-1"><span className="font-bold">◷</span> 2h ago</span><span className="inline-flex items-center gap-1"><span className="font-bold">▱</span> 12 min read</span></div></div>
          </article>
        </Panel>
      </div>

      <div className="mt-2 grid gap-2 lg:grid-cols-[.95fr_.92fr_.55fr_.64fr]">
        <Panel><PanelTitle>Spacing system <span className="font-normal normal-case text-[#6f7280]">(4px base unit)</span></PanelTitle><div className="mt-5 flex items-end justify-between gap-2 px-1">{[4, 8, 16, 24, 32, 40, 64].map((value) => <div key={value} className="flex flex-col items-center gap-1"><div className="w-6 bg-[#cdd5ff]" style={{ height: `${Math.max(value * 0.58, 7)}px` }} /><span className="text-[8px]">{value}px</span></div>)}</div><p className="mt-6 text-[9px] text-[#6f7280]">Consistent spacing scale based on 4px base unit</p></Panel>
        <Panel><PanelTitle>Grid system</PanelTitle><div className="mt-4 grid grid-cols-[1fr_58px] items-center gap-3"><div className="grid h-24 grid-cols-12 gap-1 bg-[#f5f5f7] px-2">{Array.from({ length: 12 }).map((_, index) => <div key={index} className="bg-[#dedbfa]" />)}</div><div className="space-y-2 text-[8px] leading-[1.25] text-[#464854]"><p><b>Container</b><br />1280px</p><p><b>Columns</b><br />12</p><p><b>Gutter</b><br />24px</p><p><b>Margin</b><br />24px</p></div></div></Panel>
        <Panel><PanelTitle>Shadows</PanelTitle><div className="mt-4 space-y-3">{[["Small", "shadow-[0_1px_2px_rgba(10,10,13,.05)]", "0px 1px 2px"], ["Medium", "shadow-[0_4px_12px_rgba(10,10,13,.08)]", "0px 4px 12px"], ["Large", "shadow-[0_12px_24px_rgba(10,10,13,.12)]", "0px 12px 24px"]].map(([label, shadow, detail]) => <div key={label} className="flex items-center gap-3"><div className={`size-8 rounded-[4px] bg-white ${shadow}`} /><p className="text-[8px]"><b className="block uppercase">{label}</b>{detail}</p></div>)}</div></Panel>
        <Panel><PanelTitle>Border radius</PanelTitle><div className="mt-4 space-y-3">{[["Small", "rounded-[4px]", "4px"], ["Medium", "rounded-[8px]", "8px"], ["Large", "rounded-[12px]", "12px"], ["Full", "rounded-full", "9999px"]].map(([label, radius, value]) => <div key={label} className="flex items-center gap-3"><div className={`size-6 border border-[#e3e4e8] bg-white ${radius}`} /><p className="text-[8px]"><b className="mr-4 uppercase">{label}</b>{value}</p></div>)}</div></Panel>
      </div>

      <footer className="mt-2 grid min-h-20 items-center gap-4 rounded-[6px] bg-[linear-gradient(110deg,#15161b,#202126)] px-5 py-4 text-white sm:grid-cols-[auto_1fr_auto_auto]">
        <div><div className="text-[20px] font-bold leading-none tracking-[-.08em]">biasly</div><div className="ml-5 text-[8px] font-medium text-[#d0d1d6]">News</div></div><p className="max-w-28 text-[8px] leading-[1.45] text-[#f2f2f3]">Balanced news coverage,<br />powered by AI.</p><p className="text-[8px] text-[#a8aab1]">Design System v1.0</p><p className="text-[8px] text-[#f2f2f3] sm:text-right">Stay consistent. Stay unbiased.</p>
      </footer>
    </main>
  );
}
