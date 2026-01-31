// src/assets/assets.ts
import { UtensilsCrossed, MousePointerClick, Truck, Home, Info, Mail, ShoppingCart } from "lucide-react";

// Banner & Backgrounds
import aboutBanner from "./About Page Banner Image Background Removed 1.png";
import aboutBg from "./About Section Background.png";
import bannerBg from "./Banner Background.png";
import homeBanner from "./Home Page Banner Image Background Removed 1.png";
import ellipse from "./Ellipse 1.png";
import ctaImage from './cta_img.png'

// Logos (SVGs)
import foodLogo from "./food_logo.svg";
import foodieLogo from "./FOODIE.svg";
import type React from "react";

import clientImage1 from './client_1.jpg';
import clientImage2 from './client_2.jpg';
import clientImage3 from './client_3.jpg';
import clientImage4 from './client_4.jpg';
import clientImage6 from './client_6.jpg';
import defaultUser from './default_user.jpg'

export interface Review {
  id: string;
  clientImage?: string; 
  name: string;
  rating: number; 
  reviewText: string;
  createdAt: string;
}

const reviews: Review[] = [
  {
    id: "review-1",
    clientImage: clientImage1,
    name: "Emmy Crypto",
    rating: 4.8,
    reviewText: "Foodie never disappoints! The flavors are fresh, creative, and always leave me wanting more.",
    createdAt: "2026-01-30T14:20:00Z" // Yesterday
  },
  {
    id: "review-2",
    clientImage: clientImage2,
    name: "Chidi Worlu",
    rating: 4.2,
    reviewText: "Great atmosphere and friendly staff. The menu keeps expanding, and I always find something new to love.",
    createdAt: "2026-01-28T09:15:00Z" // 3 days ago
  },
  {
    id: "review-3",
    clientImage: clientImage3,
    name: "Maria Lopez",
    rating: 5.0,
    reviewText: "Absolutely perfect! Foodie has become my go-to restaurant for both casual dinners and special occasions.",
    createdAt: "2026-01-25T18:45:00Z" // Last week
  },
  {
    id: "review-4",
    clientImage: clientImage4,
    name: "Donna Carter",
    rating: 4.5,
    reviewText: "Delicious meals with a modern twist. I appreciate how Foodie keeps introducing new recipes.",
    createdAt: "2026-01-20T11:30:00Z"
  },
  {
    id: "review-5",
    name: "Emily Nguyen", // No image, maybe use a placeholder initial icon in UI
    rating: 4.7,
    reviewText: "Foodie feels like home. The staff is welcoming, and the dishes always surprise me with their creativity.",
    createdAt: "2026-01-15T16:10:00Z"
  },
  {
    id: "review-6",
    clientImage: clientImage6, 
    name: "Michael Brown",
    rating: 4.3,
    reviewText: "I love how Foodie experiments with flavors. Every visit feels like a new culinary adventure.",
    createdAt: "2026-01-05T20:00:00Z"
  }
];


export default reviews;


export const assets = {
  images: {
    aboutBanner,
    aboutBg,
    bannerBg,
    homeBanner,
    ellipse,
    ctaImage,
    defaultUser,
  },
  logos: {
    food: foodLogo,
    foodie: foodieLogo,
  }
} as const;

export type AssetsType = typeof assets;

interface step {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export const steps: step[] = [
    {
      icon: <UtensilsCrossed size={32} className="text-white" />,
      title: "Pick Meals",
      description: "Select from our weekly rotating menu of chef-crafted, nutritionally balanced meals tailored to your taste."
    },
    {
      icon: <MousePointerClick size={32} className="text-white" />,
      title: "Choose How Often",
      description: "Set your delivery schedule. Whether it's daily or weekly, we adapt to your busy lifestyle seamlessly."
    },
    {
      icon: <Truck size={32} className="text-white" />,
      title: "Fast Deliveries",
      description: "Our local couriers ensure your food arrives hot, fresh, and right on time, directly to your doorstep."
    }
  ];

// Define the interface
interface NavStyle {
  name: string;
  icon: React.ReactNode; // Font Awesome class name
}

// Your original navLinks
export const navLinks: string[] = ['Home', 'About', 'Services', 'Contact', 'Reviews'];

export const navLinksAlternate: NavStyle[] = [
  {
    name: 'Home',
    icon: <Home size={20} />
  },
  {
    name: 'About',
    icon: <Info size={20} />
  },
  {
    name: 'Services',
    icon: <UtensilsCrossed size={20} />
  },
  {
    name: 'Contact',
    icon: <Mail size={20} />
  },

  { name: 'Cart', icon: <ShoppingCart size={20} /> 
}
  
];



export const videoLink:string = "https://youtu.be/awkfLEWFG2U?si=Q8F_v9w8NT5Xhvl1";


export const uberEatsLink: string = 'https://www.ubereats.com/?srsltid=AfmBOop3qoJINdY7WVhtZQg-PfzY5Q4jc2xWmeZnVtKxhjHp9PxxEeob'

