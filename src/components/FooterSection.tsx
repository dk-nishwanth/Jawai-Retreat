import React from 'react';

interface FooterSectionProps {
  onOpenBooking: () => void;
  onOpenRooms: () => void;
  onOpenCookiePrefs: () => void;
  onOpenGallery?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenBooking,
  onOpenRooms,
  onOpenCookiePrefs,
  onOpenGallery
}) => {
  return (
    <footer id="footer" className="w-full bg-white text-[#444C35] pt-[6.5rem] md:pt-[6.4rem] pb-[14rem] md:pb-[6.4rem] border-t border-[#E1D7CB]">
      <div className="w-full max-w-[192rem] mx-auto px-[2.2rem] md:px-[6rem]">
        {/* About Us & Arrival Banner */}
        <div id="about" className="mb-[6rem] p-[3rem] md:p-[5rem] bg-[#FAF8F5] border border-[#E1D7CB]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[3rem] items-start">
            <div className="md:col-span-6">
              <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1rem]">
                ABOUT US · ARRIVAL & ACCESS
              </span>
              <h3 className="section-h2 mb-[1.5rem] text-[2.2rem] md:text-[3.2rem]">
                FIND US IN JAWAI
              </h3>
              <p className="footer-text mb-[2rem]">
                A quiet hideaway between granite hills and wild country.<br />
                <strong>Jawai Bandh Road, Pali District, Rajasthan</strong>
              </p>
              <p className="footer-text text-[#444C35]/80">
                Use the map for live navigation, or check the simplest route by road, rail, or flight before you travel. Private transfers can be arranged with advance notice.
              </p>
            </div>

            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-[2rem] pt-[1rem]">
              <div className="border border-[#E1D7CB] p-[2rem] bg-white">
                <span className="text-[1.2rem] font-bold uppercase tracking-wider block mb-[0.6rem]">FLIGHT</span>
                <p className="text-[1.2rem] leading-[1.5] text-[#444C35]/80">
                  Fly into Udaipur or Jodhpur Airport (2.5 to 3.5 hours by road).
                </p>
              </div>

              <div className="border border-[#E1D7CB] p-[2rem] bg-white">
                <span className="text-[1.2rem] font-bold uppercase tracking-wider block mb-[0.6rem]">TRAIN</span>
                <p className="text-[1.2rem] leading-[1.5] text-[#444C35]/80">
                  Jawai Bandh and Falna stations connect directly from Delhi, Mumbai, Ahmedabad.
                </p>
              </div>

              <div className="border border-[#E1D7CB] p-[2rem] bg-white">
                <span className="text-[1.2rem] font-bold uppercase tracking-wider block mb-[0.6rem]">ROAD</span>
                <p className="text-[1.2rem] leading-[1.5] text-[#444C35]/80">
                  Smooth highway access from Udaipur, Jodhpur, Mount Abu and Ranakpur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP 3 COLUMNS (≥ 768px) */}
        <div className="hidden md:grid md:grid-cols-3 gap-[4rem] mb-[5rem]">
          {/* Left Column: Brand & Tagline */}
          <div className="flex flex-col items-start footer-text">
            <div className="flex flex-col mb-[1.5rem]">
              <span className="font-script text-[1.4rem] leading-none mb-0.5">boutique wilderness retreat</span>
              <span className="text-[2.8rem] tracking-[0.18em] font-light uppercase">JAWAI RETREAT</span>
            </div>
            <p className="mb-[1.5rem] italic opacity-90">
              "Stay close to the wild, return to the calm."
            </p>
            <p className="mb-[1.5rem]">
              Jawai Bandh Road<br />
              Pali District, Rajasthan, India
            </p>
            <div className="space-y-[0.4rem] text-[1.4rem] font-semibold uppercase tracking-[0.05em]">
              <a href="tel:+919636085370" className="hover:underline block font-bold">
                Phone: +91 96360 85370
              </a>
              <span className="opacity-80 block normal-case">
                Granite views & lakeside leopard safaris
              </span>
            </div>
          </div>

          {/* Middle Column: Explore Nav */}
          <div className="flex flex-col items-start justify-center footer-text uppercase font-semibold tracking-[0.05em] leading-[2.2]">
            <span className="text-[1.2rem] uppercase font-semibold tracking-wider block opacity-70 mb-[0.5rem]">
              EXPLORE JAWAI RETREAT
            </span>
            <ul className="space-y-[0.6rem]">
              <li>
                <button onClick={onOpenRooms} className="hover:underline cursor-pointer">
                  STAY (ROOMS & SUITES)
                </button>
              </li>
              <li>
                <a href="#experiences" className="hover:underline">
                  EXPERIENCES & SAFARIS
                </a>
              </li>
              <li>
                <button onClick={onOpenGallery} className="hover:underline cursor-pointer">
                  GALLERY & SPACES
                </button>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  ABOUT US & ACCESS
                </a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:underline cursor-pointer">
                  DIRECT RESERVATIONS
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact & Legal */}
          <div className="flex flex-col items-start justify-center footer-text uppercase font-semibold tracking-[0.05em] leading-[2.2]">
            <div className="mb-[1.5rem]">
              <span className="text-[1.2rem] uppercase font-semibold tracking-wider block opacity-70 mb-[0.5rem]">
                CONTACT & INQUIRIES
              </span>
              <div className="leading-relaxed normal-case">
                <a href="tel:+919636085370" className="font-semibold block hover:underline">
                  +91 96360 85370
                </a>
                <a href="mailto:reservations@jawairetreat.com" className="block hover:underline">
                  reservations@jawairetreat.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-[1rem] text-[1.3rem] opacity-80 pt-[1rem]">
              <a href="#footer" className="hover:underline">Imprint</a>
              <span>·</span>
              <a href="#footer" className="hover:underline">Privacy Policy</a>
              <span>·</span>
              <button onClick={onOpenCookiePrefs} className="hover:underline cursor-pointer uppercase">Cookie Settings</button>
            </div>
          </div>
        </div>

        {/* MOBILE STACKED & CENTRED (< 768px) */}
        <div className="md:hidden flex flex-col items-center text-center footer-text gap-[2.4rem] mb-[4rem]">
          <div className="flex flex-col items-center">
            <span className="font-script text-[1.4rem] leading-none mb-1">boutique wilderness retreat</span>
            <span className="text-[2.6rem] tracking-[0.18em] font-light uppercase mb-2">JAWAI RETREAT</span>
            <p className="opacity-90">
              Jawai Bandh Road, Pali District, Rajasthan<br />
              Stay close to the wild, return to the calm.
            </p>
          </div>

          <div className="flex flex-col gap-2 font-semibold uppercase text-[1.3rem] tracking-wider">
            <button onClick={onOpenRooms} className="hover:underline">STAY</button>
            <a href="#experiences" className="hover:underline">EXPERIENCES</a>
            <button onClick={onOpenGallery} className="hover:underline">GALLERY</button>
            <a href="#about" className="hover:underline">ABOUT US</a>
          </div>

          <a href="tel:+919636085370" className="font-semibold text-[1.5rem]">
            +91 96360 85370
          </a>

          <div className="flex flex-wrap justify-center gap-[1.2rem] text-[1.2rem] opacity-75 uppercase">
            <a href="#footer">Privacy</a>
            <span>·</span>
            <button onClick={onOpenCookiePrefs} className="cursor-pointer">Cookies</button>
          </div>
        </div>

        {/* Thin 2px horizontal rule */}
        <div className="w-full h-[2px] bg-[#E1D7CB] mb-[3rem]" />

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[1.2rem] text-[#444C35]/80 gap-[1.5rem]">
          <div>
            © 2026 Jawai Retreat. All rights reserved.
          </div>
          <div className="text-[1.1rem] opacity-75 uppercase tracking-wider">
            Boutique wilderness retreat in Pali District, Rajasthan
          </div>
        </div>
      </div>
    </footer>
  );
};
