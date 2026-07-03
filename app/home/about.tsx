export function About() {
    return (
        <section className="bg-[#f8f4f2] py-20 sm:py-24 lg:py-28">
            <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-12">
                <div className="max-w-170">
                    <p
                        className="mb-4 text-[17px] font-medium tracking-[0.02em] text-slate-700"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        About Us
                    </p>

                    <h2
                        className="max-w-[11ch] text-[clamp(2.8rem,4.6vw,4.6rem)] leading-[0.9] tracking-[-0.045em] text-slate-950"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Crafting Moments Of Magic: The Nechi Story
                    </h2>

                    <div className="mt-5 h-px w-16 bg-slate-800" />

                    <p className="mt-5 max-w-155 text-[15px] leading-7 text-slate-600">
                        At NechiCandleco, we believe in the transformative power of candles to elevate everyday
                        moments into extraordinary experiences. Our passion for crafting high-quality candles
                        with meticulous attention to detail stems from a deep appreciation for the art of scent
                        and ambiance. With a commitment to sustainability and ethically sourced ingredients, we
                        strive to create products that not only delight the senses but also respect the
                        environment and the communities we serve.
                    </p>

                    <div className="mt-10 border-t border-dashed border-[#d9c0ba] pt-8">
                        <div className="grid gap-7 sm:grid-cols-2">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e7c8c4] text-slate-950">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path d="M11.5 2.5v6h-1v1.2a5 5 0 0 0-4 4.9V20h11v-5.4a5 5 0 0 0-4-4.9V9.5h-1v-6h-1zM9 5.5h6v2h-6v-2zm.4 6.2h5.2a3.8 3.8 0 0 1 3 3.7V18H6.4v-2.6a3.8 3.8 0 0 1 3-3.7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[19px] font-medium text-slate-950"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Crafting Quality
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">Premium quality candles.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e7c8c4] text-slate-950">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path d="M12 3 13.6 7l4.4.3-3.4 2.9 1.1 4.3L12 12.8 8.3 14.5l1.1-4.3L6 7.3 10.4 7 12 3zm-.5 12h1v6h-1v-6z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[19px] font-medium text-slate-950"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Passion For Scen
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">Passion for captivating scents.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e7c8c4] text-slate-950">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path d="M12 2c2.3 0 4 2 4 4.5 0 1.7-.8 3.1-2 4v2h2v2H8v-2h2v-2c-1.2-.9-2-2.3-2-4C8 4 9.7 2 12 2zm-1 11h2v9h-2v-9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[19px] font-medium text-slate-950"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Sustainability Commitment
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">Eco-friendly, sustainable practices.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#e7c8c4] text-slate-950">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path d="M12 3.5 15.2 8l4.8.6-3.5 3.3.8 4.7L12 14.4 6.7 16.6l.8-4.7L4 8.6 8.8 8 12 3.5zM12 1l2.4 3.3 4 .5a1 1 0 0 1 .6 1.7l-2.9 2.8.7 4a1 1 0 0 1-1.5 1l-3.6-1.9-3.6 1.9a1 1 0 0 1-1.5-1l.7-4L4.4 6.5A1 1 0 0 1 5 4.8l4-.5L12 1z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className="text-[19px] font-medium text-slate-950"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Inspired Moments
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">Inspiring moments through fragrance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto min-h-145 w-full max-w-185 sm:min-h-155 lg:min-h-175">
                    <img
                        src="/jar-candle.svg"
                        alt="Jar candle"
                        className="absolute left-[2%] top-[9%] h-[44%] w-[38%] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    />
                    <img
                        src="/geometric-candle.svg"
                        alt="Geometric candle"
                        className="absolute right-[8%] top-0 h-[42%] w-[34%] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    />
                    <img
                        src="/glass-candle.svg"
                        alt="Glass candle"
                        className="absolute left-[28%] top-[23%] z-20 h-[46%] w-[43%] object-cover shadow-[0_16px_34px_rgba(0,0,0,0.12)]"
                    />
                    <img
                        src="/ceramic-candle.svg"
                        alt="Ceramic candle"
                        className="absolute right-[4%] bottom-[2%] h-[34%] w-[38%] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    />

                    <div className="absolute left-[47%] bottom-[10%] rotate-28">
                        <div className="h-22 w-8.5 rounded-[18px] border border-[#d6beb8] bg-transparent" />
                        <div className="absolute left-4.25 -top-2.5 h-5 w-3 rounded-full border border-[#d6beb8] border-b-0 bg-transparent" />
                        <div className="absolute left-4.5 -top-5 h-5 w-3 rounded-full bg-[#d6beb8]/20 blur-[1px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}