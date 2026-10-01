import React, { useState } from 'react';
import { JAWAI_ROOMS, RoomItem } from '../data/hotelData';

interface RoomsSliderSectionProps {
  onSelectRoom: (room: RoomItem) => void;
  onOpenAllRooms: () => void;
}

export const RoomsSliderSection: React.FC<RoomsSliderSectionProps> = ({
  onSelectRoom,
  onOpenAllRooms
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : JAWAI_ROOMS.length - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < JAWAI_ROOMS.length - 1 ? prev + 1 : 0));
  };

  const activeRoom = JAWAI_ROOMS[currentSlide];

  return (
    <section id="rooms" className="w-full bg-white select-none overflow-hidden pb-[8rem]">
      {/* FULL-WIDTH SLIDER: ONE slide at a time (1440×825 desktop / 390×650 mobile) */}
      <div className="relative w-full h-[60rem] md:h-[110rem] overflow-hidden bg-black">
        {/* Active Full-Bleed Photo */}
        <img
          src={activeRoom.image}
          alt={activeRoom.name}
          className="w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out cursor-pointer"
          onClick={() => onSelectRoom(activeRoom)}
          referrerPolicy="no-referrer"
        />

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* Centred Text Block: 939px wide box (125rem), horizontally & vertically centred */}
        <div
          onClick={() => onSelectRoom(activeRoom)}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-[2rem] z-10 cursor-pointer pointer-events-auto"
        >
          <div className="w-full max-w-[125rem] flex flex-col items-center">
            {/* Sub-label */}
            <span className="text-white/80 text-[1.4rem] uppercase tracking-[0.15em] font-semibold mb-[1rem]">
              {activeRoom.subName}
            </span>

            {/* White H2 room name */}
            <h2 className="section-h2 text-white max-w-[101rem] mb-[2rem] md:mb-[2.5rem]">
              {activeRoom.name}
            </h2>

            {/* White meta line (2rem desktop / 1.4rem mobile, tracking 0.03em/0.02em, weight 400) */}
            <p className="room-meta flex items-center justify-center gap-[1rem] md:gap-[1.5rem]">
              <span>{activeRoom.persons}</span>
              <span aria-hidden="true">·</span>
              <span>{activeRoom.size}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold">{activeRoom.price}</span>
            </p>
          </div>
        </div>

        {/* Thin Arrow Buttons at Left and Right Edges */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-[2rem] md:left-[4rem] top-1/2 -translate-y-1/2 z-20 w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] text-white hover:text-[#E1D7CB] flex items-center justify-center cursor-pointer transition-colors text-[2.5rem] md:text-[3.5rem] font-light"
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-[2rem] md:right-[4rem] top-1/2 -translate-y-1/2 z-20 w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] text-white hover:text-[#E1D7CB] flex items-center justify-center cursor-pointer transition-colors text-[2.5rem] md:text-[3.5rem] font-light"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Slide Counter Indicator */}
        <div className="absolute bottom-[3rem] left-1/2 -translate-x-1/2 z-20 text-white/80 text-[1.2rem] md:text-[1.5rem] font-semibold tracking-widest uppercase">
          {currentSlide + 1} / {JAWAI_ROOMS.length}
        </div>
      </div>

      {/* Centred "● VIEW ALL ROOMS" CTA after the slider */}
      <div className="w-full text-center mt-[4rem] md:mt-[6rem]">
        <button
          type="button"
          onClick={onOpenAllRooms}
          className="cta-link group inline-flex items-center gap-[1rem] hover:opacity-75 transition-opacity cursor-pointer relative"
        >
          <span className="bullet-dot group-hover:scale-125" />
          <span className="relative">
            VIEW ALL ROOMS
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#444C35] transition-all duration-300 group-hover:w-full" />
          </span>
        </button>
      </div>
    </section>
  );
};
