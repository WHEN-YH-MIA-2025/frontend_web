import { UMKMData } from "./UMKMType";

const universalSchedule = [
  {
    day: "Every Day",
    open: "09:00",
    close: "17:00"
  }
];

export enum Category {
  Food = "Food",
  Laundry = "Laundry",
  Barber = "Barber",
  Cafe = "Cafe",
  Warung = "Warung",
  Other = "Other"
}

export const umkmDat: UMKMData[] = [
  {
    id: 1,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Mie Ayam Pangsit Bakso Banyu Langit",
    address: "7, Jl. Lapangan Merah No.38, Kukusan, Beji, Depok City, West Java 12640",
    coordinates: {
      lat: -6.3565470197926395,
      lng: 106.82093357885705
    },
    description: "Diambil sendiri atau diantar",
    category: Category.Food,
    subcategory: "mie ayam",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyO0EPCoCJLrk4DfPeMM1EgRN-wc7VblhJRoo5CXJv-g4LGMIai0hvk7bsaCPNQoRVXHS0Sa62eTyNNvulzk1Y7QclZoGhHAgj7dZ2QV3LQ2eY4HcpBvszPEgBxMWNden-Suvcycw8czsMo=w408-h307-k-no"
    ],
    rating: 4.3,
    phone: "85888018335",
    email: undefined,
    website: undefined,
    pricing: [
      25000,
      50000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 2,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Warkop HS",
    address: "JRRF+J3W, Jl. Masjid Al - Farouq No.45, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16425",
    coordinates: {
      lat: -6.358247445631029,
      lng: 106.82269358412981
    },
    description: "Diambil sendiri atau diantar",
    category: Category.Food,
    subcategory: "warkop",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzQ4yTPJlSAntshxt4_KTKGZhQWwNc4wrBbMZr86wRkz36JDxn9k4UV_BrnNnL9TX6ReyGfn30xQ0HZLir3F3nLv3j9kAt9MEJ_HxImLT78xEQ3D4K6nyL8vYLy1Sf0Y8PWrRAq=w408-h308-k-no"
    ],
    rating: 4.4,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 3,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Kedai kopi forji",
    address: "Jl. Kabel No.01, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16425",
    coordinates: {
      lat: -6.36488500681004,
      lng: 106.82116576073639
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "cafe",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyHG-4XJfgTvoHB5VyiEbnXEFavlW9ieT2K4dAke8AErdeXZWacZbL7mHAO20JDKJIWrVZZ7S5aC5zSAXZm8xMQHvE__OrKe1FFJUvHcIFr8aig2kyBk1KAGt9M1TNQZ1C7KuA=w408-h544-k-no"
    ],
    rating: 4.8,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      25000,
      50000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 4,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Micue Indonesia",
    address: "Jl. H.Boan Lisan No.2, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16421",
    coordinates: {
      lat: -6.366566130586013,
      lng: 106.82043772568598
    },
    description: "Diambil sendiri atau diantar",
    category: Category.Food,
    subcategory: "cafe",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwYrXyVm6tpr_u29yOEazxmNNsLa8-hxvo5Ky_bdOGp9OIcX0rqzi0dByxbpifrLqtNeJ2yYGeWOfRU9iKRM9jvIPlda3o7OP-q54Hpzhv_1SeKIVH8_-NwCr3VN7rqhCHm6Thi=w408-h561-k-no"
    ],
    rating: 4.6,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      25000,
      50000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 5,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Kylau Common Space",
    address: "Jl. Palakali No.38, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16425",
    coordinates: {
      lat: -6.368435147302269,
      lng: 106.81853183713793
    },
    description: "Pesan antar, bawa pulang, makan di tempat",
    category: Category.Food,
    subcategory: "cafe",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxmn44GjPmwitX4q_ymcCfYj2a8QoIvva-rKEFyPqJzAW50ahZaotXHl-QlBMIg6KOcRkaRDMNIoXMs7DnodiaG2pMpUjKv56TUBV0m_ndq-v6PdUnPBFlcAbCwPjH_AVDHfshlmSCIzQBa=w408-h306-k-no"
    ],
    rating: 4.4,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      25000,
      50000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 6,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "KuantarLaundry",
    address: "JRJ9+MCG, Jl. Palakali, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16425",
    coordinates: {
      lat: -6.368293847180411,
      lng: 106.81858115079007
    },
    description: "Pemasok peralatan binatu yang dioperasikan dengan koin",
    category: Category.Laundry,
    subcategory: "laundry",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzN-1Js-I67cZ4cuglZXrhswLkHzouV5nxwyS4kgI_ChqP_aNtRua4f5MjBMxGyEH4nRmBSacbcgDzzWYs7g0NKM1nOOelMN5SY1YfJoEk9_VZKryMUDOvRtamJ4DCOs7rGPmwB=w408-h725-k-no"
    ],
    rating: 5.0,
    phone: "85810321084",
    email: undefined,
    website: undefined,
    pricing: [],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 7,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Warung Nastel",
    address: "JRJ9+VMP, Jl. Palakali, Kukusan, Kecamatan Beji, Kota Depok, Jawa Barat 16425",
    coordinates: {
      lat: -6.367763275970224,
      lng: 106.81917894833657
    },
    description: "Diambil sendiri atau diantar",
    category: Category.Food,
    subcategory: "warung nasi",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz72LJSK9PVCc2Bze4-sgCemlxsjHPnxsGaJgJHZjvGqil1HpZMNhbZbyYIWDAtOqd371xC_O1X7YEYbfEFKKIRKrSSqWCIBLa1hSr8ElAXtfd7VcnASPMycaYN96LX6ZnTDxi9=w426-h240-k-no"
    ],
    rating: 4.6,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 8,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Bakso Ndok Pak No",
    address: "Jalan Ngesrep Timur 4 RT06/RW01, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.048049271805052,
      lng: 110.42240584687345
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Bakso",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwbqoGGPBF1DhFZTrtbMvnXenSfrgRabts4gl2JDRRWtq2phCNaUl8fUCLnRP9y677_vBjWkuo2eTpXCUhRjvxp-p_l3jWYHw1hAyx6uRKuTCwm2Rbzl9yHY9GHeBShvMor8li5jBHqWGJP=w408-h408-k-no"
    ],
    rating: 4.5,
    phone: "85866360182",
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 9,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Ayam Bakar Mak Bo",
    address: "Jl. Ngesrep Tim. IV, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.047847311245168,
      lng: 110.42191518889237
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Ayam Bakar",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSye28Smu0x1lh6isc0ROpY-NgzIgd2jK2v9mFmCdgFPOFb-uZzow4mOvJls4TNGkK0slniOFxz-mrPgpdKLvvT20VDYFqBc4_7i1apXd7CRRwGr7FwOBhEbjyNvMfAu6HQ6lMdm=w408-h724-k-no"
    ],
    rating: 4.4,
    phone: "85879479800",
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 10,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Galant Laundry Express",
    address: "Jl. Ngesrep Tim. III No.33, RT.09/RW.01, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.047348077140719,
      lng: 110.42241443429842
    },
    description: "Jasa profesional untuk mencuci pakaian dan tekstil lainnya",
    category: Category.Laundry,
    subcategory: "Laundry",
    images: [
      "https://maps.app.goo.gl/PnB1nTPa9PtiSpJT6"
    ],
    rating: 4.8,
    phone: "81393213276",
    email: undefined,
    website: undefined,
    pricing: [],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 11,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Titik Nadi Coffee",
    address: "Gg. Melati No.5, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.048816478437502,
      lng: 110.42390642106442
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Cafe",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSygIhmwSFr6VvU5wIXTDSWZWj9RGQV9B7-J5ToyXDsy4XPDR3VGL6yQSCFltm-mVGLNdDihIDkIzgdrldaQm2IYUmZWSDKaVCj6DxN0BVOLnJot_0M0Snm6JV7mKZzJV9p6hYra=w533-h240-k-no"
    ],
    rating: 4.9,
    phone: "87844618586",
    email: undefined,
    website: undefined,
    pricing: [
      25000,
      50000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 12,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Seblak Dago Bandung, Ngesrep",
    address: "Jl. Ngesrep Tim. V No.32b, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.049714361823967,
      lng: 110.42154844980195
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Seblak",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzT1WLyu9m2DFEz4PrtqOocBcLBuJocbnu-BhM2Np1VSla7sKpEhnZRfb1Kxz8cEYeYbaL9cxFV892_KWCzWm7hyNtc3zMeNaN0cBeUo17bFmhoIjvGPEBUb8Y_JMKIpNhKSoKD=w408-h544-k-no"
    ],
    rating: 4.2,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 13,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Nasi Goreng & Bakso Pak Hadi",
    address: "Jl. Ngesrep Tim. V No.16 B, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.049313928811608,
      lng: 110.42082502738293
    },
    description: "Pesan antar, bawa pulang, makan di tempat",
    category: Category.Food,
    subcategory: "Nasi Goreng, Bakso",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz01xJ68xemsLMxZOymNyv8YOsoyifaYUnv9_DTPMue2Ch7ysVMcQaFXhGrrzHWn6CQ1K4enefezeDCgww615enbcM0AOcDOKevM4GS1bEZloekO86vU2Wfrep53gLX4Kvdni4p=w408-h544-k-no"
    ],
    rating: 4.4,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      25000,
      50000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 14,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Soto Ayam Pak No Kudus",
    address: "Jl. Ngesrep Tim. V No.6, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.045574156958007,
      lng: 110.42103638720263
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Soto",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw_lU_sqrZe94sUXjuwXo6ZzWu3HH8D_bm44S23pzCRXvq0Y0XVfmJr-No2_zsLdViPSg3K48z7rARy26yKnV08ppqfk7eKOLIFF5nPYio-uAVt3JJ0VPgdb67qA7coiin1GB5v=w408-h544-k-no"
    ],
    rating: 4.2,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 15,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Raja Cukur Tembalang",
    address: "Jl. Ngesrep Tim. V No.16, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.049443087022818,
      lng: 110.4219106212516
    },
    description: "Jasa yang menyediakan layanan potong rambut",
    category: Category.Other,
    subcategory: "Barber",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxjzIiV7PCbBC0xoQGjWnwogTv8IfZZoHHio6A_coUYvfbFuENwt8U_xmjpKOkYZ17Upyq_OWFernjDwlNWjsCbT7407w1gw_kykDhzssX7_c1-YCl3qsflqoEJo1syzk2MB5E=w408-h306-k-no"
    ],
    rating: 3.5,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 16,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Warung Makan Lek Drat Undip",
    address: "Jl. Ngesrep Timur V Dalam I No.34, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.048397230864573,
      lng: 110.42163371950335
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Penyetan",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipMS6ZRLNhIVf5JM8CVXGuiyaPgv0IOwzOynJLFP=w426-h240-k-no"
    ],
    rating: 4.5,
    phone: "87717249661",
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  },
  {
    id: 17,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Bubur Ayam Pak Mur",
    address: "Jl. Ngesrep Tim. V No.36, Sumurboto, Kec. Tembalang, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.049988317191767,
      lng: 110.42230567446104
    },
    description: "Bisa bawa pulang, bisa makan di tempat",
    category: Category.Food,
    subcategory: "Bubur Ayam",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw_AW_xpfSjTRTJDVDV5xokg-GiWv-JyR3SbW26SvWkJrgxwD6bACisFCEa86J3QSNDdWmQ_hVzrMAy0xK5Lp6VxcHX0j3blsXG1JU08DiifUrv2Ynms1fCaHNYHdXvxpViQYvaeQ=w408-h544-k-no"
    ],
    rating: 4.5,
    phone: "81901182703",
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: [
      {
        day: "Every Day",
        open: "09:00",
        close: "17:00"
      }
    ],
    reviews: []
  },
  {
    id: 18,
    createdAt: new Date("2025-11-01T06:49:52.458550"),
    updatedAt: new Date("2025-11-01T06:49:52.458550"),
    name: "Donat Madu",
    address: "Jl. Ngesrep Tim. V No.42, Sumurboto, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50269",
    coordinates: {
      lat: -7.050186630934829,
      lng: 110.42271806410118
    },
    description: "Bawa Pulang",
    category: Category.Food,
    subcategory: "Donat",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwT4PKJGIHWW98b5BWz0A_PJflhLMWpPNH9qQb_xiRrWzG9q6DZ9HLQY_jrwpvul-0ZRmaz3deUAI5lsp2cG22xy_OStJSyCq1gAVTuLjZXwv2KVQ1xjWv-pgcB2XjDrDDzK-uhyQ=w408-h544-k-no"
    ],
    rating: 4.3,
    phone: undefined,
    email: undefined,
    website: undefined,
    pricing: [
      1,
      25000
    ],
    schedules: universalSchedule,
    reviews: []
  }
] as const;