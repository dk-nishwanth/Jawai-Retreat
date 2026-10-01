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

  const video1080 = "/video/hero-1080.mp4";
  const video720 = "/video/hero-720.mp4";

  return (
    <section className="relative w-full h-screen min-h-[77.9rem] overflow-hidden select-none bg-black">
      {/* Hero video: autoplay, muted, loop, playsinline. Fades in once it can play.
          With reduced motion it is not autoplayed and stays on its first frame. */}
      {/* Poster = first frame of the video, so it appears instantly and the fade is seamless */}
      <picture>
        <source media="(max-width:767px)" srcSet="/video/hero-poster-mobile.jpg" />
        <img
          src="/video/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>
      <video
        ref={videoRef}
        autoPlay={!prefersReducedMotion}
        loop={!prefersReducedMotion}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={video720} media="(max-width:767px)" type="video/mp4" />
        <source src={video1080} type="video/mp4" />
      </video>

      {/* Faint warm overlay on top: rgba(68,76,53,0.12) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(68, 76, 53, 0.12)" }}
      />
      {/* Top scrim so the white header and logo stay readable over bright footage */}
      <div className="absolute inset-x-0 top-0 h-[26rem] md:h-[18rem] bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none" />
      {/* Subtle bottom gradient to ensure caption contrast */}
      <div className="absolute inset-x-0 bottom-0 h-[25rem] bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      {/* Hero h1 caption: centred at the bottom (11.25px / 1.5rem desktop, 13px / 1.2rem mobile, tracking 0.1em desktop / 0.07em mobile) */}
      <div className="absolute bottom-[6rem] md:bottom-[4.5rem] left-1/2 -translate-x-1/2 md:left-[6rem] md:translate-x-0 w-[90vw] md:w-[75rem] text-center md:text-left z-20 pointer-events-none">
        <h1 className="hero-caption md:!text-left">
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
