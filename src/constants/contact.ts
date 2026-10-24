// Single source of truth for how guests reach Jawai Retreat.
// Change a value here and it updates the booking form, footer and WhatsApp links.

// WhatsApp number in international format, digits only (no + or spaces).
export const WHATSAPP_NUMBER = '919636085370';

export const PHONE_DISPLAY = '+91 96360 85370';
export const PHONE_TEL = 'tel:+919636085370';
export const EMAIL = 'reservations@jawairetreat.com';

// AIOSELL booking engine link for live availability and online booking.
// Paste the full URL here (for example 'https://...') to turn on the
// "Check live availability & book online" button. Leave empty to keep
// the WhatsApp-only flow.
export const BOOKING_ENGINE_URL = '';

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Pre-filled WhatsApp messages for guests who already have a booking.
export const WA_EXISTING_BOOKING = waLink(
  'Hi Jawai Retreat, I have already booked (Agoda / Booking.com / Direct).\nBooking ID: \nName on booking: \nCheck-in date: \nI would like to: '
);
export const WA_CHANGE_CANCEL = waLink(
  'Hi Jawai Retreat, I would like to change or cancel my booking.\nBooking ID: \nName on booking: \nCheck-in date: \nRequest: '
);
