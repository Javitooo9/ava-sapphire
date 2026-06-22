export type SapphireColor =
  | "blue"
  | "pink"
  | "yellow"
  | "white"
  | "green"
  | "orange"
  | "purple"
  | "black";

export interface Product {
  id: string;
  name: string;
  description: string;
  color: SapphireColor;
  weight_ct: number;
  origin: string;
  clarity: string;
  cut: string;
  certificate?: string;
  images: string[];
  is_available: boolean;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  created_at: string;
}
