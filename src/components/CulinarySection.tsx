import React from 'react';

interface CulinarySectionProps {
  onOpenBooking: () => void;
}

export const CulinarySection: React.FC<CulinarySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="dining" className="w-full bg-white pt-[6.5rem] md:pt-[15rem] pb-[10rem]">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.2rem] md:gap-[3rem]">
          {/* DESKTOP ROW 1: Two portrait photos side by side */}
          <div className="hidden md:block md:col-start-5 md:col-span-4 w-full h-[69rem] overflow-hidden border-0">
            <img
              src="/src/assets/images/jawai_dining_courtyard_1790838383373.jpg"
              alt="Jawai Retreat dining and lounge setting"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="hidden md:block md:col-start-9 md:col-span-4 w-full h-[69rem] overflow-hidden border-0 md:mt-[3.5rem]">
            <img
              src="/src/assets/images/editorial_garden_path_1790837689103.jpg"
              alt="Jawai Retreat landscaped pathway and farm approach"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* DESKTOP ROW 2: Wide landscape photo in cols 5–12 */}
          <div className="hidden md:block md:col-start-5 md:col-span-8 w-full h-[69rem] overflow-hidden border-0 mt-[3rem]">
            <img
              src="/src/assets/images/hero_jawai_retreat_1790838322856.jpg"
              alt="Outdoor seating area and courtyard at Jawai Retreat"
              className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* MOBILE IMAGES */}
          <div className="md:hidden flex flex-col gap-[2rem] mb-[3rem]">
            <div className="w-[16.7rem] h-[20.2rem] overflow-hidden">
              <img
                src="/src/assets/images/jawai_dining_courtyard_1790838383373.jpg"
                alt="Jawai Retreat dining setting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full h-[20.2rem] overflow-hidden">
              <img
                src="/src/assets/images/hero_jawai_retreat_1790838322856.jpg"
                alt="Jawai Retreat outdoor seating area"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* TEXT BLOCK: cols 5–12 (x=503, w=893 = 119rem) 45px (6rem) below */}
          <div className="col-span-1 md:col-start-5 md:col-span-8 mt-[4rem] md:mt-[6rem]">
            <h2 className="section-h2 mb-[2rem] md:mb-[3rem]">
              FARM TO TABLE & DINING IN THE WILD. PURE VEGETARIAN MARWARI MEALS.
            </h2>

            <p className="body-strong mb-[2rem]">
              Walk the farm with the host, see what is growing, and watch the week's seasonal produce arrive on your table by evening.
            </p>

            <p className="body-p mb-[3rem] md:mb-[4rem]">
              Start your day with a Safari Bonnet Breakfast or leisurely morning chai on the terrace. In the evening, enjoy pure vegetarian Marwari-style cooking paired with your included dinner. Savor High Tea at Dam View or an exclusive Private Candlelight Dinner under the stars with lanterns and a dedicated farm-sourced spread.
            </p>

            <button
              type="button"
              onClick={onOpenBooking}
              className="cta-link group inline-flex items-center gap-[1rem] hover:opacity-75 transition-opacity cursor-pointer relative"
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span className="relative">
                EXPLORE DINING EXPERIENCES
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#444C35] transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
