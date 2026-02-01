
export interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag?: string;
  date?: string;
  venue?: string;
}

export interface GuestbookEntry {
  name: string;
  email: string;
  message: string;
}
