import React from 'react';

interface JawaiExperienceSectionProps {
  onOpenRooms: () => void;
  onOpenDiscover: () => void;
  onOpenEnquire: () => void;
}

const CARDS = [
  {
    title: 'The Rooms',
    text: 'Terracotta, jaali and lantern-lit rooms, each with a private balcony or pool facing the Jawai granite.',
    image: '/images/days/room-blue.jpg',
    alt: 'Blue room with arched jaali niches at Jawai Retreat',
    cta: 'VIEW ROOMS',
    action: 'rooms' as const,
  },
  {
    title: 'The Safari',
    text: 'Dawn and dusk drives in an open jeep through leopard country, shared with the Rabari shepherds.',
    image: '/images/days/safari-jeep.jpg',
    alt: 'Open safari jeep on the granite hills near Jawai',
    cta: 'DISCOVER',
    action: 'discover' as const,
  },
  {
    title: 'The Table',
    text: 'Farm-led vegetarian meals, bonnet breakfasts and picnics laid out under the open sky.',
    image: '/images/days/table-still-life.jpg',
    alt: 'Picnic table with camera, binoculars and fruit',
    cta: 'ENQUIRE',
    action: 'enquire' as const,
  },
];

export const JawaiExperienceSection: React.FC<JawaiExperienceSectionProps> = ({
  onOpenRooms,
  onOpenDiscover,
  onOpenEnquire,
}) => {
  const run = (a: 'rooms' | 'discover' | 'enquire') =>
    a === 'rooms' ? onOpenRooms() : a === 'discover' ? onOpenDiscover() : onOpenEnquire();

  return (
    <section id="experiences" className="w-full bg-white py-[6rem] md:py-[10rem]">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        <div className="text-center max-w-[80rem] mx-auto mb-[4rem] md:mb-[6rem]">
          <span className="font-script text-[2.4rem] text-[#444C35] block mb-[1rem]">
            The Jawai Experience
          </span>
          <h2 className="section-h2 mb-[2rem]">SLOW DAYS, SAFARI MORNINGS, WILD COUNTRY.</h2>
          <div className="w-[12rem] h-[2px] bg-[#444C35]/40 mx-auto mb-[2rem]" />
          <p className="body-p text-[#444C35]/85">
            Two intimate stays between granite hills and wild country, with leopards, lakes and long meals close by.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-[1.6rem] md:gap-[3rem] overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-[2.2rem] px-[2.2rem] md:mx-0 md:px-0 pb-[1rem] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CARDS.map((card) => (
            <article key={card.title} className="group flex flex-col border border-[#E1D7CB] bg-white shrink-0 w-[78vw] sm:w-[46vw] md:w-auto snap-start">
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center text-center flex-1 p-[2.8rem] md:p-[3.4rem]">
                <h3 className="text-[2.4rem] md:text-[3rem] uppercase font-semibold tracking-[0.04em] mb-[1.4rem]">
                  {card.title}
                </h3>
                <p className="text-[1.5rem] md:text-[1.7rem] leading-relaxed text-[#444C35]/85 mb-[2.4rem]">
                  {card.text}
                </p>
                <button
                  type="button"
                  onClick={() => run(card.action)}
                  className="mt-auto text-[1.3rem] uppercase font-semibold tracking-[0.1em] underline underline-offset-4 hover:opacity-70 cursor-pointer"
                >
                  ● {card.cta} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
