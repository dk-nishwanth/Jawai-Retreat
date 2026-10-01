import React, { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenCookiePrefs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenCookiePrefs
}) => {
  const [showPopup, setShowPopup] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Ensure autoplay works seamlessly
  useEffect(() => {
    if (videoRef.current && !prefersReducedMotion) {
      if (videoRef.current.readyState >= 3) setVideoReady(true);
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: silent catch
      });
    }
  }, [prefersReducedMotion]);

  const videoUrl = "https://typo3.johannis.it/fileadmin/user_upload/hotel-johannis-pool-outdoor-view.mp4";
  const posterUrl = "/images/hero_johannis_resort_1790837379724.jpg";

  return (
    <section className="relative w-full h-screen min-h-[77.9rem] md:h-[120rem] overflow-hidden select-none bg-black">
      {/* Reduced motion fallback: show poster image instead of video */}
      {prefersReducedMotion ? (
        <img
          src={posterUrl}
          alt="Outdoor infinity pool at golden hour with palms and mountain view"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Video Element: autoplay, muted, loop, playsinline, preload="auto", object-fit: cover */
        <>
        {/* Poster stays underneath; the video fades in over it once it can play */}
        <img
          src={posterUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <video
          ref={videoRef}
          onCanPlay={() => setVideoReady(true)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Mobile source: 720p / mobile media query */}
          <source
            src={videoUrl}
            media="(max-width:767px)"
            type="video/mp4"
          />
          {/* Desktop full source */}
          <source
            src={videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </>
      )}

      {/* Faint warm overlay on top: rgba(68,76,53,0.12) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(68, 76, 53, 0.12)" }}
      />
      {/* Subtle bottom gradient to ensure caption contrast */}
      <div className="absolute inset-x-0 bottom-0 h-[25rem] bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      {/* Hero h1 caption: centred at the bottom (11.25px / 1.5rem desktop, 13px / 1.2rem mobile, tracking 0.1em desktop / 0.07em mobile) */}
      <div className="absolute bottom-[6rem] md:bottom-[4.5rem] left-1/2 -translate-x-1/2 w-[90vw] md:w-[65rem] text-center z-20 pointer-events-none">
        <h1 className="hero-caption">
          JAWAI RETREAT.<br />
          TWO INTIMATE STAYS, SLOW MEALS, GRANITE VIEWS, AND LAKESIDE SAFARIS.
        </h1>
      </div>

      {/* FLOATING POPUP CARD (Sage-green background #9BA08A, dismissible) */}
      {showPopup && (
        <aside
          role="complementary"
          aria-label="Jawai Retreat Stay Offer"
          className="fixed md:absolute bottom-[8rem] sm:bottom-[3rem] right-0 sm:right-[3rem] z-30 w-full sm:w-[96rem] bg-[#9BA08A] text-white p-[2rem] sm:p-[3.5rem] border border-white/60 animate-in fade-in duration-300"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowPopup(false)}
            className="absolute top-[1.2rem] right-[1.6rem] text-white hover:opacity-75 text-[2.2rem] leading-none cursor-pointer"
            aria-label="Close popup"
          >
            ✕
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[2.4rem]">
            {/* 206×206 photo in cream polaroid frame (#E1D7CB, 8px border, thicker bottom) */}
            <div className="shrink-0 bg-[#E1D7CB] p-[0.8rem] pb-[2.4rem] border border-[#C8BAAA]">
              <div className="w-[18rem] h-[18rem] sm:w-[20.6rem] sm:h-[20.6rem] overflow-hidden">
                <img
                  src="/images/jawai_premium_balcony_room_1790838351238.jpg"
                  alt="Premium Balcony Room with granite landscape view at Jawai Retreat"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right text: Popup H3 (5rem desktop / 2.5rem mobile) + Popup paragraph (2rem desktop / 1.4rem mobile) */}
            <div className="flex-1 pr-[2rem]">
              <h2 className="popup-h3 mb-[1.2rem]">
                SLOW DAYS, SAFARI MORNINGS.
              </h2>
              <p className="popup-p mb-[0.8rem]">
                Wake up to dramatic granite hills, wild leopard country, and farm-fresh Marwari breakfasts under open skies.
              </p>
              <p className="popup-p mb-[1.6rem] opacity-90">
                Each stay includes generous proportions, private outdoor space, attached bathrooms, and MAP dining.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="cta-link text-white underline underline-offset-4 cursor-pointer hover:opacity-85 inline-block"
              >
                ● EXPLORE ROOMS & BOOK →
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* COOKIE BANNER: System font (-apple-system, "Segoe UI", Roboto) */}
      {showCookieBanner && (
        <div className="cookie-banner-box fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E1D7CB] flex flex-col pointer-events-auto">
          <div className="w-full max-w-[192rem] mx-auto px-[3rem] sm:px-[6rem] py-[1.4rem] flex flex-col md:flex-row md:items-center justify-between gap-[1.6rem]">
            <p className="cookie-text max-w-[100rem]">
              We use cookies to give you the most serene experience while exploring Jawai Retreat. You can customize your preferences anytime.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[1rem] shrink-0">
              <button
                type="button"
                onClick={onOpenCookiePrefs}
                className="cookie-btn bg-[#EAEFF2] text-[#444C35] hover:bg-[#DCE3E8] cursor-pointer whitespace-nowrap"
              >
                Manage preferences
              </button>
              <button
                type="button"
                onClick={() => setShowCookieBanner(false)}
                className="cookie-btn bg-[#EAEFF2] text-[#444C35] hover:bg-[#DCE3E8] cursor-pointer whitespace-nowrap"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={() => setShowCookieBanner(false)}
                className="cookie-btn bg-[#30363C] text-white hover:bg-black cursor-pointer whitespace-nowrap"
              >
                Accept all
              </button>
            </div>
          </div>

          <div className="bg-[#F2F5F8] border-t border-[#E2E8EC] px-[3rem] sm:px-[6rem] py-[0.8rem] flex gap-[2rem] max-w-[192rem] mx-auto w-full">
            <button onClick={onOpenCookiePrefs} className="cookie-link text-[#7A8895] hover:underline cursor-pointer">
              Cookie Policy information
            </button>
            <span className="text-[#7A8895]">·</span>
            <a href="#footer" className="cookie-link text-[#7A8895] hover:underline">
              Privacy & Jawai Retreat Terms
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
