export function Hero() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-[#4a4650] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.13),transparent_35%),radial-gradient(circle_at_18%_80%,rgba(255,190,120,0.18),transparent_24%),linear-gradient(180deg,rgba(29,24,32,0.18),rgba(18,16,20,0.52))]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.20),transparent_25%,transparent_75%,rgba(0,0,0,0.18))]" />

                <div className="absolute left-[4%] top-[18%] h-64 w-64 rounded-full bg-[#8f6b8a]/30 blur-[120px]" />
                <div className="absolute right-[7%] top-[10%] h-72 w-72 rounded-full bg-white/10 blur-[140px]" />

                <div className="mx-auto flex min-h-[calc(100vh-126px)] max-w-[1600px] items-center px-5 py-16 sm:px-8 lg:px-12">
                    <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                        <div className="relative flex justify-center lg:justify-start">
                            <div className="relative mt-10 h-107.5 w-full max-w-190 rounded-4xl bg-[radial-gradient(circle_at_30%_28%,rgba(255,230,210,0.18),transparent_20%),radial-gradient(circle_at_50%_52%,rgba(255,255,255,0.06),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))] shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-[1px]">
                                <div className="absolute inset-x-0 bottom-0 h-[44%] rounded-b-4xl bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.32))]" />
                                <div className="absolute left-[11%] bottom-[12%] h-60 w-90 rounded-[180px] bg-[radial-gradient(circle_at_50%_35%,rgba(255,239,208,0.92),rgba(217,143,54,0.88)_12%,rgba(123,72,37,0.94)_36%,rgba(38,29,29,0.98)_72%)] shadow-[0_28px_36px_rgba(0,0,0,0.28)]" />
                                <div className="absolute left-[21%] bottom-[31%] h-33 w-45.5 rounded-[48%] bg-[radial-gradient(circle_at_50%_30%,rgba(255,245,224,0.92),rgba(248,183,51,0.85)_42%,rgba(255,126,34,0.22)_62%,transparent_75%)] blur-[1px]" />
                                <div className="absolute left-[26%] bottom-[53%] h-30.5 w-19.5 rotate-[-5deg] rounded-full bg-[radial-gradient(circle_at_50%_25%,#fff8dd,#ffcc67_46%,#f79c38_72%,rgba(255,122,26,0.15)_100%)] shadow-[0_0_28px_rgba(255,204,119,0.4)]" />
                                <div className="absolute left-[14%] bottom-[30%] h-3 w-29.5 rounded-full bg-[#a35d20]/45 blur-[10px]" />
                                <div className="absolute left-[24%] bottom-[28%] h-15 w-15 rounded-full bg-[#5f3323]/60 blur-[5px]" />
                                <div className="absolute left-[10%] bottom-[12%] h-13.5 w-125 rounded-[100%] bg-black/35 blur-[34px]" />
                                <div className="absolute left-[18%] bottom-[15%] h-70 w-70 rounded-full bg-[#3b282f]/25 blur-2xl" />
                            </div>
                        </div>

                        <div className="relative z-10 max-w-190 text-center lg:mx-auto lg:text-center">
                            <p className="mb-4 text-sm uppercase tracking-[0.48em] text-[#ebd0df]">New Collection</p>
                            <h1
                                className="mx-auto max-w-[9ch] text-[clamp(3.4rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.03em] text-white"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                Luxury Aromatherapy Candles
                            </h1>
                            <p className="mx-auto mt-7 max-w-208 text-sm leading-7 text-white/88 sm:text-base">
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

            <section className="bg-[#f4ecea] py-20 sm:py-28 lg:py-32">
                <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#7b4d9d]/70">Top Categories</p>
                        <h2
                            className="text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] tracking-[-0.02em] text-slate-950"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Signature Scent Selections
                        </h2>
                        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#7b4d9d]" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 md:h-[min(72vh,760px)] lg:gap-8">
                        <div className="h-full min-h-0 md:col-start-1 md:row-span-2 md:row-start-1">
                            <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative h-full w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">
                                    <img
                                        src="/glass-candle.jpg"
                                        alt="Jar Candle"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/50 to-transparent px-6 py-6">
                                    <p className="rounded bg-white/95 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 backdrop-blur-sm">
                                        Jar Candle
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-full min-h-0 md:col-start-2 md:row-start-2">
                            <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative h-full w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">
                                    <img
                                        src="/glass-candle.jpg"
                                        alt="Glass Candle"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/50 to-transparent px-6 py-6">
                                    <p className="rounded bg-white/95 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 backdrop-blur-sm">
                                        Glass Candle
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex h-full min-h-0 flex-col gap-6 md:col-start-3 md:row-span-2">
                            <div className="flex-1 min-h-0">
                                <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <div className="relative h-full w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">
                                        <img
                                            src="/geometric-candle.jpg"
                                            alt="Geometric Candles"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/50 to-transparent px-6 py-6">
                                        <p className="rounded bg-white/95 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 backdrop-blur-sm">
                                            Geometric Candles
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 min-h-0">
                                <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <div className="relative h-full w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-200">
                                        <img
                                            src="/ceramic-candle.jpg"
                                            alt="Ceramic Candle"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/50 to-transparent px-6 py-6">
                                        <p className="rounded bg-white/95 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 backdrop-blur-sm">
                                            Ceramic Candle
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 bg-[#7b4d9d] px-8 py-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(123,77,157,0.2)] transition hover:-translate-y-0.5 hover:bg-[#8d60ad] hover:shadow-[0_12px_36px_rgba(123,77,157,0.28)]"
                        >
                            Explore All Collections
                            <span className="text-lg">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}