
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
    description: "Exchanging rings in a sparkling hall, they began their journey amidst cheers.",
    image: "/images/scene1.png",
    tag: "The First Date"
  },
  {
    id: 2,
    title: "Intricate Mehndi Love",
    description: "Covered in turmeric and marigolds, the couple laughed amidst showers of love from family.",
    image: "/images/scene2.png",
    tag: "Our Passions"
  },
  {
    id: 3,
    title: "Golden Haldi Joy",
    description: "We've shared countless nights of dancing and laughter. Life is just one big celebration when we're together.",
    image: "/images/scene3.png",
    tag: "Memories"
  },
  {
    id: 4,
    title: "The Sacred Wedding Vow",
    description: "Around the holy fire in royal attire, they solemnly took their eternal vows.",
    image: "/images/scene4.png",
    tag: "The Big Day"
  }
];
