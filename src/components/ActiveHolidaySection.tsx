import React from 'react';

export const ActiveHolidaySection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-[6.5rem] md:pt-[15rem] pb-[8rem] min-h-[33rem] md:min-h-[52.2rem] flex flex-col justify-center">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.2rem] md:gap-[3rem]">
          {/* Columns 3–10 (x=274, w=893 = 119rem), about 6 lines */}
          <div className="col-span-1 md:col-start-3 md:col-span-8 flex flex-col items-start">
            <span className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1.5rem]">
              DAYS & EVENINGS IN THE WILD
            </span>
            <h2 className="section-h2 mb-[2.5rem]">
              EVERY EVENING HERE IS DIFFERENT. EVERY MORNING HAS A REASON TO WAKE UP EARLY.
            </h2>
            <p className="lead-text">
              Shape each day around Jawai's wild landscape, farm-led meals, and evenings under an open sky. From dawn safari jeep bonnet breakfasts and Rabari shepherd walks, to sunset dam sundowners, temple trails, open-reel movie nights, and conversations around the roaring bonfire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
