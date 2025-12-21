
import { CardData } from './types';

/**
 * Image URLs converted to direct Google Drive view format.
 * NOTE: Ensure your Google Drive files are set to "Anyone with the link can view" 
 * for these images to display correctly on your website.
 */

export const cardsData: CardData[] = [
  {
    id: 1,
    title: "Where it All Began",
    description: "Our first date was just a simple coffee, but we knew from that first conversation that this was something special.",
    image: "/images/scene-1.png",
    tag: "The First Date"
  },
  {
    id: 2,
    title: "Better Together",
    description: "From morning runs to weekend adventures, we found a partner who keeps up with every step of the journey.",
    image: "/images/scene-2.png",
    tag: "Our Passions"
  },
  {
    id: 3,
    title: "Life of the Party",
    description: "We've shared countless nights of dancing and laughter. Life is just one big celebration when we're together.",
    image: "/images/scene-3.png",
    tag: "Memories"
  },
  {
    id: 4,
    title: "Our Forever Starts",
    description: "Now, we invite you to witness the beginning of our greatest chapter yet. Join us for our wedding celebration!",
    image: "/images/scene-4.png",
    tag: "The Big Day"
  }
];
