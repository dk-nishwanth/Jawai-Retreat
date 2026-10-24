import React, { useEffect, useRef, useState } from 'react';
import { JAWAI_DAYS, DayChapter, DayImage } from '../data/daysData';

const STRIP_HEIGHT = 'h-[38rem] md:h-[52rem]';

const ChapterStrip: React.FC<{
  chapter: DayChapter;
  onOpen: (img: DayImage, chapter: DayChapter) => void;
}> = ({ chapter, onOpen }) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.4rem] md:gap-[4rem] items-end">
      <div className="md:col-span-3 flex flex-col items-start">
        <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1.2rem]">
          {chapter.label}
        </span>
        <h3 className="text-[2.4rem] md:text-[3rem] leading-[1.1] uppercase font-semibold tracking-[0.02em] mb-[1.6rem]">
          {chapter.title}
        </h3>
        <p className="text-[1.4rem] leading-relaxed text-[#444C35]/85 mb-[2.4rem] max-w-[34rem]">
          {chapter.text}
        </p>
        <div className="hidden md:flex gap-[1rem]">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={`Previous photos, ${chapter.title}`}
            className="w-[4.6rem] h-[4.6rem] border border-[#444C35]/40 hover:bg-[#444C35] hover:text-white transition-colors cursor-pointer text-[1.8rem]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={`Next photos, ${chapter.title}`}
            className="w-[4.6rem] h-[4.6rem] border border-[#444C35]/40 hover:bg-[#444C35] hover:text-white transition-colors cursor-pointer text-[1.8rem]"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="md:col-span-9 flex gap-[1.2rem] md:gap-[1.6rem] overflow-x-auto snap-x snap-mandatory scroll-smooth pb-[1rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {chapter.images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => onOpen(img, chapter)}
            aria-label={`Open photo, ${chapter.title}`}
            className={`group snap-start shrink-0 ${STRIP_HEIGHT} overflow-hidden bg-[#FAF8F5] cursor-zoom-in`}
            style={{ aspectRatio: `${img.w} / ${img.h}` }}
          >
            <img
              src={img.src}
              width={img.w}
              height={img.h}
              alt={`${chapter.title.toLowerCase()} at Jawai Retreat`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export const DayAtJawaiSection: React.FC = () => {
  const [active, setActive] = useState<{ img: DayImage; chapter: DayChapter } | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const list = active.chapter.images;
        const i = list.findIndex((x) => x.src === active.img.src);
        const next = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
        setActive({ img: next, chapter: active.chapter });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="a-day-at-jawai" className="w-full bg-[#FAF8F5] py-[7rem] md:py-[12rem]">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        <div className="max-w-[90rem] mb-[6rem] md:mb-[9rem]">
          <span className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1.5rem]">
            A DAY AT JAWAI
          </span>
          <h2 className="section-h2 mb-[2.2rem]">
            THE ROOMS, THE TERRACES, THE HILLS.
          </h2>
          <p className="lead-text">
            Details and views from Jawai Retreat, from carved jaali niches and private terraces to jeep drives through the granite hills and picnics at dusk.
          </p>
        </div>

        <div className="flex flex-col gap-[7rem] md:gap-[11rem]">
          {JAWAI_DAYS.map((chapter) => (
            <ChapterStrip
              key={chapter.id}
              chapter={chapter}
              onOpen={(img, ch) => setActive({ img, chapter: ch })}
            />
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-[1.6rem] md:p-[4rem]"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-[1.6rem] right-[1.6rem] md:top-[3rem] md:right-[3rem] w-[4.4rem] h-[4.4rem] text-white text-[2.2rem] border border-white/40 hover:bg-white/10 cursor-pointer"
          >
            ✕
          </button>
          <img
            src={active.img.src}
            alt={`${active.chapter.title.toLowerCase()} at Jawai Retreat`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
