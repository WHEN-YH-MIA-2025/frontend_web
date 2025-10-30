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
  pricing?: string[];
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

export const umkmWithoutOptional : UMKMInfo = {
  name: "Contoh UMKM",
  address: "Jl. Contoh Alamat No. 1, Kota Contoh",
  description: "Ini adalah deskripsi singkat tentang UMKM contoh.",
  category: "Kuliner",
  subcategory: "Makanan Ringan",
  coordinates: {
    lat: -6.200001,
    lng: 106.816666
  },
  images: [
    "https://example.com/images/umkm1-1.jpg",
    "https://example.com/images/umkm1-2.jpg"
  ],
  rating: 4.5,
  schedules: universalSchedule
};

export type UMKMData = Metadata & UMKMInfo;