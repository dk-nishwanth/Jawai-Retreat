import React, { useState } from 'react';
import { RoomItem } from '../data/hotelData';
import {
  BOOKING_ENGINE_URL,
  WA_CHANGE_CANCEL,
  WA_EXISTING_BOOKING,
  waLink,
} from '../constants/contact';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoom?: RoomItem | null;
  mode?: 'book' | 'enquire';
}

// Room names as they appear in the AIOSELL booking system, so staff can
// match a WhatsApp request to the right room type straight away.
const ROOM_TYPES = [
  { id: 'deluxe', label: 'Premium Balcony Rooms', aiosell: 'Deluxe Balcony Room', size: '512 sq ft including balcony' },
  { id: 'villa', label: 'Luxury Room with Private Pool', aiosell: 'Villa With Private Pool', size: '752 sq ft including pool and sit-out' },
];

const MEAL_PLANS = [
  { id: 'MAP', label: 'Breakfast + Dinner (MAP)' },
  { id: 'CP', label: 'Breakfast only (CP)' },
  { id: 'EP', label: 'Room only (EP)' },
];

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const pretty = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

const inputCls =
  'w-full text-[1.4rem] p-[1.2rem] border border-[#E1D7CB] bg-white text-[#444C35] focus:border-[#444C35] outline-none';
const labelCls = 'text-[1.2rem] uppercase font-semibold tracking-[0.1em] block mb-[0.6rem] text-[#444C35]';

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  preselectedRoom,
  mode = 'book'
}) => {
  if (!isOpen) return null;

  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() + 1);
  const end = new Date(today);
  end.setDate(end.getDate() + 2);

  const [arrival, setArrival] = useState(toISO(start));
  const [departure, setDeparture] = useState(toISO(end));
  const [roomId, setRoomId] = useState(
    preselectedRoom && preselectedRoom.id.startsWith('luxury') ? 'villa' : 'deluxe'
  );
  const [mealPlan, setMealPlan] = useState('MAP');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const room = ROOM_TYPES.find((r) => r.id === roomId) || ROOM_TYPES[0];
  const plan = MEAL_PLANS.find((m) => m.id === mealPlan) || MEAL_PLANS[0];
  const nights = Math.max(
    1,
    Math.round((new Date(departure).getTime() - new Date(arrival).getTime()) / 86400000)
  );

  const handleArrival = (value: string) => {
    setArrival(value);
    if (departure <= value) {
      const d = new Date(value + 'T00:00:00');
      d.setDate(d.getDate() + 1);
      setDeparture(toISO(d));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || departure <= arrival) return;
    const lines = [
      `Hi Jawai Retreat, I would like to ${mode === 'enquire' ? 'enquire about' : 'book'} a stay.`,
      '',
      `Guest name: ${fullName}`,
      `Room type: ${room.aiosell} (${room.label})`,
      `Meal plan: ${plan.label}`,
      `Check-in: ${pretty(arrival)}`,
      `Check-out: ${pretty(departure)}`,
      `Nights: ${nights}`,
      `Adults: ${adults}`,
      `Children: ${children}${children !== '0' ? ' (ages in notes)' : ''}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      notes ? `Notes: ${notes}` : '',
    ].filter((l, i, arr) => l !== '' || (i > 0 && arr[i - 1] !== ''));
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-[2rem] md:p-[4rem] animate-in fade-in duration-200">
      <div className="relative w-full max-w-[85rem] bg-white border border-[#E1D7CB] overflow-hidden max-h-[92vh] flex flex-col text-[#444C35]">
        {/* Header */}
        <div className="p-[3rem] border-b border-[#E1D7CB] flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <span className="text-[1.1rem] uppercase font-semibold tracking-[0.1em] text-[#444C35]/70 block mb-[0.4rem]">
              JAWAI RETREAT · PALI DISTRICT, RAJASTHAN
            </span>
            <h3 className="text-[2.2rem] md:text-[2.8rem] uppercase font-semibold tracking-[0.03em] text-[#444C35]">
              {mode === 'enquire' ? 'ENQUIRE ABOUT YOUR STAY' : 'DIRECT RESERVATION'}
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
              ONE LAST STEP, {fullName.split(' ')[0]}
            </h4>
            <p className="text-[1.4rem] leading-relaxed max-w-[55rem] mx-auto mb-[1.5rem] text-[#444C35]">
              Your request for <strong>{room.label}</strong> ({pretty(arrival)} to {pretty(departure)}, {nights}{' '}
              {nights === 1 ? 'night' : 'nights'}) is ready in WhatsApp. <strong>Please press send</strong> to
              share it with our team.
            </p>
            <p className="text-[1.3rem] leading-relaxed max-w-[55rem] mx-auto mb-[3rem] text-[#444C35]/80">
              We will check availability and reply on WhatsApp. If your dates are free, we will send a secure
              payment link there. Your stay is confirmed once our team confirms it.
            </p>
            <div className="flex flex-wrap justify-center gap-[1.2rem]">
              <button
                type="button"
                onClick={onClose}
                className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[4rem] py-[1.4rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
              >
                CLOSE
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[3rem] py-[1.4rem] border border-[#444C35] text-[#444C35] hover:bg-[#444C35] hover:text-white transition-colors cursor-pointer"
              >
                EDIT REQUEST
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-[3rem] md:p-[4rem] overflow-y-auto flex-1 space-y-[2rem]">
            {BOOKING_ENGINE_URL && (
              <div className="p-[2rem] bg-[#FAF8F5] border border-[#E1D7CB] flex flex-col sm:flex-row sm:items-center justify-between gap-[1.5rem]">
                <div>
                  <span className="text-[1.4rem] font-semibold block">See live availability and book online</span>
                  <span className="text-[1.2rem] text-[#444C35]/75">
                    Real-time rooms and rates. Prefer to chat? Fill the form below instead.
                  </span>
                </div>
                <a
                  href={BOOKING_ENGINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[2.6rem] py-[1.4rem] bg-[#444C35] text-white hover:bg-black text-center whitespace-nowrap"
                >
                  BOOK ONLINE →
                </a>
              </div>
            )}

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
              <div>
                <label className={labelCls}>CHECK-IN *</label>
                <input
                  type="date"
                  required
                  min={toISO(today)}
                  value={arrival}
                  onChange={(e) => handleArrival(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>CHECK-OUT *</label>
                <input
                  type="date"
                  required
                  value={departure}
                  min={arrival}
                  onChange={(e) => setDeparture(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Room + meal plan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
              <div>
                <label className={labelCls}>ROOM TYPE *</label>
                <select value={roomId} onChange={(e) => setRoomId(e.target.value)} className={inputCls}>
                  {ROOM_TYPES.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <span className="text-[1.2rem] text-[#444C35]/70 block mt-[0.6rem]">{room.size}</span>
              </div>
              <div>
                <label className={labelCls}>MEAL PLAN</label>
                <select value={mealPlan} onChange={(e) => setMealPlan(e.target.value)} className={inputCls}>
                  {MEAL_PLANS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests */}
            <div className="grid grid-cols-2 gap-[1.5rem]">
              <div>
                <label className={labelCls}>ADULTS</label>
                <select value={adults} onChange={(e) => setAdults(e.target.value)} className={inputCls}>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>CHILDREN</label>
                <select value={children} onChange={(e) => setChildren(e.target.value)} className={inputCls}>
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
                <label className={labelCls}>FULL NAME *</label>
                <input
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Name as on your ID"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>EMAIL ADDRESS *</label>
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className={labelCls}>PHONE / MOBILE</label>
              <input
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>SPECIAL REQUESTS</label>
              <textarea
                rows={2}
                placeholder="Children's ages, dietary needs, arrival time, safari or celebration plans…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={inputCls}
              />
            </div>

            <div className="pt-[1rem] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1.5rem]">
              <span className="text-[1.2rem] text-[#444C35]/70 max-w-[38rem]">
                We reply on WhatsApp to confirm availability. For same-day or last-room requests, WhatsApp is
                the fastest way to reach us.
              </span>
              <button
                type="submit"
                className="text-[1.3rem] uppercase font-semibold tracking-[0.1em] px-[4rem] py-[1.4rem] bg-[#444C35] text-white hover:bg-black cursor-pointer"
              >
                SEND ON WHATSAPP
              </button>
            </div>

            <div className="pt-[1.5rem] border-t border-[#E1D7CB] flex flex-wrap gap-x-[2.4rem] gap-y-[0.4rem] text-[1.2rem]">
              <a
                href={WA_EXISTING_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 py-[1rem]"
              >
                Already booked on Agoda, Booking.com or direct?
              </a>
              <a
                href={WA_CHANGE_CANCEL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 py-[1rem]"
              >
                Change or cancel a booking
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
