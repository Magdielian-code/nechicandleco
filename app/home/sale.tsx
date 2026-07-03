"use client";

import Image from "next/image";

const brandMarks = [
    { label: "Jewelry", size: "text-[2rem]" },
    { label: "HAND\nMADE\nSTUDIO", size: "text-[1.3rem] leading-none tracking-[0.28em]" },
    { label: "Hellehysto", size: "text-[1.9rem] italic" },
    { label: "Alisa\nBoutique", size: "text-[1.65rem] leading-none" },
    { label: "The\nBACKYARD\nSTUDIO", size: "text-[1.25rem] leading-none tracking-[0.16em]" },
    { label: "NATUROL\nNature Beauty", size: "text-[1.45rem] leading-none tracking-[0.28em]" },
];

function Badge({
    children,
    tone,
}: {
    children: string;
    tone: string;
}) {
    return (
        <div
            className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full text-[0.95rem] font-medium text-white"
            style={{ backgroundColor: tone }}
        >
            {children}
        </div>
    );
}

function BrandCarousel() {
    return (
        <div className="relative overflow-hidden">
            <style>{`
                @keyframes scroll-infinite {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .brand-scroll {
                    animation: scroll-infinite 40s linear infinite;
                }
            `}</style>

            <div className="brand-scroll flex gap-8">
                {[...brandMarks, ...brandMarks].map((mark, idx) => (
                    <div
                        key={idx}
                        className="shrink-0 whitespace-pre-line opacity-95"
                        style={{ minWidth: "150px" }}
                    >
                        <div
                            className={`font-light tracking-[0.02em] ${mark.size}`}
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            {mark.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SaleShowcase() {
    return (
        <>
            <section className="bg-white pt-4">
                <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-4">
                    <div className="text-center">
                        <p
                            className="text-[1.05rem] font-medium tracking-[0.02em] text-slate-700"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Our Sale
                        </p>
                        <h2
                            className="mt-2 text-[clamp(2.8rem,4.2vw,4.4rem)] leading-none tracking-[-0.04em] text-slate-950"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Sparkling <span className="relative inline-block">Savings<span className="absolute left-1/2 top-[104%] h-px w-14 -translate-x-1/2 bg-slate-900" /></span> Shop Now!
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-[1.02fr_1fr] lg:grid-rows-2">
                        <article className="relative min-h-136 overflow-hidden bg-[#5a5857] lg:row-span-2">
                            <Image
                                src="/jar-candle.svg"
                                alt="Minimalist candle collection"
                                fill
                                className="object-cover opacity-40"
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <Badge tone="#5ac7ca">Trend</Badge>

                            <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-white">
                                <div className="max-w-xl">
                                    <h3
                                        className="text-[clamp(2rem,2.8vw,2.65rem)] leading-[0.95] tracking-[-0.03em]"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Sale Up 30% Off
                                        <br />
                                        Minimalist Collection
                                    </h3>
                                    <p className="mt-8 text-[1.2rem] tracking-[-0.01em]">Best Price Only: $99.58</p>
                                    <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-white/95">
                                        Experience the allure of darkness with our exquisite one candle collection.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-8 inline-flex items-center bg-[#e5c7c7] px-8 py-3 text-sm font-medium text-slate-900 transition hover:bg-[#ddbbbb]"
                                    >
                                        Shop Now <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <article className="relative min-h-74 overflow-hidden bg-[#f0d2bf]">
                            <Image
                                src="/glass-candle.svg"
                                alt="Scented candle jar"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                            <Badge tone="#ff524f">Hot</Badge>
                        </article>

                        <article className="relative min-h-78 overflow-hidden bg-[#f5f5f5]">
                            <Image
                                src="/ceramic-candle.svg"
                                alt="Sale candles"
                                fill
                                className="object-contain object-bottom px-8 py-6"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                            <Badge tone="#8a6dd9">Sale</Badge>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-white pt-4 pb-24">
                <div className="bg-black py-8 sm:py-10">
                    <BrandCarousel />
                </div>

                <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-4">
                    <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.68fr_1.1fr_0.82fr] lg:gap-10">
                        <div className="relative h-92 overflow-hidden bg-white sm:h-100 lg:h-104">
                            <Image
                                src="/glass-candle.svg"
                                alt="Smokey wood candle"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 24vw, 100vw"
                            />
                            <div className="absolute -right-1 top-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-900 bg-[#dec2c0] text-center text-[0.95rem] leading-tight text-slate-900 shadow-sm">
                                Save
                                <br />
                                $19.00
                            </div>
                        </div>

                        <div className="relative h-128 overflow-hidden bg-white sm:h-140 lg:h-136">
                            <Image
                                src="/glass-candle.svg"
                                alt="New York city candle"
                                fill
                                className="object-contain object-center"
                                sizes="(min-width: 1024px) 42vw, 100vw"
                            />
                        </div>

                        <div className="px-2 text-center lg:pl-6 lg:pr-0">
                            <p className="text-[1rem] text-slate-700" style={{ fontFamily: "var(--font-cormorant)" }}>
                                Harlem
                            </p>
                            <h3
                                className="mt-4 text-[clamp(2.3rem,3.8vw,3.3rem)] leading-[0.98] tracking-[-0.03em] text-slate-950"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                Curved Candle Jar Cement
                            </h3>
                            <div className="mx-auto mt-3 h-px w-16 bg-slate-900" />
                            <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-slate-600">
                                Create a warm and inviting atmosphere with our Curved Candle Jar Cement. The unique curved design adds a touch of elegance while the cement material-*
                            </p>
                            <div className="mt-8 text-[2rem] leading-none tracking-[0.12em] text-slate-900">
                                721 : 08 : 03 : 15
                            </div>
                            <a
                                href="#"
                                className="mt-8 inline-flex min-w-45 items-center justify-center bg-[#dec2c0] px-8 py-3 text-sm font-medium text-slate-900 transition hover:bg-[#d6b4b1]"
                            >
                                Add to Cart <span className="ml-2">$20.00</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
