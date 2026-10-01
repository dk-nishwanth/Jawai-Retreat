import React from 'react';

interface WellnessSectionProps {
  onOpenBooking: () => void;
}

export const WellnessSection: React.FC<WellnessSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="wellness" className="w-full bg-white pt-[6.5rem] md:pt-[15rem] pb-[10rem] overflow-hidden">
      <div className="w-full max-w-[192rem] mx-auto">
        {/* DESKTOP VIEW (≥ 768px) */}
        <div className="hidden md:block relative h-[150rem]">
          {/* Half-viewport large photo flush to left edge (x=0) */}
          <div className="absolute left-0 top-[14rem] w-[94.5rem] h-[118rem] overflow-hidden border-0">
            <img
              src="/images/hero_jawai_retreat_1790838322856.jpg"
              alt="Freeform designer pool at Jawai Retreat"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Overlapping square photo (cols 5–8: x=503 = 67rem, 435×435 = 58rem × 58rem), sitting 105px (14rem) higher */}
          <div className="absolute left-[67rem] top-0 w-[58rem] h-[58rem] overflow-hidden border-0 z-10">
            <img
              src="/images/jawai_luxury_pool_room_1790838337213.jpg"
              alt="Luxury Room with Private Pool poolside seating"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sage Card in cols 5–12 (x=67rem, w=119rem) */}
          <div className="absolute left-[67rem] right-[6rem] top-[50rem] bg-[#9BA08A] p-[6rem] z-20">
            {/* White centred H2 (45px / 6rem, 2 lines) */}
            <h2 className="section-h2 text-white text-center mb-[4rem]">
              THE BLUE HEART<br />FREEFORM DESIGNER POOL
            </h2>

            {/* Body paragraph in white on sage */}
            <p className="body-p text-white/95 mb-[4rem]">
              Complimentary for staying guests. The only freeform designer pool in Jawai, shaped around the organic lines of the landscape instead of straight city-hotel edges. Private access for Pool Room guests and open access for all staying guests. Best hours: early morning and golden hour as light reflects across the calm water and granite hills.
            </p>

            {/* CTA link */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="cta-link text-white group inline-flex items-center gap-[1rem] hover:opacity-75 transition-opacity cursor-pointer relative"
            >
              <span className="bullet-dot bg-white group-hover:scale-125" />
              <span className="relative">
                TO THE POOL & WELLNESS RETREAT
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE VIEW (< 768px) */}
        <div className="md:hidden px-[2.2rem] flex flex-col items-center">
          <div className="w-[26.5rem] h-[26.5rem] overflow-hidden z-10 mb-[-6rem]">
            <img
              src="/images/jawai_luxury_pool_room_1790838337213.jpg"
              alt="Poolside seating"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full h-[45.5rem] overflow-hidden">
            <img
              src="/images/hero_jawai_retreat_1790838322856.jpg"
              alt="The Blue Heart Designer Pool"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full bg-[#9BA08A] p-[3rem] text-white mt-[2rem]">
            <h2 className="section-h2 text-white text-center mb-[2rem]">
              THE BLUE HEART · DESIGNER POOL
            </h2>
            <p className="body-p text-white mb-[2.5rem]">
              The only freeform designer pool in Jawai, shaped around the organic lines of the landscape instead of straight city-hotel edges. Early morning and golden hour swims overlooking the wilderness.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="cta-link text-white group inline-flex items-center gap-[0.8rem] underline underline-offset-4 cursor-pointer"
            >
              <span className="bullet-dot bg-white" />
              <span>TO THE POOL AREA</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
