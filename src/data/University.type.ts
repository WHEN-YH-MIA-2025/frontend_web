import { Metadata } from "./UMKM.type";

export type University = {
  name: string;
  coordinates: {
    lat: number;
    lng: number
  };
  code?: string;
} & Metadata;

export const universities: University[] = [
  {
    id: 1,
    name: "Universitas Indonesia",
    coordinates: {
      lat: -6.3620,
      lng: 106.8272
    },
    createdAt: new Date("2025-10-01T10:00:00Z"),
    updatedAt: new Date("2025-10-01T10:00:00Z"),
    code: "UI"
  },
  {
    id: 2,
    name: "Universitas Diponegoro",
    coordinates: {
      lat: -7.0036,
      lng: 110.4381
    },
    createdAt: new Date("2025-10-01T10:00:00Z"),
    updatedAt: new Date("2025-10-01T10:00:00Z"),
    code: "UNDIP"
  }
];