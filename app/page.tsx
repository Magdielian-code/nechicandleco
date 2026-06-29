const navLinks = ["Home", "About", "Shop All", "Products", "Pages", "Blogs"];

const utilityIcons = [
  { label: "Search", path: "M16 16l4.5 4.5" },
  { label: "Account", path: "M16 15a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.46-8 5.5V24h16v-.5C24 19.46 20.42 17 16 17Z" },
  { label: "Wishlist", path: "M20.84 4.61A5.51 5.51 0 0 0 16 7.05a5.51 5.51 0 0 0-4.84-2.44A5.62 5.62 0 0 0 5.5 10.25C5.5 16.4 16 22.5 16 22.5S26.5 16.4 26.5 10.25a5.62 5.62 0 0 0-5.66-5.64Z" },
  { label: "Bag", path: "M8 9h16l-1.5 12h-13z" },
];

function Icon({ path, badge = 0 }: { path: string; badge?: number }) {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-800 shadow-sm backdrop-blur-sm">
      <svg viewBox="0 0 32 32" className="h-4.5 w-4.5 fill-none stroke-current stroke-[1.8]">
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
        {path.includes("M8 9h16l-1.5 12h-13z") ? (
          <path d="M11 9a5 5 0 0 1 10 0" strokeLinecap="round" strokeLinejoin="round" />
        ) : null}
      </svg>
      {badge > 0 ? (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-slate-950 px-1 text-[10px] font-semibold text-white">
          {badge}
        </span>
      ) : null}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4ecea] text-slate-900">
      <header className="border-b border-black/10 bg-[#d8b9b7] text-[13px] text-slate-800">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="text-base">☎</span>
              <span>+2146414547</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">✉</span>
              <span>Support@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-black/40 bg-[#e6cbc9] px-3 py-1.5 shadow-sm transition hover:bg-[#efdad9]">
              <span>🇺🇸</span>
              <span>USD</span>
              <span>▾</span>
            </button>
            <button className="flex items-center gap-2 border border-black/40 bg-[#e6cbc9] px-3 py-1.5 shadow-sm transition hover:bg-[#efdad9]">
              <span>🇬🇧</span>
              <span>English</span>
              <span>▾</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="relative z-10 border-b border-black/10 bg-white/96 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[15px] text-slate-700 lg:justify-start">
            {navLinks.map((link) => (
              <a key={link} href="#" className="flex items-center gap-1 transition hover:text-[#7b4d9d]">
                <span>{link}</span>
                <span className="text-[11px] text-slate-500">▾</span>
              </a>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center text-2xl font-semibold tracking-[0.22em] text-[#4e2a72] sm:text-3xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span className="relative">
              NECHI CANDLE CO
              <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#7b4d9d]/85" />
            </span>
          </a>

          <div className="flex items-center justify-center gap-2 lg:justify-end">
            {utilityIcons.map((icon) => (
              <Icon key={icon.label} path={icon.path} />
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section className="relative isolate overflow-hidden bg-[#4a4650] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.13),transparent_35%),radial-gradient(circle_at_18%_80%,rgba(255,190,120,0.18),transparent_24%),linear-gradient(180deg,rgba(29,24,32,0.18),rgba(18,16,20,0.52))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.20),transparent_25%,transparent_75%,rgba(0,0,0,0.18))]" />

          <div className="absolute left-[4%] top-[18%] h-64 w-64 rounded-full bg-[#8f6b8a]/30 blur-[120px]" />
          <div className="absolute right-[7%] top-[10%] h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

          <div className="mx-auto flex min-h-[calc(100vh-126px)] max-w-[1600px] items-center px-5 py-16 sm:px-8 lg:px-12">
            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative mt-10 h-[430px] w-full max-w-[760px] rounded-[32px] bg-[radial-gradient(circle_at_30%_28%,rgba(255,230,210,0.18),transparent_20%),radial-gradient(circle_at_50%_52%,rgba(255,255,255,0.06),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))] shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-[1px]">
                  <div className="absolute inset-x-0 bottom-0 h-[44%] rounded-b-[32px] bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.32))]" />
                  <div className="absolute left-[11%] bottom-[12%] h-[240px] w-[360px] rounded-[180px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,239,208,0.92),rgba(217,143,54,0.88)_12%,rgba(123,72,37,0.94)_36%,rgba(38,29,29,0.98)_72%)] shadow-[0_28px_36px_rgba(0,0,0,0.28)]" />
                  <div className="absolute left-[21%] bottom-[31%] h-[132px] w-[182px] rounded-[48%] bg-[radial-gradient(circle_at_50%_30%,rgba(255,245,224,0.92),rgba(248,183,51,0.85)_42%,rgba(255,126,34,0.22)_62%,transparent_75%)] blur-[1px]" />
                  <div className="absolute left-[26%] bottom-[53%] h-[122px] w-[78px] -rotate-[5deg] rounded-full bg-[radial-gradient(circle_at_50%_25%,#fff8dd,#ffcc67_46%,#f79c38_72%,rgba(255,122,26,0.15)_100%)] shadow-[0_0_28px_rgba(255,204,119,0.4)]" />
                  <div className="absolute left-[14%] bottom-[30%] h-[12px] w-[118px] rounded-full bg-[#a35d20]/45 blur-[10px]" />
                  <div className="absolute left-[24%] bottom-[28%] h-[60px] w-[60px] rounded-full bg-[#5f3323]/60 blur-[5px]" />
                  <div className="absolute left-[10%] bottom-[12%] h-[54px] w-[500px] rounded-[100%] bg-black/35 blur-[34px]" />
                  <div className="absolute left-[18%] bottom-[15%] h-[280px] w-[280px] rounded-full bg-[#3b282f]/25 blur-[40px]" />
                </div>
              </div>

              <div className="relative z-10 max-w-[760px] text-center lg:mx-auto lg:text-center">
                <p className="mb-4 text-sm uppercase tracking-[0.48em] text-[#ebd0df]">
                  New Collection
                </p>
                <h1
                  className="mx-auto max-w-[9ch] text-[clamp(3.4rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.03em] text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Luxury Aromatherapy Candles
                </h1>
                <p className="mx-auto mt-7 max-w-[52rem] text-sm leading-7 text-white/88 sm:text-base">
                  Indulge your senses with our handcrafted luxury aromatherapy candles. Each candle
                  is meticulously crafted using premium natural ingredients and essential oils,
                  creating a soothing ambiance that promotes relaxation and rejuvenation.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-[#7b4d9d] px-6 py-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8d60ad]"
                  >
                    Shop Now
                    <span className="text-lg">→</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border border-[#d9c4e7]/30 bg-white/8 px-6 py-4 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/14"
                  >
                    View Scents
                    <span>✦</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.06))]" />
        </section>
      </main>
    </div>
  );
}
