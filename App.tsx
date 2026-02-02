
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Deck from './components/Deck';
import GuestbookForm from './components/GuestbookForm';
import InvitationLanding from './components/InvitationLanding'; // Import the new component
import { cardsData } from './data';
import { Heart, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [showLanding, setShowLanding] = useState(true); // New state for landing page

  const handleAllSwiped = () => {
    setIsFinished(true);
  };

  const handleStartJourney = () => {
    setShowLanding(false);
  };

  return (
    <div className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col items-center bg-[#faf7f5] overflow-hidden p-4 md:p-6">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-rose-200 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-rose-300 rounded-full blur-2xl" />
      </div>

      <AnimatePresence mode="wait">
        {showLanding ? (
          <InvitationLanding key="landing" onStartJourney={handleStartJourney} />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col items-center overflow-hidden"
          >
            <header className="py-2 md:py-4 text-center z-10 shrink-0">
              <div className="flex items-center justify-center mb-1">
                <Heart className="text-rose-400 fill-rose-400 w-5 h-5 animate-pulse" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">Sarah & James</h1>
              <p className="text-rose-500 font-medium tracking-widest uppercase text-[10px] md:text-xs">Are Getting Married</p>
            </header>

            <main className="relative w-full max-w-sm md:max-w-md flex-grow flex items-center justify-center min-h-0 py-2">
              <AnimatePresence mode="wait">
                {!isFinished ? (
                  <motion.div
                    key="deck"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full max-h-[75vh] aspect-[3/4.5] relative"
                  >
                    <Deck cards={cardsData} onFinish={handleAllSwiped} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full h-full max-h-[75vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                  >
                    <div className="overflow-y-auto flex-1 custom-scrollbar">
                      <GuestbookForm />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </main>

            <footer className="py-4 text-center text-gray-400 text-[10px] md:text-xs z-10 shrink-0">
              {!isFinished ? (
                <div className="flex flex-col items-center gap-2">
                  <p className="px-4 font-medium text-gray-500 uppercase tracking-widest">Swipe right to discover our journey</p>
                  <motion.div
                    animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="bg-rose-100 p-1 rounded-full"
                  >
                    <ChevronRight className="w-5 h-5 text-rose-500" />
                  </motion.div>
                </div>
              ) : (
                <p className="px-4">Thank you for being part of our story</p>
              )}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fb7185;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
};

export default App;
