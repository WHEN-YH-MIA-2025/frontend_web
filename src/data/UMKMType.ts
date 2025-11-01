export type Metadata = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Review = {
  id: string;
  umkmId: number;
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

const universalSchedule = [
  {
    day: "Every Day",
    open: "09:00",
    close: "17:00"
  }
];

export type UMKMData = Metadata & UMKMInfo;