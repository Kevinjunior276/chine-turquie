"use client";

import { REVIEWS, Review } from "@/data/reviews";

export default function ReviewsColumns() {
  const col1 = REVIEWS.slice(0, 6);
  const col2 = REVIEWS.slice(6, 12);

  const renderCard = (rev: Review, idx: number) => (
    <div
      key={`${rev.id}-${idx}`}
      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col gap-3.5 mb-5"
    >
      {/* Top Author Bar */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Initials Badge (Pas de profil photo) */}
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-tr ${rev.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-md shrink-0`}
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
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200/60 shrink-0">
          <span className="material-symbols-outlined text-[13px]">verified</span>
          Vérifié
        </span>
      </div>

      {/* Stars & Order Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
        <div className="flex text-amber-400">
          {[...Array(rev.rating)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[17px] fill-current">
              star
            </span>
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

      {/* Date */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span className="font-medium">{rev.role}</span>
        <span>{rev.date}</span>
      </div>
    </div>
  );

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
