import React from 'react';
import { ROOMS_EXACT_LIST, RoomItem } from '../data/hotelData';

interface AllRoomsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRoom: (room: RoomItem) => void;
}

export const AllRoomsModal: React.FC<AllRoomsModalProps> = ({
  isOpen,
  onClose,
  onSelectRoom
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[120rem] bg-white border border-[#E1D7CB] overflow-hidden max-h-[92vh] flex flex-col text-[#444C35]">
        {/* Header */}
        <div className="p-[3rem] border-b border-[#E1D7CB] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[0.5rem]">
              JAWAI RETREAT · PALI DISTRICT, RAJASTHAN
            </span>
            <h3 className="text-[2.2rem] md:text-[3rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
              SIX ROOMS · TWO WAYS TO STAY
            </h3>
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

        {/* Scrollable list: one card per room type */}
        <div className="p-[2rem] md:p-[3rem] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[2.4rem]">
          {ROOMS_EXACT_LIST.filter((r) =>
            ['premium-balcony-rooms', 'luxury-room-private-pool'].includes(r.id)
          ).map((room) => (
            <div
              key={room.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                onClose();
                onSelectRoom(room);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClose();
                  onSelectRoom(room);
                }
              }}
              className="border border-[#E1D7CB] hover:border-[#444C35] cursor-pointer transition-colors flex flex-col group bg-white"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 flex flex-col p-[2rem] md:p-[2.4rem]">
                <span className="text-[1.1rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 mb-[0.6rem]">
                  {room.subName}
                </span>
                <h4 className="text-[1.8rem] md:text-[2rem] leading-[1.15] font-semibold uppercase tracking-[0.03em] text-[#444C35] mb-[1.2rem]">
                  {room.name}
                </h4>
                <div className="flex flex-wrap gap-[0.8rem] mb-[1.4rem]">
                  <span className="bg-[#FAF8F5] border border-[#E1D7CB] px-[1.1rem] py-[0.6rem] text-[1.2rem]">
                    {room.persons}
                  </span>
                  <span className="bg-[#FAF8F5] border border-[#E1D7CB] px-[1.1rem] py-[0.6rem] text-[1.2rem]">
                    {room.size}
                  </span>
                </div>
                <p className="text-[1.3rem] md:text-[1.4rem] leading-[1.55] text-[#444C35]/85 mb-[1.8rem]">
                  {room.description.split('. ').slice(0, 2).join('. ').replace(/\.?$/, '.')}
                </p>
                <span className="mt-auto pt-[1.4rem] border-t border-[#E1D7CB]/70 text-[1.2rem] font-semibold uppercase tracking-[0.1em] text-[#444C35] underline underline-offset-4">
                  VIEW DETAILS →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-[2rem] bg-[#FAF8F5] border-t border-[#E1D7CB] text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[3.5rem] py-[1.2rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
          >
            CLOSE OVERVIEW
          </button>
        </div>
      </div>
    </div>
  );
};
