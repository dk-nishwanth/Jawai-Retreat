import React from 'react';

export const VineyardTextSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-[6.5rem] md:pt-[15rem] pb-[6rem] md:pb-[10rem] min-h-[21rem] md:min-h-[36.6rem] flex flex-col justify-center">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[2.2rem] md:gap-[3rem]">
          {/* Columns 3–10 (x=274, w=893 = 119rem), left-aligned, NO CTA */}
          <div className="col-span-1 md:col-start-3 md:col-span-8 flex flex-col items-start">
            <span className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1.5rem]">
              GRANITE HILLS & WILD COUNTRY
            </span>
            <p className="lead-text">
              Two intimate stays, slow meals, granite views, and easy access to Jawai's lakeside safaris. A haven of tranquillity between granite hills and wild country. Scroll further to explore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
