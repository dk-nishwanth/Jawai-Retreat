import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenRooms: () => void;
  onOpenEnquire: () => void;
}

interface MenuToggleProps {
  open: boolean;
  onClick: () => void;
  className?: string;
  size?: 'desktop' | 'mobile';
}

/* Burger <-> close icon. The two icons crossfade (close 0.1s delay, burger 0.2s delay, 0.5s)
   and the close mark draws itself with stroke-dashoffset. Hover turns the strokes terracotta. */
const MenuToggle: React.FC<MenuToggleProps> = ({ open, onClick, className = '', size = 'desktop' }) => {
  const box = size === 'desktop' ? 'w-[4rem] h-[3rem]' : 'w-[3.3rem] h-[3.3rem]';
  const icon = size === 'desktop' ? 'w-[4rem] h-[2rem]' : 'w-[1.8rem] h-[1.2rem]';
  const close = size === 'desktop' ? 'w-[2.6rem] h-[2.6rem]' : 'w-[1.7rem] h-[1.7rem]';
  const stroke = 'stroke-current transition-[stroke,stroke-dashoffset] duration-500 group-hover:text-[#CD754D]';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="site-menu"
      className={`group relative flex items-center justify-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#005FCC] ${box} ${className}`}
    >
      {/* burger */}
      <svg
        viewBox="0 0 40 20"
        fill="none"
        className={`absolute ${icon} transition-all duration-500 ${open ? 'opacity-0 delay-0 scale-90 rotate-45' : 'opacity-100 delay-200'}`}
        aria-hidden="true"
      >
        <path d="M1 5 H39" strokeWidth="1.6" strokeLinecap="round" className={stroke} />
        <path d="M1 15 H39" strokeWidth="1.6" strokeLinecap="round" className={stroke} />
      </svg>
      {/* close */}
      <svg
        viewBox="0 0 30 30"
        fill="none"
        className={`absolute ${close} transition-opacity duration-500 ${open ? 'opacity-100 delay-100' : 'opacity-0 delay-0'}`}
        aria-hidden="true"
      >
        <path
          d="M4 4 L26 26"
          pathLength={1}
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ strokeDasharray: 1, strokeDashoffset: open ? 0 : 1, transitionDelay: open ? '0.25s' : '0s' }}
          className={stroke}
        />
        <path
          d="M26 4 L4 26"
          pathLength={1}
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ strokeDasharray: 1, strokeDashoffset: open ? 0 : 1, transitionDelay: open ? '0.4s' : '0s' }}
          className={stroke}
        />
      </svg>
    </button>
  );
};

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

  // Close on Escape, lock page scroll while the menu is open
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  const toggleMenu = () => setDrawerOpen((o) => !o);
  const MENU_LINKS: { label: string; href: string; onClick?: () => void }[] = [
    { label: 'RETREAT OVERVIEW', href: '#intro' },
    { label: 'STAY & ROOM INFORMATION', href: '#rooms', onClick: onOpenRooms },
    { label: 'EXPERIENCES & SAFARIS', href: '#experiences' },
    { label: 'FARM TO TABLE DINING', href: '#dining' },
    { label: 'GALLERY & RETREAT SPACES', href: '#gallery' },
    { label: 'ABOUT US & ARRIVAL', href: '#about' },
    { label: 'ENQUIRE DIRECTLY', href: '#', onClick: onOpenEnquire },
    { label: 'BOOK DIRECTLY', href: '#', onClick: onOpenBooking }
  ];
  const dark = isScrolled || drawerOpen;

  return (
    <>
      {/* DESKTOP HEADER (≥ 768px) */}
      <header
        className={`hidden md:block fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 border-b border-[#E1D7CB] py-[1.2rem]'
            : 'bg-transparent py-[1.46rem]'
        }`}
        style={{ minHeight: isScrolled ? '8rem' : 'auto' }}
      >
        <div className={`w-full px-[6rem] flex items-center justify-between relative transition-[text-shadow] duration-500 ${dark ? '' : '[text-shadow:0_1px_14px_rgba(0,0,0,0.45)]'}`}>
          {/* Left: "● ENQUIRE NOW" & "● BOOK DIRECTLY" (gap 33px = ~4.4rem, 1.5rem desktop / 400 weight) */}
          <div className="flex items-center gap-[4.4rem]">
            <button
              type="button"
              onClick={onOpenEnquire}
              className={`header-nav-link transition-colors flex items-center gap-[0.8rem] cursor-pointer group ${
                dark ? 'text-[#444C35]' : 'text-white'
              }`}
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span>ENQUIRE NOW</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className={`header-nav-link transition-colors flex items-center gap-[0.8rem] cursor-pointer group ${
                dark ? 'text-[#444C35]' : 'text-white'
              }`}
            >
              <span className="bullet-dot group-hover:scale-125" />
              <span>BOOK DIRECTLY</span>
            </button>
          </div>

          {/* Centre: Logo */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-[0.4rem] flex flex-col items-center origin-top transition-transform duration-500 ${isScrolled ? 'scale-[0.8]' : 'scale-100'}`}>
            <span
              className={`font-script text-[1.4rem] leading-none select-none mb-1 ${
                dark ? 'text-[#444C35]' : 'text-white'
              }`}
            >
              boutique wilderness retreat
            </span>
            <a
              href="#"
              className={`select-none transition-colors text-[2.8rem] tracking-[0.18em] font-light uppercase leading-none ${
                dark ? 'text-[#444C35]' : 'text-white'
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

            {/* Animated burger / close toggle */}
            <MenuToggle
              open={drawerOpen}
              onClick={toggleMenu}
              className={dark ? 'text-[#444C35]' : 'text-white'}
            />
          </div>
        </div>
      </header>

      {/* MOBILE TOP BAR (< 768px) */}
      <div className={`md:hidden absolute top-[4.5rem] left-0 right-0 z-[50] flex flex-col items-center justify-center pointer-events-none transition-colors duration-500 ${drawerOpen ? 'text-[#444C35]' : 'text-white'}`}>
        <span className="font-script text-[1.4rem] leading-none mb-1">
          boutique wilderness retreat
        </span>
        <div className="text-[2.6rem] tracking-[0.18em] font-light uppercase pointer-events-auto">
          JAWAI RETREAT
        </div>
      </div>

      {/* MOBILE FIXED BOTTOM BAR (y≈804 of 844) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[50] bg-white border-t border-[#E1D7CB] py-[1.2rem] px-[2rem] flex items-center justify-between">
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

        {/* Circular 33px animated menu button */}
        <MenuToggle
          open={drawerOpen}
          onClick={toggleMenu}
          size="mobile"
          className="rounded-full bg-[#E1D7CB] text-[#444C35]"
        />
      </div>

      {/* MENU: white + sand panels slide up from the bottom, links rise in one by one */}
      <div
        id="site-menu"
        aria-hidden={!drawerOpen}
        className={`fixed inset-0 z-[45] ${drawerOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
        style={{ transition: drawerOpen ? 'visibility 0s' : 'visibility 0s linear 0.9s' }}
      >
        {/* dimmed page behind */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* white layer (desktop only) */}
        <div
          className={`hidden md:block absolute bottom-0 right-0 h-full w-[57%] bg-white transition-transform duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${drawerOpen ? 'translate-y-0 delay-0' : 'translate-y-full delay-150'}`}
        />

        {/* sand panel */}
        <div
          className={`absolute bottom-0 right-0 h-full w-full md:w-[65%] bg-[#E1D7CB] text-[#444C35] transition-transform duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-y-auto ${drawerOpen ? 'translate-y-0 delay-[120ms]' : 'translate-y-full delay-0'}`}
        >
          <div className="min-h-full flex flex-col justify-between px-[4rem] md:px-[9rem] pt-[16rem] md:pt-[17rem] pb-[10rem] md:pb-[5rem]">
            <nav className="flex flex-col gap-[1.6rem] md:gap-[1.8rem]" aria-label="Main menu">
              {MENU_LINKS.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  tabIndex={drawerOpen ? 0 : -1}
                  onClick={(e) => {
                    setDrawerOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  style={{ transitionDelay: drawerOpen ? `${450 + i * 60}ms` : '0ms' }}
                  className={`block w-fit text-[2.6rem] md:text-[4.5rem] uppercase font-semibold tracking-[0.03em] leading-tight transition-all duration-500 hover:translate-x-[1.5rem] hover:text-[#CD754D] ${drawerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[3rem]'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div
              style={{ transitionDelay: drawerOpen ? `${450 + MENU_LINKS.length * 60}ms` : '0ms' }}
              className={`pt-[3rem] mt-[3rem] border-t border-[#444C35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[2rem] footer-text uppercase font-semibold transition-all duration-500 ${drawerOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[2rem]'}`}
            >
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
      </div>
    </>
  );
};
