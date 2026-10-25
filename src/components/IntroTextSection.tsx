import React from 'react';

interface IntroTextSectionProps {
  onOverviewClick?: () => void;
}

export const IntroTextSection: React.FC<IntroTextSectionProps> = ({ onOverviewClick }) => {
  return (
    <section id="intro" className="w-full bg-white pt-[5rem] md:pt-[8rem] pb-[3rem] md:pb-[4rem] flex flex-col justify-center">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.2rem] md:gap-[3rem]">
          {/* Columns 3–10 (x=274, w=893) */}
          <div className="col-span-1 md:col-start-3 md:col-span-8 flex flex-col items-start">
            <span className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[2rem]">
              WHERE LUXURY MEETS THE UNTAMED WILD · JAWAI, RAJASTHAN
            </span>
            <div className="lead-text mb-[3rem] md:mb-[4rem] space-y-[1.4rem] md:space-y-[2rem]">
              <p>Khamma Ghani. Jawai Retreat welcomes you.</p>
              <p>
                A luxury resort where granite hills rise into open skies, and every guest is treated like family.
              </p>
              <p>
                Mornings belong to the safari, afternoons to Jawai’s only freeform pool, and evenings to a farm-to-table feast of authentic Rajasthani flavours beneath the stars.
              </p>
              <p>
                Come to unwind, to celebrate, or simply to slow down, and leave with a stay you’ll talk about for years.
              </p>
            </div>

            {/* CTA text link ("● MEET JAWAI RETREAT"): 15px (2rem desktop / 1.4rem mobile), weight 600, uppercase, tracking 0.1em/0.07em */}
            <a
              href="#overview"
              onClick={onOverviewClick}
              className="cta-link group inline-flex items-center gap-[1rem] hover:opacity-75 transition-opacity cursor-pointer relative"
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span className="relative">
                MEET JAWAI RETREAT
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#444C35] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
