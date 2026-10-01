/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroTextSection } from './components/IntroTextSection';
import { EditorialAsymmetricSection } from './components/EditorialAsymmetricSection';
import { FullBleedVideoBand } from './components/FullBleedVideoBand';
import { WellnessSection } from './components/WellnessSection';
import { RoomsSliderSection } from './components/RoomsSliderSection';
import { VineyardTextSection } from './components/VineyardTextSection';
import { CulinarySection } from './components/CulinarySection';
import { ShortcutTeaserSection } from './components/ShortcutTeaserSection';
import { ActiveHolidaySection } from './components/ActiveHolidaySection';
import { ClosingVideoBand } from './components/ClosingVideoBand';
import { FooterSection } from './components/FooterSection';
import { VideoModal } from './components/VideoModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { AllRoomsModal } from './components/AllRoomsModal';
import { GalleryModal } from './components/GalleryModal';
import { ExperiencesModal } from './components/ExperiencesModal';
import { BookingDrawer } from './components/BookingDrawer';
import { CookiePreferencesModal } from './components/CookiePreferencesModal';
import { RoomItem, ExperienceItem } from './data/hotelData';
import { useScrollMotion } from './hooks/useScrollMotion';

export default function App() {
  useScrollMotion();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState<RoomItem | null>(null);
  const [isAllRoomsModalOpen, setIsAllRoomsModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isExperiencesModalOpen, setIsExperiencesModalOpen] = useState(false);
  const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false);
  const [bookingMode, setBookingMode] = useState<'book' | 'enquire'>('book');
  const [bookingPreselectedRoom, setBookingPreselectedRoom] = useState<RoomItem | null>(null);
  const [isCookiePrefsOpen, setIsCookiePrefsOpen] = useState(false);

  const handleOpenBooking = (room?: RoomItem) => {
    setBookingMode('book');
    setBookingPreselectedRoom(room || null);
    setIsBookingDrawerOpen(true);
  };

  const handleOpenEnquire = (room?: RoomItem) => {
    setBookingMode('enquire');
    setBookingPreselectedRoom(room || null);
    setIsBookingDrawerOpen(true);
  };

  const handleBookExperience = (exp: ExperienceItem) => {
    setBookingMode('enquire');
    setIsBookingDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#444C35] font-sans selection:bg-[#E1D7CB] selection:text-[#444C35]">
      {/* HEADER: fixed/sticky, transparent over hero */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenRooms={() => setIsAllRoomsModalOpen(true)}
        onOpenEnquire={() => handleOpenEnquire()}
      />

      <main>
        {/* SECTION 1: HERO (100vh) */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenCookiePrefs={() => setIsCookiePrefsOpen(true)}
        />

        {/* SECTION 2: INTRO TEXT (Centred 8-column block) */}
        <IntroTextSection
          onOverviewClick={() => {
            const el = document.getElementById('overview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* SECTION 3: IMAGE + TEXT (editorial, asymmetric) */}
        <EditorialAsymmetricSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* SECTION 4: FULL-BLEED VIDEO BAND (~688px tall) */}
        <FullBleedVideoBand
          onPlayVideo={() => setIsVideoModalOpen(true)}
          imageSrc="/images/jawai_leopard_safari_landscape_1790838368353.jpg"
          altText="Granite hills and retreat landscape near Jawai"
          tagline="LEOPARDS, GRANITE HILLS & OPEN SKIES · JAWAI RETREAT FILM"
        />

        {/* SECTION 5: WELLNESS / POOL (The Blue Heart Freeform Pool) */}
        <WellnessSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* SECTION 6: ROOMS & SUITES SLIDER (Jawai rooms carousel) */}
        <RoomsSliderSection
          onSelectRoom={(room) => setSelectedRoomForModal(room)}
          onOpenAllRooms={() => setIsAllRoomsModalOpen(true)}
        />

        {/* SECTION 7: VINEYARD / GRANITE TEXT */}
        <VineyardTextSection />

        {/* SECTION 8: CULINARY (Farm to table, pure vegetarian Marwari meals) */}
        <CulinarySection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* SECTION 9: SHORTCUT / TEASER (Leopard safaris & Rabari coexistence) */}
        <ShortcutTeaserSection
          onOpenDiscover={() => setIsExperiencesModalOpen(true)}
        />

        {/* SECTION 10: ACTIVE HOLIDAY / EXPERIENCES STATEMENT */}
        <ActiveHolidaySection />

        {/* SECTION 11: CLOSING FULL-BLEED VIDEO BAND */}
        <ClosingVideoBand
          onPlayVideo={() => setIsVideoModalOpen(true)}
        />
      </main>

      {/* FOOTER (white background, olive text, multi-column with about & arrival info) */}
      <FooterSection
        onOpenBooking={() => handleOpenBooking()}
        onOpenRooms={() => setIsAllRoomsModalOpen(true)}
        onOpenCookiePrefs={() => setIsCookiePrefsOpen(true)}
        onOpenGallery={() => setIsGalleryModalOpen(true)}
      />

      {/* Modals & Interactive Overlays */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <RoomDetailModal
        room={selectedRoomForModal}
        onClose={() => setSelectedRoomForModal(null)}
        onBook={(room) => {
          setSelectedRoomForModal(null);
          handleOpenBooking(room);
        }}
      />

      <AllRoomsModal
        isOpen={isAllRoomsModalOpen}
        onClose={() => setIsAllRoomsModalOpen(false)}
        onSelectRoom={(room) => {
          setSelectedRoomForModal(room);
        }}
      />

      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
      />

      <ExperiencesModal
        isOpen={isExperiencesModalOpen}
        onClose={() => setIsExperiencesModalOpen(false)}
        onBookExperience={handleBookExperience}
      />

      <BookingDrawer
        isOpen={isBookingDrawerOpen}
        onClose={() => setIsBookingDrawerOpen(false)}
        preselectedRoom={bookingPreselectedRoom}
        mode={bookingMode}
      />

      <CookiePreferencesModal
        isOpen={isCookiePrefsOpen}
        onClose={() => setIsCookiePrefsOpen(false)}
      />
    </div>
  );
}
