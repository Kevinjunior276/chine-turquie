"use client";

import { REVIEWS, Review } from "@/data/reviews";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", // Rouge éclatant
  "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Émeraude vive
  "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Bleu royal
  "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", // Ambre chaud
  "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", // Violet intense
  "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)", // Cyan électrique
  "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)", // Rose framboise
  "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)", // Teal profond
];

const getOrderBadgeStyle = (orderType: string) => {
  const lower = orderType.toLowerCase();
  if (lower.includes("rob") || lower.includes("caftan") || lower.includes("tissu")) {
    return "bg-rose-100/80 text-rose-800 border-rose-300";
  }
  if (lower.includes("auto") || lower.includes("voiture") || lower.includes("toyota") || lower.includes("range")) {
    return "bg-red-100/80 text-red-800 border-red-300";
  }
  if (lower.includes("phone") || lower.includes("pc") || lower.includes("iphone") || lower.includes("samsung")) {
    return "bg-blue-100/80 text-blue-800 border-blue-300";
  }
  if (lower.includes("fripe") || lower.includes("machine") || lower.includes("groupe")) {
    return "bg-amber-100/80 text-amber-900 border-amber-300";
  }
  return "bg-emerald-100/80 text-emerald-800 border-emerald-300";
};

export default function ReviewsColumns() {
  const col1 = REVIEWS.slice(0, 6);
  const col2 = REVIEWS.slice(6, 12);

  const renderCard = (rev: Review, idx: number) => {
    const avatarBg = AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length];
    const badgeStyle = getOrderBadgeStyle(rev.orderType);

    return (
      <div
        key={`${rev.id}-${idx}`}
        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:shadow-2xl hover:border-red-500/30 transition-all duration-300 flex flex-col gap-3.5 mb-5 ring-1 ring-slate-100"
      >
        {/* Top Author Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Initials Badge (couleurs vives et nettes) */}
            <div
              style={{ background: avatarBg }}
              className="w-11 h-11 rounded-full text-white font-black text-sm flex items-center justify-center shadow-md shrink-0 ring-2 ring-white/90 select-none tracking-wider"
            >
              {rev.initials}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-black text-slate-900">{rev.author}</h4>
                <span className="text-base" title={rev.country}>
                  {rev.flag}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-semibold">
                {rev.city} • <span className="text-red-700 font-bold">{rev.country}</span>
              </p>
            </div>
          </div>

          {/* Verified Badge */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black border border-emerald-300 shrink-0 shadow-sm">
            <svg className="w-3.5 h-3.5 fill-emerald-600 shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Vérifié</span>
          </span>
        </div>

        {/* Stars & Order Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(rev.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0 drop-shadow-[0_1px_2px_rgba(245,158,11,0.4)]" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className={`text-[11px] font-black px-2.5 py-1 rounded-lg border shadow-sm ${badgeStyle}`}>
            {rev.orderType}
          </span>
        </div>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          &ldquo;{rev.comment}&rdquo;
        </p>

        {/* Date & Role */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="font-bold text-slate-800">{rev.role}</span>
          <span className="font-medium text-slate-400">{rev.date}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-4">
      {/* Subtle mask only at the very edges */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-50/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50/90 to-transparent z-10 pointer-events-none" />

      {/* Dual Columns Container with fixed height for infinite scroll */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[640px] overflow-hidden">
        {/* Column 1: Scrolls UP */}
        <div className="flex flex-col animate-scroll-up">
          {col1.map((rev, idx) => renderCard(rev, idx))}
          {/* Duplicated for seamless infinite loop */}
          {col1.map((rev, idx) => renderCard(rev, idx + 100))}
        </div>

        {/* Column 2: Scrolls DOWN */}
        <div className="flex flex-col animate-scroll-down">
          {col2.map((rev, idx) => renderCard(rev, idx))}
          {/* Duplicated for seamless infinite loop */}
          {col2.map((rev, idx) => renderCard(rev, idx + 200))}
        </div>
      </div>
    </div>
  );
}
