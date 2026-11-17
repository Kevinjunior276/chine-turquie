"use client";

import { REVIEWS, Review } from "@/data/reviews";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #dc2626 0%, #e11d48 100%)", // Rouge/Rose
  "linear-gradient(135deg, #059669 0%, #0d9488 100%)", // Émeraude/Teal
  "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)", // Bleu/Indigo
  "linear-gradient(135deg, #d97706 0%, #ea580c 100%)", // Ambre/Orange
  "linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)", // Violet/Pourpre
  "linear-gradient(135deg, #0284c7 0%, #0891b2 100%)", // Cyan/Bleu ciel
  "linear-gradient(135deg, #b91c1c 0%, #c2410c 100%)", // Brique/Terre cuite
  "linear-gradient(135deg, #047857 0%, #15803d 100%)", // Vert profond
];

export default function ReviewsColumns() {
  const col1 = REVIEWS.slice(0, 6);
  const col2 = REVIEWS.slice(6, 12);

  const renderCard = (rev: Review, idx: number) => {
    const avatarBg = AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length];

    return (
      <div
        key={`${rev.id}-${idx}`}
        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col gap-3.5 mb-5"
      >
        {/* Top Author Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Initials Badge (100% visible et stylé) */}
            <div
              style={{ background: avatarBg }}
              className="w-11 h-11 rounded-full text-white font-black text-sm flex items-center justify-center shadow-md shrink-0 ring-2 ring-white select-none"
            >
              {rev.initials}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                <span className="text-base" title={rev.country}>
                  {rev.flag}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {rev.city} • <span className="text-slate-700 font-semibold">{rev.country}</span>
              </p>
            </div>
          </div>

          {/* Verified Badge */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200/70 shrink-0">
            <svg className="w-3 h-3 fill-emerald-600 shrink-0" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Vérifié</span>
          </span>
        </div>

        {/* Stars & Order Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(rev.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md">
            {rev.orderType}
          </span>
        </div>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          &ldquo;{rev.comment}&rdquo;
        </p>

        {/* Date & Role */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span className="font-semibold text-slate-600">{rev.role}</span>
          <span>{rev.date}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden py-4">
      {/* Top & Bottom gradient mask for smooth fade in/out */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

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
