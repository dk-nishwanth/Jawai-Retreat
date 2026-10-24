import React, { useState, useEffect, useRef, useCallback } from 'react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking
}) => {
  const [showPopup, setShowPopup] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [grace, setGrace] = useState(false);
  const userPausedRef = useRef(false);
  const [isTouch] = useState(
    () => window.matchMedia('(hover: none), (pointer: coarse)').matches
  );
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [portrait] = useState(
    () => window.matchMedia('(max-width: 767px) and (orientation: portrait)').matches
  );
  const heroVisibleRef = useRef(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const HERO_VOLUME = 0.6;

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

  // Pick the file: a portrait H.264 crop for phones. On wider screens use the AV1 file
  // when this device can decode it smoothly, otherwise the 1080p H.264 file.
  useEffect(() => {
    if (portrait) {
      setVideoSrc('/video/hero-mobile.mp4');
      return;
    }
    let cancelled = false;
    const pick = async () => {
      try {
        const info = await navigator.mediaCapabilities.decodingInfo({
          type: 'file',
          video: {
            contentType: 'video/mp4; codecs="av01.0.08M.08"',
            width: 1920,
            height: 940,
            bitrate: 4800000,
            framerate: 60,
          },
        });
        if (info.supported && info.smooth) return '/video/hero-av1.mp4';
      } catch {
        // Older browsers: use the 1080p file.
      }
      return '/video/hero-1080.mp4';
    };
    void pick().then((src) => {
      if (!cancelled) setVideoSrc(src);
    });
    return () => {
      cancelled = true;
    };
  }, [portrait]);

  // iPhones only autoplay a video that is muted in the page itself. React does not
  // always write the muted attribute, so set everything iOS looks for by hand.
  const setVideoEl = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');
  }, []);

  // Start playing. Touch phones: muted autoplay (the only thing they allow).
  // Desktop: try with sound first, fall back to muted if the browser blocks it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || prefersReducedMotion) return;
    video.volume = HERO_VOLUME;
    const playMuted = () => {
      video.muted = true;
      setSoundOn(false);
      return video.play().catch(() => {
        // Blocked (for example iPhone Low Power Mode). The first tap starts it.
      });
    };

    if (isTouch) {
      void playMuted();
    } else {
      video.muted = false;
      video
        .play()
        .then(() => setSoundOn(true))
        .catch(() => void playMuted());
    }
  }, [videoSrc, prefersReducedMotion, isTouch]);

  // Give autoplay a moment before showing the manual play button.
  useEffect(() => {
    const t = window.setTimeout(() => setGrace(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  // If autoplay was blocked, start the video on the visitor's first touch or click.
  useEffect(() => {
    if (prefersReducedMotion) return;
    const startOnGesture = () => {
      const video = videoRef.current;
      if (video && video.paused && heroVisibleRef.current && !document.hidden && !userPausedRef.current) {
        video.play().catch(() => {});
      }
    };
    const events = ['pointerdown', 'touchend', 'click', 'keydown'] as const;
    events.forEach((e) => window.addEventListener(e, startOnGesture, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, startOnGesture));
  }, [prefersReducedMotion]);

  // Pause (which also silences it) when the hero is mostly scrolled out of view,
  // or when the browser tab is in the background. Resume when it comes back.
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || prefersReducedMotion) return;

    const syncPlayback = () => {
      if (heroVisibleRef.current && !document.hidden && !userPausedRef.current) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        syncPlayback();
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.75, 1] }
    );
    observer.observe(section);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, [videoSrc, prefersReducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.muted || video.paused) {
      video.muted = false;
      video.volume = HERO_VOLUME;
      video.play().catch(() => {});
      setSoundOn(true);
    } else {
      video.muted = true;
      setSoundOn(false);
    }
  };

  // All three video files are already cropped (the caption burned into the original
  // footage is cut out), so they simply fill the hero.
  const mediaFit = 'inset-0 h-full object-center';

  return (
    <section ref={sectionRef} className="relative w-full h-screen min-h-[77.9rem] overflow-hidden select-none bg-black">
      {/* Hero video: autoplay, muted, loop, playsinline. Fades in once it can play.
          With reduced motion it is not autoplayed and stays on its first frame. */}
      {/* Poster = first frame of the video, so it appears instantly and the fade is seamless */}
      <img
        src={portrait ? '/video/hero-poster-mobile.jpg' : '/video/hero-poster.jpg'}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className={`absolute w-full object-cover ${mediaFit}`}
      />
      {videoSrc && (
        <video
          ref={setVideoEl}
          src={videoSrc}
          poster={portrait ? '/video/hero-poster-mobile.jpg' : '/video/hero-poster.jpg'}
          autoPlay={isTouch && !prefersReducedMotion}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute w-full object-cover ${mediaFit}`}
        />
      )}

      {/* If autoplay is blocked (iPhone Low Power Mode, data saver, reduced motion), offer a clear play button */}
      {grace && !isPlaying && !userPausedRef.current && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-30 w-[8rem] h-[8rem] rounded-full bg-black/40 backdrop-blur-sm border border-white/60 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-[3.4rem] h-[3.4rem] ml-[0.4rem]" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}

      {/* Controls: pause/play and sound. Autoplay with sound is blocked by most browsers until the visitor taps */}
      <div className="absolute top-[calc(env(safe-area-inset-top,0px)+9.5rem)] right-[1.4rem] md:top-[11.5rem] md:right-[6rem] z-30 flex flex-col gap-[1rem] items-end">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="flex items-center justify-center h-[4.6rem] w-[4.6rem] rounded-full bg-black/35 backdrop-blur-sm text-white border border-white/40 hover:bg-black/55 transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-[2rem] h-[2rem]" fill="currentColor" aria-hidden="true">
            {isPlaying ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5v14l11-7z" />}
          </svg>
        </button>
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Turn video sound off' : 'Turn video sound on'}
          className="flex items-center gap-[0.9rem] h-[4.6rem] min-w-[4.6rem] justify-center px-[1.3rem] rounded-full bg-black/35 backdrop-blur-sm text-white border border-white/40 hover:bg-black/55 transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[2.2rem] h-[2.2rem] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H3v6h3l5 4V5z" />
            {soundOn ? (
              <>
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M18.5 5.5a9 9 0 0 1 0 13" />
              </>
            ) : (
              <>
                <path d="m16 9 5 6" />
                <path d="m21 9-5 6" />
              </>
            )}
          </svg>
          <span className="hidden md:inline text-[1.2rem] uppercase font-semibold tracking-[0.12em]">
            {soundOn ? 'Sound on' : 'Sound off'}
          </span>
        </button>
      </div>

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
      <div className="absolute bottom-[8.5rem] md:bottom-[4.5rem] left-1/2 -translate-x-1/2 md:left-[6rem] md:translate-x-0 w-[90vw] md:w-[75rem] text-center md:text-left z-20 pointer-events-none">
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
          className={`absolute bottom-[17.5rem] sm:bottom-[3rem] left-[1.4rem] right-[1.4rem] sm:left-auto sm:right-[3rem] z-30 sm:w-[96rem] bg-[#9BA08A] text-white p-[1.6rem] pr-[4rem] sm:p-[3.5rem] border border-white/60 animate-in fade-in duration-300`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowPopup(false)}
            className="absolute top-[0.8rem] sm:top-[1.2rem] right-[1.2rem] sm:right-[1.6rem] text-white hover:opacity-75 text-[2.2rem] leading-none cursor-pointer p-[0.4rem]"
            aria-label="Close popup"
          >
            ✕
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[2.4rem]">
            {/* 206×206 photo in cream polaroid frame (#E1D7CB, 8px border, thicker bottom) */}
            <div className="max-sm:hidden shrink-0 bg-[#E1D7CB] p-[0.8rem] pb-[2.4rem] border border-[#C8BAAA]">
              <div className="w-[18rem] h-[18rem] sm:w-[20.6rem] sm:h-[20.6rem] overflow-hidden">
                <img
                  src="/images/ota/ota-02.jpg"
                  alt="Premium Balcony Room with granite landscape view at Jawai Retreat"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right text: Popup H3 (5rem desktop / 2.5rem mobile) + Popup paragraph (2rem desktop / 1.4rem mobile) */}
            <div className="flex-1 pr-[2rem]">
              <h2 className="popup-h3 max-sm:!text-[2rem] mb-[0.8rem] sm:mb-[1.2rem]">
                SLOW DAYS, SAFARI MORNINGS.
              </h2>
              <p className="popup-p max-sm:hidden mb-[0.8rem] max-sm:mb-[1rem]">
                Wake up to dramatic granite hills, wild leopard country, and farm-fresh Marwari breakfasts under open skies.
              </p>
              <p className="max-sm:hidden popup-p mb-[1.6rem] opacity-90">
                Each stay includes generous proportions, private outdoor space, attached bathrooms, and MAP dining.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="cta-link max-sm:!text-[1.2rem] text-white underline underline-offset-4 cursor-pointer hover:opacity-85 inline-block"
              >
                ● EXPLORE ROOMS & BOOK →
              </button>
            </div>
          </div>
        </aside>
      )}
    </section>
  );
};
