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
      className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col items-center justify-between bg-cover bg-center overflow-hidden p-4 md:p-6"
      style={{ backgroundImage: 'url(/images/landinpage-image.png)' }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[#faf7f5]/60 pointer-events-none" /> {/* Overlay for soft pastel effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-rose-200 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-rose-300 rounded-full blur-2xl" />
      </div>

      {/* Top Center: Animated Heart and Names */}
      <header className="text-center py-4 sm:py-6 z-10 shrink-0 mt-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 10 }}
          className="flex items-center justify-center mb-1"
        >
          <Heart className="text-rose-400 fill-rose-400 w-6 h-6 animate-pulse" />
        </motion.div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight font-script">
          Sarah & James
        </h1>
        <p className="text-rose-500 font-medium tracking-widest uppercase text-[11px] md:text-sm mt-1">
          Are Getting Married
        </p>
      </header>

      {/* Image Card */}
      <main className="relative w-full max-w-sm md:max-w-md flex-grow flex items-center justify-center min-h-0 py-2 px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full max-w-[calc(100vw-2rem)] sm:max-w-sm aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl max-h-[70vh]"
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
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-rose-500/95 text-white text-xs font-semibold tracking-widest px-5 py-1.5 rounded-full backdrop-blur shadow-md whitespace-nowrap">
              WE ARE GETTING MARRIED
            </span>
          </div>


          {/* Content on image */}
          <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 text-white">

            <h2 className="text-2xl md:text-3xl font-serif leading-tight">
              You're Invited<br />An invitation to our forever
            </h2>

            <p className="mt-3 text-sm md:text-base text-white/90 max-w-[200px] sm:max-w-xs leading-normal">
              Swipe through our journey and celebrate with us.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartJourney}
              className="mt-6 self-start bg-white/90 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg backdrop-blur"
            >
              💖 Open the Invitation
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Swipe hint */}
      <footer className="py-4 sm:py-6 text-center text-gray-400 text-[10px] md:text-xs tracking-widest">
        Swipe right to discover our journey
        <motion.div
          animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-2 flex justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default InvitationLanding;