import React, { useState } from 'react';
import { ROOMS_EXACT_LIST, RoomItem } from '../data/hotelData';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: RoomItem | null;
  mode?: 'book' | 'enquire';
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  preselectedRoom,
  mode = 'book'
}) => {
  if (!isOpen) return null;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 5);

  const [arrival, setArrival] = useState(tomorrow.toISOString().split('T')[0]);
  const [departure, setDeparture] = useState(nextWeek.toISOString().split('T')[0]);
  const [selectedRoomId, setSelectedRoomId] = useState(preselectedRoom?.id || ROOMS_EXACT_LIST[0].id);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentRoom = ROOMS_EXACT_LIST.find((r) => r.id === selectedRoomId) || ROOMS_EXACT_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[85rem] bg-white border border-[#E1D7CB] overflow-hidden max-h-[92vh] flex flex-col text-[#444C35]">
        {/* Header */}
        <div className="p-[3rem] border-b border-[#E1D7CB] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[1.1rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[0.4rem]">
              FEEL GOOD RESORT JOHANNIS · TIROLO
            </span>
            <h3 className="text-[2.2rem] md:text-[2.8rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
              {mode === 'enquire' ? 'NON-BINDING INQUIRY' : 'DIRECT RESERVATION'}
            </h3>
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

        {submitted ? (
          <div className="p-[4rem] md:p-[6rem] text-center overflow-y-auto">
            <div className="w-[6rem] h-[6rem] border border-[#444C35] flex items-center justify-center mx-auto mb-[2rem] text-[#444C35] text-[2.5rem]">
              ✓
            </div>
            <h4 className="text-[2.2rem] uppercase font-semibold tracking-[0.03em] mb-[1.5rem] text-[#444C35]">
              THANK YOU, {fullName}!
            </h4>
            <p className="text-[1.4rem] leading-relaxed max-w-[55rem] mx-auto mb-[3rem] text-[#444C35]">
              Your inquiry for <strong>{currentRoom.name}</strong> from {arrival} to {departure} has been sent directly to the Schupfer family. We will respond promptly with a personalized quote and best-rate guarantee to <strong>{email}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[4rem] py-[1.4rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-[3rem] md:p-[4rem] overflow-y-auto flex-1 space-y-[2rem]">
            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
              <div>
                <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                  ARRIVAL DATE *
                </label>
                <input
                  type="date"
                  required
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] focus:border-[#444C35] outline-none"
                />
              </div>
              <div>
                <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                  DEPARTURE DATE *
                </label>
                <input
                  type="date"
                  required
                  value={departure}
                  min={arrival}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] focus:border-[#444C35] outline-none"
                />
              </div>
            </div>

            {/* Room selection */}
            <div>
              <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                ROOM / SUITE *
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] focus:border-[#444C35] outline-none"
              >
                {ROOMS_EXACT_LIST.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} ({r.size} · {r.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="grid grid-cols-2 gap-[1.5rem]">
              <div>
                <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                  ADULTS
                </label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] outline-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
              <div>
                <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                  CHILDREN
                </label>
                <select
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] outline-none"
                >
                  <option value="0">None</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                </select>
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] pt-[1rem]">
              <div>
                <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Rossi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] outline-none"
                />
              </div>
              <div>
                <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maria@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                PHONE / MOBILE
              </label>
              <input
                type="tel"
                placeholder="e.g. +39 0473 123456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] outline-none"
              />
            </div>

            <div>
              <label className="text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]">
                SPECIAL WISHES / REMARKS
              </label>
              <textarea
                rows={2}
                placeholder="Dietary requests (gluten-free, vegan), preferred room location, or spa wishes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] outline-none"
              />
            </div>

            <div className="pt-[1rem] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1.5rem]">
              <span className="text-[1.2rem] text-[#444C35]/70">
                * Best Price & Direct Booking Guarantee
              </span>
              <button
                type="submit"
                className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[4rem] py-[1.4rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
              >
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
