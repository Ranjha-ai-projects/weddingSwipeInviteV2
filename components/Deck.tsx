
import React, { useState } from 'react';
import Card from './Card';
import { CardData } from '../types';

interface DeckProps {
  cards: CardData[];
  onFinish: () => void;
}

const Deck: React.FC<DeckProps> = ({ cards, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const removeCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish();
    }
  };

  // We only render a couple of cards at a time for performance
  // The current card (front) and the next one (back)
  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => {
        // Hide cards that have been swiped or are too deep in the stack
        if (index < currentIndex || index > currentIndex + 1) return null;

        const isFront = index === currentIndex;

        return (
          <Card
            key={card.id}
            data={card}
            onRemove={removeCard}
            isFront={isFront}
          />
        );
      }).reverse()} {/* Reverse so the first card is on top */}
    </div>
  );
};

export default Deck;
