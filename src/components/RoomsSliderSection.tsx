import React, { useState } from 'react';
import { JAWAI_ROOMS, RoomItem } from '../data/hotelData';

interface RoomsSliderSectionProps {
  onSelectRoom: (room: RoomItem) => void;
  onOpenAllRooms: () => void;
  onEnquire?: () => void;
}

// The data lists each room type twice (main + detail photo). Group them into two room types.
const ROOM_TYPES = [
  { main: 0, alt: 2 },
  { main: 1, alt: 3 },
].map(({ main, alt }) => ({
  room: JAWAI_ROOMS[main],
  images: [JAWAI_ROOMS[main], JAWAI_ROOMS[alt]].map((r) => ({ src: r.image, label: r.subName })),
}));

export const RoomsSliderSection: React.FC<RoomsSliderSectionProps> = ({
  onSelectRoom,
  onOpenAllRooms,
  onEnquire,
}) => {
  const [tab, setTab] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  const type = ROOM_TYPES[tab];
  const room = type.room;
  const img = type.images[imgIdx];

  const selectTab = (i: number) => {
    setTab(i);
    setImgIdx(0);
  };
  const step = (dir: 1 | -1) =>
    setImgIdx((i) => (i + dir + type.images.length) % type.images.length);

  return (
    <section id="rooms" className="w-full bg-[#FAF8F5] py-[6rem] md:py-[9rem]">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        <div className="max-w-[90rem] mb-[3rem] md:mb-[4.5rem]">
          <span className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1.5rem]">
            STAY & ROOMS
          </span>
          <h2 className="section-h2">TWO WAYS TO STAY IN JAWAI.</h2>
        </div>

        {/* Room type tabs */}
        <div className="flex flex-wrap gap-x-[3rem] gap-y-[1rem] border-b border-[#444C35]/20 mb-[3rem]">
          {ROOM_TYPES.map((t, i) => (
            <button
              key={t.room.id}
              type="button"
              onClick={() => selectTab(i)}
              className={`pb-[1.2rem] text-[1.2rem] md:text-[1.4rem] uppercase font-semibold tracking-[0.1em] cursor-pointer min-h-[4.4rem] md:min-h-0 flex items-end border-b-2 -mb-px transition-colors text-left ${
                tab === i
                  ? 'border-[#444C35] text-[#444C35]'
                  : 'border-transparent text-[#444C35]/50 hover:text-[#444C35]'
              }`}
            >
              {t.room.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.4rem] md:gap-[4rem] items-stretch">
          {/* Photo viewer */}
          <div className="md:col-span-7">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E1D7CB] group">
              <img
                key={img.src}
                src={img.src}
                alt={`${room.name}, ${img.label}`}
                className="w-full h-full object-cover cursor-zoom-in animate-in fade-in duration-500"
                onClick={() => onSelectRoom(room)}
              />
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-[1.4rem] top-1/2 -translate-y-1/2 w-[4.6rem] h-[4.6rem] bg-white/90 hover:bg-white text-[#444C35] text-[1.8rem] cursor-pointer shadow-sm"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-[1.4rem] top-1/2 -translate-y-1/2 w-[4.6rem] h-[4.6rem] bg-white/90 hover:bg-white text-[#444C35] text-[1.8rem] cursor-pointer shadow-sm"
              >
                →
              </button>
              <span className="absolute bottom-[1.4rem] left-[1.4rem] bg-white/90 text-[#444C35] text-[1.2rem] font-semibold tracking-[0.1em] uppercase px-[1.2rem] py-[0.6rem]">
                {imgIdx + 1} / {type.images.length} · {img.label}
              </span>
            </div>

            <div className="flex gap-[1.2rem] mt-[1.2rem]">
              {type.images.map((t, i) => (
                <button
                  key={t.src}
                  type="button"
                  onClick={() => setImgIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`w-[10rem] md:w-[14rem] aspect-[4/3] overflow-hidden cursor-pointer border-2 transition-opacity ${
                    i === imgIdx ? 'border-[#444C35]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={t.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Details panel */}
          <div className="md:col-span-5 flex flex-col bg-white border border-[#E1D7CB] p-[2.6rem] md:p-[4rem]">
            <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 mb-[1rem]">
              {room.subName}
            </span>
            <h3 className="text-[2.6rem] md:text-[3.4rem] leading-[1.1] uppercase font-semibold tracking-[0.02em] mb-[1.8rem]">
              {room.name}
            </h3>

            <div className="flex flex-wrap gap-[1rem] mb-[2.2rem]">
              {[room.persons, room.size].map((chip) => (
                <span
                  key={chip}
                  className="bg-[#FAF8F5] border border-[#E1D7CB] px-[1.4rem] py-[0.8rem] text-[1.3rem] md:text-[1.4rem] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p className="text-[1.5rem] md:text-[1.6rem] leading-[1.6] text-[#444C35]/90 mb-[2.4rem]">
              {room.description.split('. ').slice(0, 2).join('. ').replace(/\.?$/, '.')}
            </p>

            <ul className="space-y-[1rem] mb-[3rem]">
              {room.features.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-[1.2rem] text-[1.4rem] md:text-[1.5rem] leading-snug">
                  <span className="mt-[0.7rem] w-[0.7rem] h-[0.7rem] rounded-full bg-[#444C35] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-[1.2rem]">
              <button
                type="button"
                onClick={() => onSelectRoom(room)}
                className="px-[2.6rem] py-[1.4rem] bg-[#444C35] text-white text-[1.3rem] uppercase font-semibold tracking-[0.1em] hover:bg-black cursor-pointer"
              >
                VIEW DETAILS
              </button>
              {onEnquire && (
                <button
                  type="button"
                  onClick={onEnquire}
                  className="px-[2.6rem] py-[1.4rem] border border-[#444C35] text-[#444C35] text-[1.3rem] uppercase font-semibold tracking-[0.1em] hover:bg-[#444C35] hover:text-white transition-colors cursor-pointer"
                >
                  ENQUIRE
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-[4rem] md:mt-[5rem]">
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
      </div>
    </section>
  );
};
