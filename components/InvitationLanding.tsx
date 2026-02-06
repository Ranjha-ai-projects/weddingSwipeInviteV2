// c:\Users\Ragini Maddheshiya\Downloads\swipe-wedding-invite\components\InvitationLanding.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronRight } from 'lucide-react';

interface InvitationLandingProps {
  onStartJourney: () => void;
}

const InvitationLanding: React.FC<InvitationLandingProps> = ({ onStartJourney }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      // Use min-h-[100dvh] for dynamic viewport height and ensure full width
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between bg-cover bg-center overflow-hidden p-4 md:p-6"
      style={{ backgroundImage: 'url(/images/-image.png)' }}
    >
      {/* Decorative Background Elements */}
      {/* Reduced overlay opacity for a softer look */}
      <div className="absolute inset-0 w-full h-full bg-[#faf7f5]/50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-rose-200 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-rose-300 rounded-full blur-2xl" />
      </div>

      {/* Top Center: Animated Heart and Names */}
      {/* Adjusted top margin and padding for better vertical fit */}
      <header className="py-3 sm:py-4 md:py-6 text-center z-10 shrink-0 mt-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
          className="flex items-center justify-center mb-1"
        >
          <Heart className="text-rose-400 fill-rose-400 w-5 h-5 animate-pulse" /> {/* Slightly smaller heart */}
        </motion.div>
        {/* Adjusted font size for 'Sarah & James' */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight font-script">
          Sarah & James
        </h1>
        {/* Reduced font size for subtext on smaller screens */}
        <p className="text-rose-500 font-medium tracking-widest uppercase text-[10px] sm:text-[11px] md:text-sm mt-1">
          Are Getting Married
        </p>
      </header>

      {/* Image Card */}
      {/* Ensure main takes full available height and centers the card */}
      <main className="relative w-full max-w-sm md:max-w-md flex-grow flex items-center justify-center min-h-0 py-2 px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          // Max-width to prevent overflow on very narrow screens
          // max-h to ensure it doesn't get too tall on short screens, allowing header/footer space
          className="relative w-full max-w-[calc(100vw-2rem)] sm:max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl max-h-[70vh] flex-shrink"
        >
          {/* Background Image */}
          <img
            src="/images/landingpage-image.png"
            alt="Engagement"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          {/* Top badge */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10"> {/* Adjusted top position */}
            <span className="bg-rose-500/95 text-white text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full backdrop-blur shadow-md whitespace-nowrap"> {/* Adjusted horizontal padding */}
              WE ARE GETTING MARRIED
            </span>
          </div>

          {/* Content on image */}
          {/* Adjusted padding and space-y for internal content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white space-y-2 sm:space-y-3">
            {/* Adjusted font size for 'You're Invited' */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif leading-tight">
              You're Invited<br />An invitation to our forever
            </h2>

            {/* Adjusted font size and max-width for paragraph */}
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/90 max-w-[160px] sm:max-w-[200px] md:max-w-xs leading-normal">
              We’ve planned more than a wedding — we’ve planned moments.
              Swipe through our journey and celebrate with us.
            </p>

            {/* CTA button with adjusted top margin */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartJourney}
              className="mt-4 self-start bg-white/90 text-gray-900 font-semibold px-5 py-2.5 rounded-full shadow-lg backdrop-blur text-sm sm:text-base" // Adjusted padding and font size
            >
              💖 Open the Invitation
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Bottom Hint: Swipe animation */}
      {/* Adjusted padding and font size for footer */}
      <footer className="py-2 sm:py-3 md:py-4 text-center z-10 shrink-0 mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 text-[9px] sm:text-[10px] md:text-xs"
        >
          <p className="px-4 font-medium uppercase tracking-wider">Swipe right to begin our story</p>
          <motion.div
            animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-1 flex justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default InvitationLanding;