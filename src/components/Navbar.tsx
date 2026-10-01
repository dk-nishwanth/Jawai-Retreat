import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenRooms: () => void;
  onOpenEnquire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenRooms,
  onOpenEnquire
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP HEADER (≥ 768px) */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 border-b border-[#E1D7CB] py-[1.2rem]'
            : 'bg-transparent py-[1.46rem]'
        }`}
        style={{ minHeight: isScrolled ? '8rem' : 'auto' }}
      >
        <div className="w-full px-[6rem] flex items-center justify-between relative">
          {/* Left: "● ENQUIRE NOW" & "● BOOK DIRECTLY" (gap 33px = ~4.4rem, 1.5rem desktop / 400 weight) */}
          <div className="flex items-center gap-[4.4rem]">
            <button
              type="button"
              onClick={onOpenEnquire}
              className={`header-nav-link transition-colors flex items-center gap-[0.8rem] cursor-pointer group ${
                isScrolled ? 'text-[#444C35]' : 'text-white'
              }`}
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span>ENQUIRE NOW</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className={`header-nav-link transition-colors flex items-center gap-[0.8rem] cursor-pointer group ${
                isScrolled ? 'text-[#444C35]' : 'text-white'
              }`}
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span>BOOK DIRECTLY</span>
            </button>
          </div>

          {/* Centre: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[0.4rem] flex flex-col items-center">
            <span
              className={`font-script text-[1.4rem] leading-none select-none mb-1 ${
                isScrolled ? 'text-[#444C35]' : 'text-white'
              }`}
            >
              boutique wilderness retreat
            </span>
            <a
              href="#"
              className={`select-none transition-colors text-[2.8rem] tracking-[0.18em] font-light uppercase leading-none ${
                isScrolled ? 'text-[#444C35]' : 'text-white'
              }`}
              aria-label="Jawai Retreat Home"
            >
              JAWAI RETREAT
            </a>
          </div>

          {/* Right: "● EXPERIENCES" & "● STAY" on pale sand translucent strip + hamburger */}
          <div className="flex items-center gap-[3rem]">
            <div className="bg-[#E1D7CB]/90 px-[2rem] py-[0.8rem] flex items-center gap-[3rem]">
              <a
                href="#experiences"
                className="header-nav-link text-[#444C35] flex items-center gap-[0.8rem] hover:opacity-75 transition-opacity"
              >
                <span className="bullet-dot" />
                <span>EXPERIENCES</span>
              </a>

              <button
                type="button"
                onClick={onOpenRooms}
                className="header-nav-link text-[#444C35] flex items-center gap-[0.8rem] hover:opacity-75 transition-opacity cursor-pointer"
              >
                <span className="bullet-dot" />
                <span>STAY & ROOMS</span>
              </button>
            </div>

            {/* Hamburger: 30×15 made of two thin horizontal lines at x=1365 */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="w-[4rem] h-[2rem] flex flex-col justify-between items-end cursor-pointer group"
              aria-label="Open navigation menu"
            >
              <span
                className={`w-[4rem] h-[1.5px] transition-colors ${
                  isScrolled ? 'bg-[#444C35]' : 'bg-white'
                }`}
              />
              <span
                className={`w-[4rem] h-[1.5px] transition-colors ${
                  isScrolled ? 'bg-[#444C35]' : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE TOP BAR (< 768px) */}
      <div className="md:hidden absolute top-[4.5rem] left-0 right-0 z-30 flex flex-col items-center justify-center pointer-events-none">
        <span className="font-script text-[1.4rem] text-white leading-none mb-1">
          boutique wilderness retreat
        </span>
        <div className="text-[2.6rem] tracking-[0.18em] font-light uppercase text-white pointer-events-auto">
          JAWAI RETREAT
        </div>
      </div>

      {/* MOBILE FIXED BOTTOM BAR (y≈804 of 844) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E1D7CB] py-[1.2rem] px-[2rem] flex items-center justify-between">
        <div className="flex items-center gap-[2.5rem] text-[#444C35]">
          <button
            type="button"
            onClick={onOpenEnquire}
            className="header-nav-link flex items-center gap-[0.6rem] cursor-pointer"
          >
            <span className="bullet-dot" />
            <span>ENQUIRY</span>
          </button>
          <button
            type="button"
            onClick={onOpenBooking}
            className="header-nav-link flex items-center gap-[0.6rem] cursor-pointer"
          >
            <span className="bullet-dot" />
            <span>BOOKING</span>
          </button>
        </div>

        {/* Circular 33px menu button */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="w-[3.3rem] h-[3.3rem] rounded-full-play bg-[#E1D7CB] text-[#444C35] flex items-center justify-center cursor-pointer p-1"
          aria-label="Open mobile menu"
        >
          <div className="w-[1.6rem] h-[0.9rem] flex flex-col justify-between">
            <span className="w-full h-[1.5px] bg-[#444C35]" />
            <span className="w-full h-[1.5px] bg-[#444C35]" />
          </div>
        </button>
      </div>

      {/* MENU DRAWER: sand (#E1D7CB) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/40">
          <div className="relative w-full md:w-[65vw] h-full bg-[#E1D7CB] text-[#444C35] p-[4rem] sm:p-[6rem] flex flex-col justify-between overflow-y-auto transition-transform duration-500 ease-out animate-in slide-in-from-right">
            {/* Drawer Top */}
            <div className="flex items-center justify-between pb-[4rem] border-b border-[#444C35]/20">
              <div className="flex flex-col">
                <span className="font-script text-[1.6rem] leading-none">boutique wilderness retreat</span>
                <span className="text-[3rem] font-light uppercase tracking-[0.2em]">JAWAI RETREAT</span>
              </div>

              {/* Close "×" */}
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="text-[3rem] font-light w-[4rem] h-[4rem] flex items-center justify-center hover:opacity-75 cursor-pointer"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Main Links */}
            <nav className="my-auto py-[4rem] flex flex-col gap-[2.4rem]">
              {[
                { label: 'RETREAT OVERVIEW', href: '#intro' },
                { label: 'STAY & ROOM INFORMATION', href: '#rooms', onClick: onOpenRooms },
                { label: 'EXPERIENCES & SAFARIS', href: '#experiences' },
                { label: 'FARM TO TABLE DINING', href: '#dining' },
                { label: 'GALLERY & RETREAT SPACES', href: '#gallery' },
                { label: 'ABOUT US & ARRIVAL', href: '#about' },
                { label: 'ENQUIRE DIRECTLY', href: '#', onClick: onOpenEnquire },
                { label: 'BOOK DIRECTLY', href: '#', onClick: onOpenBooking }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setDrawerOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-[3.2rem] sm:text-[4.5rem] uppercase font-semibold tracking-[0.03em] leading-tight hover:translate-x-[1.5rem] transition-transform text-[#444C35]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Bottom Drawer info */}
            <div className="pt-[3rem] border-t border-[#444C35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[2rem] footer-text uppercase font-semibold">
              <div className="flex items-center gap-[2rem]">
                <button
                  type="button"
                  onClick={() => setLang('EN')}
                  className={`cursor-pointer ${lang === 'EN' ? 'font-bold underline' : 'opacity-60'}`}
                >
                  EN
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setLang('HI')}
                  className={`cursor-pointer ${lang === 'HI' ? 'font-bold underline' : 'opacity-60'}`}
                >
                  HI
                </button>
              </div>

              <div className="text-[1.3rem] font-normal normal-case opacity-80">
                Jawai Bandh Road, Pali District, Rajasthan · +91 96360 85370
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
