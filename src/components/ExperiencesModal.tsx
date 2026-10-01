import React from 'react';
import { JAWAI_EXPERIENCES, ExperienceItem } from '../data/hotelData';

interface ExperiencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookExperience: (exp: ExperienceItem) => void;
}

export const ExperiencesModal: React.FC<ExperiencesModalProps> = ({
  isOpen,
  onClose,
  onBookExperience
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[125rem] bg-white border border-[#E1D7CB] overflow-hidden max-h-[92vh] flex flex-col text-[#444C35]">
        {/* Header */}
        <div className="p-[3rem] border-b border-[#E1D7CB] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[0.4rem]">
              EXPERIENCES · JAWAI RETREAT
            </span>
            <h3 className="text-[2.2rem] md:text-[3rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
              EVERY EVENING HERE IS DIFFERENT
            </h3>
            <p className="text-[1.3rem] text-[#444C35]/80 mt-1">
              Every morning has a reason to wake up early. Shape each day around Jawai's wild landscape.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-[4rem] h-[4rem] flex items-center justify-center text-[2rem] hover:opacity-75 cursor-pointer border border-[#E1D7CB]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* List of Experiences */}
        <div className="p-[3rem] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-[2.4rem]">
          {JAWAI_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="border border-[#E1D7CB] hover:border-[#444C35] p-[2.4rem] transition-colors flex flex-col justify-between bg-[#FAF8F5]"
            >
              <div>
                <div className="flex items-center justify-between text-[1.1rem] uppercase font-semibold tracking-wider text-[#444C35]/70 mb-[0.8rem]">
                  <span>{exp.category}</span>
                  <span className="text-[#444C35] font-bold">{exp.cost}</span>
                </div>

                <h4 className="text-[1.8rem] md:text-[2.2rem] uppercase font-semibold tracking-[0.03em] text-[#444C35] mb-[1rem]">
                  {exp.title}
                </h4>

                <p className="text-[1.3rem] leading-[1.6] text-[#444C35]/90 mb-[1.8rem]">
                  {exp.description}
                </p>

                <ul className="space-y-[0.6rem] text-[1.2rem] text-[#444C35] mb-[2rem]">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-[0.8rem]">
                      <span className="bullet-dot mt-[0.5rem]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-[1.5rem] border-t border-[#E1D7CB] flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookExperience(exp);
                  }}
                  className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] px-[2.5rem] py-[1rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
                >
                  RESERVE EXPERIENCE →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-[2rem] bg-[#FAF8F5] border-t border-[#E1D7CB] text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[3.5rem] py-[1.2rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
          >
            CLOSE EXPERIENCES
          </button>
        </div>
      </div>
    </div>
  );
};
