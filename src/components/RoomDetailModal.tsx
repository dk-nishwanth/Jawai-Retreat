import React from 'react';
import { RoomItem } from '../data/hotelData';

interface RoomDetailModalProps {
  room: RoomItem | null;
  onClose: () => void;
  onBook: (room: RoomItem) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBook
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[100rem] bg-white border border-[#E1D7CB] overflow-hidden max-h-[90vh] flex flex-col text-[#444C35]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-[2rem] right-[2rem] z-20 bg-white text-[#444C35] w-[4rem] h-[4rem] flex items-center justify-center text-[2rem] hover:bg-[#E1D7CB] cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Hero Photo */}
        <div className="relative h-[25rem] md:h-[45rem] w-full overflow-hidden shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-[2.5rem] left-[2.5rem] right-[2.5rem] text-white">
            <h3 className="text-[2.2rem] md:text-[3.6rem] uppercase font-semibold tracking-[0.03em] mb-[0.6rem]">
              {room.name}
            </h3>
            <div className="text-[1.3rem] md:text-[1.6rem] text-white/95 flex gap-[1.5rem] font-normal">
              <span>{room.persons}</span>
              <span>·</span>
              <span>{room.size}</span>
              <span>·</span>
              <span className="font-semibold">{room.price}</span>
            </div>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-[3rem] md:p-[4rem] overflow-y-auto flex-1">
          <h4 className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35] mb-[1rem]">
            DESCRIPTION & ATMOSPHERE
          </h4>
          <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.6] text-[#444C35] mb-[3rem] font-normal">
            {room.description}
          </p>

          <h4 className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35] mb-[1.5rem]">
            ROOM HIGHLIGHTS
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[1.2rem] text-[1.4rem] text-[#444C35] mb-[3rem]">
            {room.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-[1rem]">
                <span className="bullet-dot" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="p-[2rem] bg-[#FAF8F5] border border-[#E1D7CB] text-[1.3rem] text-[#444C35] leading-relaxed">
            <span className="font-semibold block mb-[0.4rem]">JOHANNIS INCLUSIVE SERVICES:</span>
            Alpine-Mediterranean gourmet breakfast on the sun terrace, daily afternoon cake buffet, unlimited access to the 3,000m² wellness & 25m heated infinity pool, fluffy bathrobes in wellness bag, and complimentary South Tyrol Guest Pass for all trains & buses.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-[2rem] md:p-[3rem] bg-white border-t border-[#E1D7CB] flex items-center justify-between gap-[2rem]">
          <div className="text-[1.4rem] font-semibold uppercase tracking-wider text-[#444C35]">
            Rate: <span className="text-[1.8rem] font-bold">{room.price}</span> / night
          </div>
          <div className="flex gap-[1.5rem]">
            <button
              type="button"
              onClick={onClose}
              className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[2.5rem] py-[1.2rem] border border-[#444C35] text-[#444C35] hover:bg-neutral-100 cursor-pointer"
            >
              CLOSE
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(room);
              }}
              className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[3.5rem] py-[1.2rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
            >
              BOOK DIRECTLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
