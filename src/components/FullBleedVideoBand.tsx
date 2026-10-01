import React from 'react';

interface FullBleedVideoBandProps {
  onPlayVideo: () => void;
  imageSrc?: string;
  altText?: string;
  tagline?: string;
}

export const FullBleedVideoBand: React.FC<FullBleedVideoBandProps> = ({
  onPlayVideo,
  imageSrc = "/images/jawai_leopard_safari_landscape_1790838368353.jpg",
  altText = "Granite hills and retreat landscape near Jawai",
  tagline = "LEOPARDS, GRANITE HILLS & OPEN SKIES · JAWAI RETREAT FILM"
}) => {
  return (
    <section className="relative w-full h-[42rem] md:h-[129rem] overflow-hidden select-none">
      {/* 16:9 full-bleed photo */}
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered circular ~60px play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-[2rem]">
        <button
          type="button"
          onClick={onPlayVideo}
          className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] bg-[#E1D7CB]/85 hover:bg-[#E1D7CB] rounded-full-play flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
          aria-label="Play video"
        >
          {/* Thin dark play triangle */}
          <svg
            className="w-[2rem] h-[2rem] ml-[0.3rem] text-[#444C35] fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {tagline && (
          <span className="text-white text-[1.4rem] md:text-[2rem] uppercase tracking-[0.1em] font-semibold text-center max-w-[65rem] px-[2rem]">
            {tagline}
          </span>
        )}
      </div>
    </section>
  );
};
