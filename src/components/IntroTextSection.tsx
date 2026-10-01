import React from 'react';

interface IntroTextSectionProps {
  onOverviewClick?: () => void;
}

export const IntroTextSection: React.FC<IntroTextSectionProps> = ({ onOverviewClick }) => {
  return (
    <section id="intro" className="w-full bg-white pt-[6.5rem] md:pt-[15rem] pb-[8rem] min-h-[39.5rem] md:min-h-[61rem] flex flex-col justify-center">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.2rem] md:gap-[3rem]">
          {/* Columns 3–10 (x=274, w=893) */}
          <div className="col-span-1 md:col-start-3 md:col-span-8 flex flex-col items-start">
            <span className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[2rem]">
              BOUTIQUE WILDERNESS RETREAT · PALI DISTRICT, RAJASTHAN
            </span>
            <p className="lead-text mb-[3rem] md:mb-[4rem]">
              Two intimate stays, slow meals, granite views, and easy access to Jawai's lakeside safaris. Room information for slow days and safari mornings. Each stay includes generous room proportions, private outdoor space, attached bathrooms, and MAP dining with breakfast and dinner.
            </p>

            {/* CTA text link ("● AN OVERVIEW"): 15px (2rem desktop / 1.4rem mobile), weight 600, uppercase, tracking 0.1em/0.07em */}
            <a
              href="#overview"
              onClick={onOverviewClick}
              className="cta-link group inline-flex items-center gap-[1rem] hover:opacity-75 transition-opacity cursor-pointer relative"
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span className="relative">
                AN OVERVIEW
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#444C35] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
