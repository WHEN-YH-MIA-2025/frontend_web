export type Metadata = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Review = {
  rating: number;
  comment: string;
}

export type ReviewData = Review & Metadata;

export type Schedule = {
  day: string;
  open: string;
  close: string;
};

export type UMKMInfo = {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number
  };
  phone?: string;
  email?: string;
  website?: string;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  pricing?: number[];
  rating: number;
  reviews?: ReviewData[];
  schedules: Schedule[];
};

export const universalMockReview: ReviewData[] = [
  {
    id: 1,
    rating: 5,
    comment: "Excellent service and friendly staff!",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    rating: 4,
    comment: "Great products, will shop again.",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export type UMKMData = Metadata & UMKMInfo;