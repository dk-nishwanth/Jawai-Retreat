import React from 'react';
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, WA_EXISTING_BOOKING, WA_CHANGE_CANCEL } from '../constants/contact';

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
          <div className="max-w-[90rem]">
            <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[1rem]">
              ABOUT US · ARRIVAL & ACCESS
            </span>
            <h3 className="section-h2 mb-[1.5rem] text-[2.2rem] md:text-[3.2rem]">
              FIND US IN JAWAI
            </h3>
            <p className="footer-text mb-[1.6rem]">
              A quiet hideaway between granite hills and wild country.<br />
              <strong>Jawai Bandh Road, Pali District, Rajasthan</strong>
            </p>
            <p className="footer-text text-[#444C35]/80">
              Use the map for live navigation, or check the simplest route by road, rail, or flight before you travel. Private transfers can be arranged with advance notice.
            </p>
          </div>

          <div className="mt-[3.5rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[3rem]">
            {[
              {
                title: 'FLIGHT',
                text: 'Fly into Udaipur or Jodhpur Airport (2.5 to 3.5 hours by road).',
                icon: (
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                ),
              },
              {
                title: 'TRAIN',
                text: 'Jawai Bandh and Falna stations connect directly from Delhi, Mumbai, Ahmedabad.',
                icon: (
                  <>
                    <rect x="4" y="3" width="16" height="16" rx="2" />
                    <path d="M4 11h16M12 3v8M8 19l-2 3M18 22l-2-3M8 15h.01M16 15h.01" />
                  </>
                ),
              },
              {
                title: 'ROAD',
                text: 'Smooth highway access from Udaipur, Jodhpur, Mount Abu and Ranakpur.',
                icon: (
                  <>
                    <path d="M4 22 8 2M20 22 16 2M12 6v2M12 12v2M12 18v2" />
                  </>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[#E1D7CB] border-t-[4px] border-t-[#444C35] bg-white p-[2.4rem] md:p-[3rem] flex gap-[1.8rem] items-start shadow-sm"
              >
                <div className="shrink-0 w-[5.2rem] h-[5.2rem] rounded-full bg-[#444C35] text-white flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[2.6rem] h-[2.6rem]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <span className="text-[1.6rem] md:text-[1.8rem] font-bold uppercase tracking-[0.08em] block mb-[0.8rem] text-[#444C35]">
                    {item.title}
                  </span>
                  <p className="text-[1.5rem] md:text-[1.7rem] leading-[1.5] text-[#444C35]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP 3 COLUMNS (≥ 768px) */}
        <div className="hidden md:grid md:grid-cols-3 gap-[4rem] mb-[5rem]">
          {/* Left Column: Brand & Tagline */}
          <div className="flex flex-col items-start footer-text">
            <img src="/logo/logo-green.png" alt="Jawai Retreat" className="h-[14rem] w-auto mb-[1.5rem]" loading="lazy" />
            <p className="mb-[1.5rem] italic opacity-90">
              "Stay close to the wild, return to the calm."
            </p>
            <p className="mb-[1.5rem]">
              Jawai Bandh Road<br />
              Pali District, Rajasthan, India
            </p>
            <div className="space-y-[0.4rem] text-[1.4rem] font-semibold uppercase tracking-[0.05em]">
              <a href={PHONE_TEL} className="hover:underline block font-bold">
                Phone: {PHONE_DISPLAY}
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
                <a href={PHONE_TEL} className="font-semibold block hover:underline">
                  {PHONE_DISPLAY}
                </a>
                <a href={`mailto:${EMAIL}`} className="block hover:underline">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-[1rem] text-[1.3rem] opacity-80 pt-[1rem]">
              <a href={WA_EXISTING_BOOKING} target="_blank" rel="noopener noreferrer" className="hover:underline">Already booked?</a>
              <span>·</span>
              <a href={WA_CHANGE_CANCEL} target="_blank" rel="noopener noreferrer" className="hover:underline">Change or cancel</a>
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
            <img src="/logo/logo-green.png" alt="Jawai Retreat" className="h-[12rem] w-auto mb-[1.5rem]" loading="lazy" />
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

          <a href={PHONE_TEL} className="font-semibold text-[1.5rem]">
            {PHONE_DISPLAY}
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
          <div className="text-[1.2rem] opacity-80 uppercase tracking-wider">
            Boutique wilderness retreat in Pali District, Rajasthan
          </div>
        </div>
      </div>
    </footer>
  );
};
