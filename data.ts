
import { CardData } from './types';

/**
 * Image URLs converted to direct Google Drive view format.
 * NOTE: Ensure your Google Drive files are set to "Anyone with the link can view" 
 * for these images to display correctly on your website.
 */

export const cardsData: CardData[] = [
  {
    id: 1,
    title: "The Engagement Promise",
    description: "With cheers and sparkling rings, our forever officially began.",
    image: "/images/scene1.png",
    tag: "Where It All Started",
    date: "2026-03-15",
    venue: "Grand Ballroom, Bangalore"
  },
  {
    id: 2,
    title: "Mehndi & Magic",
    description: "Hands painted with love, hearts wrapped in laughter and colors.",
    image: "/images/scene2.png",
    tag: "Love in Every Stroke",
    date: "2026-03-20",
    venue: "The Royal Gardens, Bangalore"
  },
  {
    id: 3,
    title: "Haldi Hues",
    description: "Golden smiles, playful moments, and blessings in abundance.",
    image: "/images/scene3.png",
    tag: "Pure Joy",
    date: "2026-03-21",
    venue: "The Royal Gardens, Bangalore"
  },
  {
    id: 4,
    title: "Forever, From This Moment",
    description: "By sacred flames, we promised a lifetime of love.",
    image: "/images/scene4.png",
    tag: "The Big Day",
    date: "2026-03-22",
    venue: "Grand Temple, Bangalore"
  }
];
