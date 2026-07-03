"use client";

import Link from "next/link";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    isNew: boolean;
    rating: number;
    reviews: number;
    colors?: string[];
    hasTimer?: boolean;
    timerDays?: number;
}

const products: Product[] = [
    {
        id: "1",
        name: "Beagle Paw Ceramic Candle Warmer",
        slug: "beagle-paw-ceramic-candle-warmer",
        image: "/beagle-paw-candle.jpg",
        price: 12,
        originalPrice: 20,
        discount: 40,
        isNew: true,
        rating: 0,
        reviews: 0,
    },
    {
        id: "2",
        name: "White Ceramic Candle Holder Model",
        slug: "white-ceramic-candle-holder-model",
        image: "/white-ceramic-holder.jpg",
        price: 21,
        isNew: false,
        rating: 0,
        reviews: 0,
    },
    {
        id: "3",
        name: "Vanilla Soy Candle",
        slug: "vanilla-soy-candle",
        image: "/vanilla-soy-candle.jpg",
        price: 20,
        originalPrice: 25,
        discount: 20,
        isNew: true,
        rating: 0,
        reviews: 0,
        hasTimer: true,
        timerDays: 763,
    },
    {
        id: "4",
        name: "Soy Off-White Twisted Candle",
        slug: "soy-off-white-twisted-candle",
        image: "/soy-twisted-candle.jpg",
        price: 10,
        isNew: false,
        rating: 4,
        reviews: 0,
    },
    {
        id: "5",
        name: "Nordic Style Ceramic Candle Holder",
        slug: "nordic-style-ceramic-holder",
        image: "/nordic-ceramic-holder.jpg",
        price: 15,
        originalPrice: 20,
        discount: 25,
        isNew: true,
        rating: 0,
        reviews: 0,
        colors: ["#FFFFFF", "#808080", "#8B0000"],
    },
    {
        id: "6",
        name: "Moon Soy Wax Candle",
        slug: "moon-soy-wax-candle",
        image: "/moon-soy-candle.jpg",
        price: 15,
        originalPrice: 20,
        discount: 25,
        isNew: true,
        rating: 0,
        reviews: 0,
        colors: ["#FFC0CB", "#FFFF00"],
        hasTimer: true,
        timerDays: 608,
    },
    {
        id: "7",
        name: "Mermaid Candle",
        slug: "mermaid-candle",
        image: "/mermaid-candle.jpg",
        price: 15,
        isNew: true,
        rating: 0,
        reviews: 0,
        colors: ["#FFC0CB"],
    },
    {
        id: "8",
        name: "Knot Candle",
        slug: "knot-candle",
        image: "/knot-candle.jpg",
        price: 25,
        isNew: true,
        rating: 4,
        reviews: 0,
        colors: ["#FFFFFF", "#8B0000"],
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "fill-slate-900" : "fill-slate-300"}`}
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

function Timer({ days }: { days: number }) {
    const hours = Math.floor((Math.random() * 24));
    const mins = Math.floor((Math.random() * 60));
    const secs = Math.floor((Math.random() * 60));

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 px-3 py-1.5 text-center text-xs font-semibold text-slate-900 backdrop-blur-sm rounded">
            <div className="flex gap-2 justify-center">
                <div>
                    <div className="text-[11px] font-bold">{days}</div>
                    <div className="text-[9px] uppercase tracking-tight">Days</div>
                </div>
                <div>
                    <div className="text-[11px] font-bold">{String(hours).padStart(2, "0")}</div>
                    <div className="text-[9px] uppercase tracking-tight">Hrs</div>
                </div>
                <div>
                    <div className="text-[11px] font-bold">{String(mins).padStart(2, "0")}</div>
                    <div className="text-[9px] uppercase tracking-tight">Mins</div>
                </div>
                <div>
                    <div className="text-[11px] font-bold">{String(secs).padStart(2, "0")}</div>
                    <div className="text-[9px] uppercase tracking-tight">Secs</div>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [isInCart, setIsInCart] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);

    const toggleCart = () => {
        setIsInCart(!isInCart);
    };

    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {product.isNew && (
                        <div className="absolute left-3 top-3 bg-slate-300 px-2.5 py-1 text-xs font-medium text-slate-800 rounded">
                            New
                        </div>
                    )}

                    {product.discount && (
                        <div className="absolute left-3 top-12 bg-red-500 px-2.5 py-1.5 text-xs font-bold text-white">
                            -{product.discount}%
                        </div>
                    )}

                    {product.hasTimer && <Timer days={product.timerDays || 0} />}

                    <button
                        onClick={toggleCart}
                        className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all ${isInCart
                                ? "bg-[#7b4d9d] text-white"
                                : "bg-white text-[#7b4d9d] hover:bg-[#7b4d9d] hover:text-white"
                            }`}
                        title={isInCart ? "Remove from cart" : "Add to cart"}
                    >
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                            {isInCart ? (
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            ) : (
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className="p-4">
                    <Link
                        href={`/product/${product.slug}`}
                        className="text-sm font-medium text-slate-900 transition hover:text-[#7b4d9d] line-clamp-2"
                    >
                        {product.name}
                    </Link>

                    <div className="mt-2">
                        <StarRating rating={product.rating} />
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                        <span className="text-lg font-semibold text-[#9b7e99]">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                    </div>

                    {product.colors && product.colors.length > 0 && (
                        <div className="mt-3 flex items-center gap-2">
                            {product.colors.map((color, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedColor(color)}
                                    className={`h-5 w-5 rounded-full border-2 transition ${selectedColor === color ? "border-slate-900" : "border-slate-200"
                                        }`}
                                    style={{ backgroundColor: color }}
                                    title="Select color"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Products() {
    return (
        <section className="bg-white py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
                <div className="mb-16 text-center">
                    <h2
                        className="text-[clamp(2.4rem,4.5vw,3.8rem)] leading-none tracking-[-0.02em] text-slate-950"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Scented Splendor{" "}
                        <span className="inline-block">
                            Explore Our{" "}
                            <span className="relative">
                                Collection
                                <span className="absolute bottom-1 left-0 h-1 w-full bg-[#d9c0ba]" />
                            </span>
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/product"
                        className="inline-flex items-center gap-2 bg-[#d9c0ba] px-8 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-[#c9b0aa]"
                    >
                        View All Products
                        <span className="text-base">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
