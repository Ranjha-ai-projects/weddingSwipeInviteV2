
import React from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { CardData } from '../types';

interface CardProps {
  data: CardData;
  onRemove: () => void;
  isFront: boolean;
}

const Card: React.FC<CardProps> = ({ data, onRemove, isFront }) => {
  const x = useMotionValue(0);
  
  // Transform horizontal drag into rotation and fading
  const rotate = useTransform(x, [0, 200], [0, 15]);
  const opacity = useTransform(x, [0, 180, 250], [1, 1, 0]);
  
  // Visual cues for swipe action (Only Right Swipe/Love)
  const likeOpacity = useTransform(x, [40, 120], [0, 1]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    // Only allow swipe to the right (positive x offset or velocity)
    if (info.offset.x > 80 || info.velocity.x > 400) {
      onRemove();
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity, zIndex: isFront ? 50 : 0 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 1000 }} // Restrict moving to the left
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.03 }}
      className="absolute inset-0 cursor-grab active:cursor-grabbing touch-none select-none"
    >
      <div className="relative w-full h-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100/50 flex flex-col">
        {/* Main Card Image */}
        <div className="absolute inset-0 w-full h-full bg-[#fdf2f2]">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover pointer-events-none transition-opacity duration-300"
            loading="eager"
            onError={(e) => {
              // Graceful placeholder if image path fails
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/600x900/fff1f2/fb7185?text=Our+Memory`;
            }}
          />
        </div>

        {/* Swipe Badge: LOVE (Only Right) */}
        {isFront && (
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-8 left-8 border-4 border-emerald-400 text-emerald-400 font-black px-4 py-1 rounded-xl rotate-[-15deg] uppercase text-2xl pointer-events-none z-30"
          >
            Love
          </motion.div>
        )}

        {/* Info Box */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 text-white z-20">
          <div className="space-y-1">
            {data.tag && (
              <span className="inline-block bg-rose-500/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit shadow-lg mb-3">
                {data.tag}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal script leading-[1.1] drop-shadow-xl text-rose-50 -ml-1">
              {data.title}
            </h2>
            <p className="text-[13px] md:text-sm text-gray-200 leading-relaxed font-light drop-shadow-sm opacity-90 line-clamp-3 mt-3">
              {data.description}
            </p>
            {data.date && <p className="text-xs md:text-sm text-gray-300 mt-2">Date: {data.date}</p>}
            {data.venue && <p className="text-xs md:text-sm text-gray-300">Venue: {data.venue}</p>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
