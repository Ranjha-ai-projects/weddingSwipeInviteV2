
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
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-250, -180, 0, 180, 250], [0, 1, 1, 1, 0]);
  
  // Visual cues for swipe action
  const likeOpacity = useTransform(x, [40, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-40, -120], [0, 1]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    // Threshold for swipe or velocity (flick)
    if (Math.abs(info.offset.x) > 80 || Math.abs(info.velocity.x) > 400) {
      onRemove();
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity, zIndex: isFront ? 50 : 0 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
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

        {/* Swipe Badge: LOVE */}
        {isFront && (
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-8 left-8 border-4 border-emerald-400 text-emerald-400 font-black px-4 py-1 rounded-xl rotate-[-15deg] uppercase text-2xl pointer-events-none z-30"
          >
            Love
          </motion.div>
        )}

        {/* Swipe Badge: NEXT */}
        {isFront && (
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-8 right-8 border-4 border-rose-400 text-rose-400 font-black px-4 py-1 rounded-xl rotate-[15deg] uppercase text-2xl pointer-events-none z-30"
          >
            Next
          </motion.div>
        )}

        {/* Info Box */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8 text-white z-20">
          <div className="space-y-2">
            {data.tag && (
              <span className="inline-block bg-rose-500 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full w-fit shadow-lg shadow-rose-900/20">
                {data.tag}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl font-bold serif leading-tight drop-shadow-md">
              {data.title}
            </h2>
            <p className="text-[13px] md:text-sm text-gray-200 leading-relaxed font-light drop-shadow-sm opacity-90 line-clamp-3">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
