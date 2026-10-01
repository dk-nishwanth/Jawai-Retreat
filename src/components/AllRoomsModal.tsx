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
              FEEL GOOD RESORT JOHANNIS · TIROLO
            </span>
            <h3 className="text-[2.2rem] md:text-[3rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
              ALL 14 ROOMS & SUITES
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

        {/* Scrollable list */}
        <div className="p-[3rem] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-[2.4rem]">
          {ROOMS_EXACT_LIST.map((room) => (
            <div
              key={room.id}
              onClick={() => {
                onClose();
                onSelectRoom(room);
              }}
              className="border border-[#E1D7CB] hover:border-[#444C35] p-[2rem] cursor-pointer transition-colors flex gap-[2rem] group bg-white"
            >
              <div className="w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] shrink-0 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[1.4rem] md:text-[1.6rem] font-semibold uppercase tracking-[0.03em] text-[#444C35] mb-[0.4rem] group-hover:underline">
                    {room.name}
                  </h4>
                  <div className="text-[1.2rem] text-[#444C35]/80 flex flex-wrap gap-[1rem]">
                    <span>{room.persons}</span>
                    <span>·</span>
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-[1.2rem] border-t border-[#E1D7CB]/60 text-[1.4rem] font-semibold text-[#444C35]">
                  <span>{room.price}</span>
                  <span className="text-[1.2rem] uppercase tracking-wider underline">DETAILS →</span>
                </div>
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
