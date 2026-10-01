import React, { useState } from 'react';
import { JAWAI_GALLERY } from '../data/hotelData';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[125rem] bg-white border border-[#E1D7CB] overflow-hidden max-h-[92vh] flex flex-col text-[#444C35]">
        {/* Header */}
        <div className="p-[3rem] border-b border-[#E1D7CB] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[0.4rem]">
              GALLERY · JAWAI RETREAT
            </span>
            <h3 className="text-[2.2rem] md:text-[3rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
              A CLOSER LOOK AT THE RETREAT
            </h3>
            <p className="text-[1.3rem] text-[#444C35]/80 mt-1">
              Browse the spaces, then open any image for a larger view.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-[4rem] h-[4rem] flex items-center justify-center text-[2rem] hover:opacity-75 cursor-pointer border border-[#E1D7CB]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="p-[3rem] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2.4rem]">
          {JAWAI_GALLERY.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.src)}
              className="group cursor-pointer border border-[#E1D7CB] overflow-hidden bg-[#FAF8F5]"
            >
              <div className="w-full h-[24rem] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-[1.5rem] bg-white border-t border-[#E1D7CB]">
                <h4 className="text-[1.3rem] uppercase font-semibold tracking-[0.05em] text-[#444C35]">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Large Image Lightbox View */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="absolute inset-0 z-30 bg-black/90 flex flex-col items-center justify-center p-[2rem] cursor-pointer"
          >
            <img
              src={activeImage}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />
            <span className="text-white text-[1.4rem] mt-[1.5rem] uppercase tracking-widest">
              Click anywhere to close preview
            </span>
          </div>
        )}

        {/* Footer */}
        <div className="p-[2rem] bg-[#FAF8F5] border-t border-[#E1D7CB] text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[3.5rem] py-[1.2rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
          >
            CLOSE GALLERY
          </button>
        </div>
      </div>
    </div>
  );
};
