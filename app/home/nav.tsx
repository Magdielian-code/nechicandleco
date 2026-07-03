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

export function Nav() {
    return (
        <>
            <header className="border-b border-black/10 bg-[#d8b9b7] text-[13px] text-slate-800">
                <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12">
                    <div className="flex flex-wrap items-center gap-5">
                        <div className="flex items-center gap-2">
                            <span className="text-base">☎</span>
                            <span>+2349060222307</span>
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
                            <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#7b4d9d]/85" />
                        </span>
                    </a>

                    <div className="flex items-center justify-center gap-2 lg:justify-end">
                        {utilityIcons.map((icon) => (
                            <Icon key={icon.label} path={icon.path} />
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}