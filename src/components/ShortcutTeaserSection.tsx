import React from 'react';

interface ShortcutTeaserSectionProps {
  onOpenDiscover: () => void;
}

export const ShortcutTeaserSection: React.FC<ShortcutTeaserSectionProps> = ({
  onOpenDiscover
}) => {
  return (
    <section id="experiences" className="w-full bg-white pt-[6.5rem] md:pt-[15rem] pb-[10rem] overflow-hidden">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* DESKTOP VIEW (≥ 768px) */}
        <div className="hidden md:block relative min-h-[110rem] flex justify-center items-center">
          {/* Two photos touching at centre seam */}
          <div className="absolute inset-0 flex items-start justify-center">
            {/* Left Photo (615×765 = 82rem × 102rem) */}
            <div className="w-[82rem] h-[102rem] overflow-hidden border-0">
              <img
                src="/src/assets/images/jawai_leopard_safari_landscape_1790838368353.jpg"
                alt="Granite hills and leopard safari landscape in Jawai"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Photo (615×675 = 82rem × 90rem) */}
            <div className="w-[82rem] h-[90rem] overflow-hidden border-0">
              <img
                src="/src/assets/images/hero_jawai_retreat_1790838322856.jpg"
                alt="Jawai Retreat exterior and granite landscape"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Centred Text Block (435px = 58rem, cols 5–8) overlaying the seam on white panel */}
          <div className="relative z-20 w-[58rem] bg-white p-[5rem] text-center border border-[#E1D7CB] my-auto">
            {/* Homemade Apple handwritten script label */}
            <span className="font-script text-[2.6rem] text-[#444C35] block mb-[1.5rem]">
              Wild Jawai
            </span>

            {/* Olive H2 (45px / 6rem, centred, 3 lines) */}
            <h2 className="section-h2 mb-[2rem]">
              LEOPARD SAFARIS & RABARI COEXISTENCE
            </h2>

            {/* Centred 15px (2rem) paragraph */}
            <p className="body-p mb-[3rem]">
              This is not a zoo. The leopards live here, alongside the Rabari people, in one of India's most remarkable coexistence landscapes.
            </p>

            {/* Centred CTA "● DISCOVER" with dot */}
            <button
              type="button"
              onClick={onOpenDiscover}
              className="cta-link group inline-flex items-center gap-[1rem] hover:opacity-75 transition-opacity cursor-pointer relative"
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span className="relative">
                DISCOVER ALL EXPERIENCES
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#444C35] transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE VIEW (< 768px) */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full h-[38rem] overflow-hidden mb-[2rem]">
            <img
              src="/src/assets/images/jawai_leopard_safari_landscape_1790838368353.jpg"
              alt="Jawai safari"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full bg-white p-[3rem] text-center border border-[#E1D7CB] mb-[2rem]">
            <span className="font-script text-[2rem] text-[#444C35] block mb-[1rem]">
              Wild Jawai
            </span>
            <h2 className="section-h2 mb-[1.5rem]">
              LEOPARD SAFARIS & COEXISTENCE
            </h2>
            <p className="body-p mb-[2.5rem]">
              The leopards live here alongside the Rabari people in a remarkable coexistence landscape.
            </p>
            <button
              type="button"
              onClick={onOpenDiscover}
              className="cta-link group inline-flex items-center gap-[0.8rem] underline underline-offset-4 cursor-pointer"
            >
              <span className="bullet-dot" />
              <span>DISCOVER ALL EXPERIENCES</span>
            </button>
          </div>

          <div className="w-full h-[35rem] overflow-hidden">
            <img
              src="/src/assets/images/hero_jawai_retreat_1790838322856.jpg"
              alt="Jawai landscape"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
