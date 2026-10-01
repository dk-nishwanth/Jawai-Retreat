import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[120rem] bg-black border border-white/20 overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-[2rem] right-[2rem] z-20 text-white text-[2.5rem] w-[4rem] h-[4rem] flex items-center justify-center hover:opacity-75 cursor-pointer"
          aria-label="Close video"
        >
          ✕
        </button>

        {/* Video / Visual Cinematic View */}
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src="/images/hero_johannis_resort_1790837379724.jpg"
            alt="Johannis Resort cinematic feel-good experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center p-[3rem] md:p-[6rem]">
            <span className="font-script text-white text-[3rem] md:text-[5rem] mb-[1.5rem] font-normal">
              feel good resort johannis
            </span>
            <h3 className="text-white text-[2rem] md:text-[3.5rem] uppercase font-semibold tracking-[0.1em] mb-[2rem]">
              MOMENTS IN PARADISE BETWEEN MOUNTAINS AND PALM TREES
            </h3>
            <p className="text-white/80 text-[1.4rem] md:text-[1.8rem] max-w-[65rem] mb-[3rem] leading-relaxed">
              Experience the gentle mountain breeze, Mediterranean flora, and the quiet waters of our panoramic infinity pool.
            </p>
            <button
              onClick={onClose}
              className="border border-white text-white text-[1.3rem] uppercase font-semibold px-[3.5rem] py-[1.2rem] tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              Close Film
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
