import { useEffect } from 'react';

/* Scroll motion, modelled on the calm editorial feel of luxury hotel sites:
   - text and image blocks fade up as they enter the viewport (staggered within a block)
   - image columns drift slightly against the scroll (parallax)
   Skipped entirely when the visitor prefers reduced motion. */
const TEXT_SELECTOR = [
  'main section:not(#rooms) h2',
  'main section:not(#rooms) h3',
  'main section:not(#rooms) p',
  'main section:not(#rooms) .cta-link',
  'footer h2',
  'footer p',
].join(',');

const IMAGE_SELECTOR = '#overview img, #wellness img, #dining img, #experiences img, #about img';

export function useScrollMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const hero = document.querySelector('main > section');
    const targets: HTMLElement[] = [];

    document.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
      if (hero && hero.contains(el)) return;
      if (el.closest('[data-no-reveal]')) return;
      targets.push(el);
    });
    document.querySelectorAll<HTMLElement>(IMAGE_SELECTOR).forEach((img) => {
      const wrap = img.parentElement;
      if (wrap && !targets.includes(wrap)) targets.push(wrap);
    });

    targets.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          // small stagger for siblings that enter together
          const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.classList.contains('reveal'));
          const idx = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = `${Math.min(idx, 4) * 90}ms`;
          el.classList.add('reveal-in');
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => io.observe(el));

    // Parallax on images (desktop only): the image drifts a little against its frame
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(IMAGE_SELECTOR));
    let ticking = false;
    const update = () => {
      ticking = false;
      if (window.innerWidth < 768) {
        imgs.forEach((i) => (i.style.transform = ''));
        return;
      }
      const vh = window.innerHeight;
      imgs.forEach((img) => {
        const frame = img.parentElement!.getBoundingClientRect();
        if (frame.bottom < -100 || frame.top > vh + 100) return;
        const progress = (frame.top + frame.height / 2 - vh / 2) / vh; // -1..1 around centre
        img.style.transform = `translate3d(0, ${(-progress * 4).toFixed(2)}%, 0) scale(1.1)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    imgs.forEach((i) => (i.style.willChange = 'transform'));
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      targets.forEach((el) => {
        el.classList.remove('reveal', 'reveal-in');
        el.style.transitionDelay = '';
      });
      imgs.forEach((i) => {
        i.style.transform = '';
        i.style.willChange = '';
      });
    };
  }, []);
}
