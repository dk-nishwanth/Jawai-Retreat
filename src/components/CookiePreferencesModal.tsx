import React, { useState } from 'react';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose
}) => {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[65rem] bg-white border border-[#E1D7CB] overflow-hidden p-[3rem] md:p-[4rem] text-[#444C35]">
        <div className="flex items-center justify-between pb-[2rem] border-b border-[#E1D7CB] mb-[2.5rem]">
          <h3 className="text-[2rem] md:text-[2.4rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
            COOKIE PREFERENCES
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-[2rem] hover:opacity-75 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="text-[1.4rem] leading-relaxed text-[#444C35] mb-[2.5rem] font-normal">
          We use cookies to enhance website navigation, analyze site usage, and assist in our marketing efforts for the feel good Resort Johannis.
        </p>

        <div className="space-y-[1.5rem] mb-[3rem]">
          <div className="flex items-start justify-between gap-[2rem] p-[1.5rem] bg-[#FAF8F5] border border-[#E1D7CB]">
            <div>
              <span className="text-[1.3rem] uppercase font-semibold block mb-[0.2rem]">Essential Cookies</span>
              <span className="text-[1.2rem] text-[#444C35]/70 block">Required for the core functionality of booking and navigation.</span>
            </div>
            <span className="text-[1.2rem] font-semibold uppercase text-[#444C35]/60 shrink-0">Always Active</span>
          </div>

          <div className="flex items-start justify-between gap-[2rem] p-[1.5rem] bg-[#FAF8F5] border border-[#E1D7CB]">
            <div>
              <span className="text-[1.3rem] uppercase font-semibold block mb-[0.2rem]">Performance & Analytics</span>
              <span className="text-[1.2rem] text-[#444C35]/70 block">Helps us understand how guests navigate between wellness and suites.</span>
            </div>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1 cursor-pointer accent-[#444C35]"
            />
          </div>

          <div className="flex items-start justify-between gap-[2rem] p-[1.5rem] bg-[#FAF8F5] border border-[#E1D7CB]">
            <div>
              <span className="text-[1.3rem] uppercase font-semibold block mb-[0.2rem]">Marketing & Social Media</span>
              <span className="text-[1.2rem] text-[#444C35]/70 block">Allows tailoring offers and seasonal South Tyrol arrangements.</span>
            </div>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-1 cursor-pointer accent-[#444C35]"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-[1.5rem] pt-[2rem] border-t border-[#E1D7CB]">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#EAEFF2] text-[#444C35] hover:bg-[#DCE3E8] text-[1.3rem] px-[2.6rem] py-[0.8rem] font-normal cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#30363C] text-white hover:bg-black text-[1.3rem] px-[3rem] py-[0.8rem] font-medium cursor-pointer"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
};
