"use client";

import Image from "next/image";
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
    category: "candles" | "holders" | "warmers";
    scent?: "vanilla" | "floral" | "fruity" | "fresh" | "woody" | null;
    soldCount: number;
    dateAdded: Date;
}

const allProducts: Product[] = [
    {
        id: "4",
        name: "Soy Off-White Twisted Candle",
        slug: "soy-off-white-twisted-candle",
        image: "https://picsum.photos/400/400?random=1",
        price: 10,
        isNew: false,
        rating: 5,
        reviews: 287,
        category: "candles",
        scent: "vanilla",
        soldCount: 1240,
        dateAdded: new Date("2025-10-15"),
    },
    {
        id: "8",
        name: "Knot Candle",
        slug: "knot-candle",
        image: "https://picsum.photos/400/400?random=2",
        price: 25,
        isNew: true,
        rating: 5,
        reviews: 156,
        colors: ["#FFFFFF", "#8B0000"],
        category: "candles",
        scent: "floral",
        soldCount: 892,
        dateAdded: new Date("2026-06-20"),
    },
    {
        id: "3",
        name: "Vanilla Soy Candle",
        slug: "vanilla-soy-candle",
        image: "https://picsum.photos/400/400?random=3",
        price: 20,
        originalPrice: 25,
        discount: 20,
        isNew: true,
        rating: 4,
        reviews: 203,
        hasTimer: true,
        timerDays: 763,
        category: "candles",
        scent: "vanilla",
        soldCount: 756,
        dateAdded: new Date("2026-06-25"),
    },
    {
        id: "6",
        name: "Moon Soy Wax Candle",
        slug: "moon-soy-wax-candle",
        image: "https://picsum.photos/400/400?random=4",
        price: 15,
        originalPrice: 20,
        discount: 25,
        isNew: true,
        rating: 4,
        reviews: 134,
        colors: ["#FFC0CB", "#FFFF00"],
        hasTimer: true,
        timerDays: 608,
        category: "candles",
        scent: "fruity",
        soldCount: 645,
        dateAdded: new Date("2026-06-22"),
    },
    {
        id: "2",
        name: "White Ceramic Candle Holder Model",
        slug: "white-ceramic-candle-holder-model",
        image: "https://picsum.photos/400/400?random=5",
        price: 21,
        isNew: false,
        rating: 4,
        reviews: 89,
        category: "holders",
        scent: null,
        soldCount: 423,
        dateAdded: new Date("2025-12-10"),
    },
    {
        id: "5",
        name: "Nordic Style Ceramic Candle Holder",
        slug: "nordic-style-ceramic-holder",
        image: "https://picsum.photos/400/400?random=6",
        price: 15,
        originalPrice: 20,
        discount: 25,
        isNew: true,
        rating: 4,
        reviews: 76,
        colors: ["#FFFFFF", "#808080", "#8B0000"],
        category: "holders",
        scent: null,
        soldCount: 312,
        dateAdded: new Date("2026-06-18"),
    },
    {
        id: "7",
        name: "Mermaid Candle",
        slug: "mermaid-candle",
        image: "https://picsum.photos/400/400?random=7",
        price: 15,
        isNew: true,
        rating: 3,
        reviews: 42,
        colors: ["#FFC0CB"],
        category: "candles",
        scent: "fresh",
        soldCount: 189,
        dateAdded: new Date("2026-06-28"),
    },
    {
        id: "1",
        name: "Beagle Paw Ceramic Candle Warmer",
        slug: "beagle-paw-ceramic-candle-warmer",
        image: "https://picsum.photos/400/400?random=8",
        price: 12,
        originalPrice: 20,
        discount: 40,
        isNew: true,
        rating: 3,
        reviews: 31,
        category: "warmers",
        scent: null,
        soldCount: 127,
        dateAdded: new Date("2026-06-30"),
    },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
    return (
        <div className="flex items-center gap-1.5">
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
            {reviews > 0 && <span className="text-xs text-slate-500">({reviews})</span>}
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
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={288}
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
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
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
                        <StarRating rating={product.rating} reviews={product.reviews} />
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
    const [filterCategory, setFilterCategory] = useState<"all" | "candles" | "holders" | "warmers">("all");
    const [filterScent, setFilterScent] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<"bestselling" | "latest" | "toprated" | "priceLow">("bestselling");

    const categories = [
        { value: "all", label: "All Products" },
        { value: "candles", label: "Candles" },
        { value: "holders", label: "Holders" },
        { value: "warmers", label: "Warmers" },
    ];

    const scents = [
        { value: null, label: "All Scents" },
        { value: "vanilla", label: "Vanilla" },
        { value: "floral", label: "Floral" },
        { value: "fruity", label: "Fruity" },
        { value: "fresh", label: "Fresh" },
        { value: "woody", label: "Woody" },
    ];

    const sortOptions = [
        { value: "bestselling", label: "Most Sold" },
        { value: "latest", label: "Latest Added" },
        { value: "toprated", label: "Top Rated" },
        { value: "priceLow", label: "Price: Low to High" },
    ];

    let filteredProducts = allProducts.filter((product) => {
        const categoryMatch = filterCategory === "all" || product.category === filterCategory;
        const scentMatch = filterScent === null || filterScent === "All Scents" || product.scent === filterScent;
        return categoryMatch && scentMatch;
    });

    if (sortBy === "bestselling") {
        filteredProducts.sort((a, b) => b.soldCount - a.soldCount);
    } else if (sortBy === "latest") {
        filteredProducts.sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime());
    } else if (sortBy === "toprated") {
        filteredProducts.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    } else if (sortBy === "priceLow") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

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

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setFilterCategory(cat.value as any)}
                                className={`px-4 py-2 text-sm font-medium rounded transition ${filterCategory === cat.value
                                    ? "bg-[#7b4d9d] text-white"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <select
                            value={filterScent || ""}
                            onChange={(e) => setFilterScent(e.target.value || null)}
                            className="rounded border-2 border-[#7b4d9d] bg-white px-4 py-2 text-sm font-medium text-[#000000] transition hover:bg-[#7b4d9d]/5 focus:outline-none focus:ring-2 focus:ring-[#7b4d9d]/30"
                        >
                            {scents.map((scent) => (
                                <option key={scent.value || "null"} value={scent.value || ""}>
                                    {scent.label}
                                </option>
                            ))}
                        </select>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="rounded border-2 border-[#7b4d9d] bg-white px-4 py-2 text-sm font-medium text-[#000000] transition hover:bg-[#7b4d9d]/5 focus:outline-none focus:ring-2 focus:ring-[#7b4d9d]/30"
                        >
                            {sortOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
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
        </section >
    );
}
