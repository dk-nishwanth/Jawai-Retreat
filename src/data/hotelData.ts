export interface RoomItem {
  id: string;
  name: string;
  subName: string;
  persons: string;
  size: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  category: string;
  title: string;
  cost: string;
  description: string;
  points: string[];
  image: string;
}

export const JAWAI_ROOMS: RoomItem[] = [
  {
    id: "premium-balcony-rooms",
    name: "PREMIUM BALCONY ROOMS",
    subName: "The Granite View",
    persons: "Couples & Families",
    size: "512 sq ft including balcony",
    price: "₹9,000/night + taxes",
    image: "/src/assets/images/jawai_premium_balcony_room_1790838351238.jpg",
    description: "Four rooms, each opening to the hills with earthy Marwari craft details and a private balcony facing the Jawai granite landscape. Includes generous room proportions, private outdoor space, attached western bathroom, and MAP dining with breakfast and dinner.",
    features: [
      "Private Balcony facing granite hills",
      "King or Twin Beds with premium linen",
      "Spacious Western Bathroom",
      "Granite Views & Sunset Panorama",
      "Earthy Marwari craft details",
      "Breakfast + Dinner (MAP plan included)"
    ]
  },
  {
    id: "luxury-room-private-pool",
    name: "LUXURY ROOM WITH PRIVATE POOL",
    subName: "The Blue Heart",
    persons: "Privacy Stay · 2-3 Persons",
    size: "752 sq ft including pool and sit-out",
    price: "₹12,000/night + taxes",
    image: "/src/assets/images/jawai_luxury_pool_room_1790838337213.jpg",
    description: "Two private rooms, each designed as its own world with a freeform designer pool, covered sit-out, premium linen, and calm interiors. Generous proportions and absolute seclusion nestled beside the granite landscape.",
    features: [
      "Private Freeform Designer Pool",
      "Covered Sit-out Verandah",
      "King Bed with calm earth interiors",
      "Spacious Designer Bathroom",
      "Absolute Privacy Stay",
      "Breakfast + Dinner (MAP plan included)"
    ]
  },
  {
    id: "premium-balcony-bedroom",
    name: "PREMIUM BALCONY ROOMS · BEDROOM",
    subName: "Craft & Linen Detail",
    persons: "2 Persons",
    size: "512 sq ft",
    price: "₹9,000/night + taxes",
    image: "/src/assets/images/editorial_bedroom_reading_1790837675143.jpg",
    description: "Airy bedroom layout with local stone accents, handcrafted Marwari timber work, and floor-to-ceiling glass framing the rocky wilderness.",
    features: [
      "Earthy desert palette",
      "Plush king bedding",
      "Artisan wooden furniture",
      "MAP dining with farm meals"
    ]
  },
  {
    id: "luxury-pool-covered-sitout",
    name: "LUXURY ROOM · COVERED SIT-OUT",
    subName: "Poolside Verandah",
    persons: "Couples & Solitude",
    size: "752 sq ft total area",
    price: "₹12,000/night + taxes",
    image: "/src/assets/images/hero_jawai_retreat_1790838322856.jpg",
    description: "Generous covered verandah with comfortable lounge seating, overlooking your personal freeform stone plunge pool and granite horizons.",
    features: [
      "Shaded poolside lounge",
      "Stone deck loungers",
      "Pure serenity under open skies",
      "Personalized host service"
    ]
  }
];

export const JAWAI_EXPERIENCES: ExperienceItem[] = [
  {
    id: "designer-pool",
    category: "At The Retreat",
    title: "The Blue Heart - Freeform Designer Pool",
    cost: "Complimentary for staying guests",
    description: "The only freeform designer pool in Jawai, shaped around the organic lines of the landscape instead of straight city-hotel edges.",
    points: [
      "Private access for Pool Room guests",
      "Open access for all staying guests",
      "Best hours: early morning and golden hour"
    ],
    image: "/src/assets/images/hero_jawai_retreat_1790838322856.jpg"
  },
  {
    id: "leopard-safari",
    category: "Safari & Wildlife",
    title: "Leopard Safari",
    cost: "Chargeable | ₹4,500/jeep Leopard | ₹5,500/jeep Jungle",
    description: "This is not a zoo. The leopards live here, alongside the Rabari people, in one of India's most remarkable coexistence landscapes.",
    points: [
      "Max 5-6 guests per open 4x4 jeep",
      "Early morning and evening golden slots",
      "Jungle safari covers wider terrain and birdlife"
    ],
    image: "/src/assets/images/jawai_leopard_safari_landscape_1790838368353.jpg"
  },
  {
    id: "bonnet-breakfast",
    category: "Dining In The Wild",
    title: "Safari Bonnet Breakfast",
    cost: "Chargeable",
    description: "Drive into the wilderness at dawn, park at a scenic point, and have coffee, hot chai, and a full farm breakfast served on the jeep bonnet.",
    points: [
      "Served in the field, coordinated with your safari",
      "Farm-fresh produce and a full breakfast spread",
      "Best timed with sunrise"
    ],
    image: "/src/assets/images/jawai_dining_courtyard_1790838383373.jpg"
  },
  {
    id: "farm-to-table",
    category: "Dining & Agriculture",
    title: "Farm to Table",
    cost: "Complimentary",
    description: "Walk the farm with the host, see what is growing, and watch the week's seasonal produce arrive on your table by evening.",
    points: [
      "Seasonal produce from the retreat farm",
      "Pure vegetarian Marwari-style cooking",
      "Paired with your included dinner"
    ],
    image: "/src/assets/images/editorial_garden_path_1790837689103.jpg"
  },
  {
    id: "dam-sundowner",
    category: "Dam View",
    title: "Sundowner at Jawai Dam",
    cost: "Chargeable",
    description: "Drive to the Jawai Dam viewpoint as the sun drops behind the Aravalli hills, with drinks, light bites, water, birds, and the last light of day.",
    points: [
      "Setup at the dam viewpoint",
      "Drinks and light bites",
      "Crocodile and migratory bird sightings are common"
    ],
    image: "/src/assets/images/merano_mountain_teaser_1790837703866.jpg"
  },
  {
    id: "high-tea",
    category: "High Tea",
    title: "High Tea at Dam View / Safari Bonnet",
    cost: "Chargeable",
    description: "A proper high tea with sandwiches, chai, and local sweets, served either at the dam viewpoint or on the jeep bonnet in leopard country.",
    points: [
      "Two settings: dam view or field",
      "Afternoon golden hour slot",
      "Works beautifully as a couple's experience"
    ],
    image: "/src/assets/images/jawai_dining_courtyard_1790838383373.jpg"
  },
  {
    id: "candlelight-dinner",
    category: "Private Dining",
    title: "Private Candlelight Dinner",
    cost: "Chargeable",
    description: "A fully private dinner set up exclusively for you under the stars, with lanterns, candlelight, and a dedicated farm-sourced vegetarian spread.",
    points: [
      "Set under open sky or The Canopy Table",
      "Curated for anniversaries, proposals, and special occasions",
      "Pairs with a sundowner for a full evening"
    ],
    image: "/src/assets/images/jawai_dining_courtyard_1790838383373.jpg"
  },
  {
    id: "open-reel-cinema",
    category: "Open-Air Cinema",
    title: "Movie Night - The Open Reel",
    cost: "Chargeable",
    description: "Outdoor cinema the way it should be: projector, screen, mattresses or chairs, blankets if it is cold, and popcorn always.",
    points: [
      "Open-air starry sky setup",
      "Your choice of film",
      "Pairs beautifully with a bonfire"
    ],
    image: "/src/assets/images/hero_jawai_retreat_1790838322856.jpg"
  },
  {
    id: "bonfire-evening",
    category: "Evening Ritual",
    title: "Bonfire Evening",
    cost: "Complimentary Ritual",
    description: "As the temperature drops, the bonfire comes alive. Gather with fellow guests or keep it private with chai, conversation, and the sound of the wilderness.",
    points: [
      "Evening setup in the central courtyard",
      "Can be paired with movie night or private dinner",
      "Outdoor music permitted until 10:30 PM"
    ],
    image: "/src/assets/images/jawai_dining_courtyard_1790838383373.jpg"
  },
  {
    id: "rabari-walk",
    category: "Culture Walk",
    title: "Village Detour & Rabari Community Walk",
    cost: "Chargeable",
    description: "Walk with the Rabari community, visit a household, and understand what this leopard landscape means to the people who call it home.",
    points: [
      "Guided by local community members",
      "Morning slot recommended",
      "Pairs with a farm visit for a full cultural day"
    ],
    image: "/src/assets/images/editorial_garden_path_1790837689103.jpg"
  },
  {
    id: "shepherd-walk",
    category: "Culture Walk",
    title: "Shepherd's Community Walk",
    cost: "Chargeable",
    description: "Join a Rabari shepherd as they take their flock into the hills at first light. Quiet, unhurried, and impossible to manufacture.",
    points: [
      "Early morning, 1-2 hours",
      "Small group or private",
      "No commentary needed - just walk"
    ],
    image: "/src/assets/images/jawai_leopard_safari_landscape_1790838368353.jpg"
  },
  {
    id: "temple-hiking",
    category: "Guided Hike",
    title: "Temple Trail & Hiking",
    cost: "Chargeable",
    description: "Hike to small temples built into the Jawai rock face with a local guide, learn the stories, and earn the view.",
    points: [
      "Moderate difficulty, suitable for most guests",
      "Morning slot recommended",
      "Combined temple and hike circuit available"
    ],
    image: "/src/assets/images/merano_mountain_teaser_1790837703866.jpg"
  },
  {
    id: "dawn-milking",
    category: "Farm Life",
    title: "Cow & Buffalo Milking at Dawn",
    cost: "Chargeable",
    description: "Wake up before the farm does and help with the morning milking. The milk that reaches your breakfast chai is something you watched happen.",
    points: [
      "5:30-6:30 AM early morning",
      "Hands-on and guided",
      "Great for families with kids"
    ],
    image: "/src/assets/images/editorial_garden_path_1790837689103.jpg"
  },
  {
    id: "local-pottery",
    category: "Local Craft",
    title: "Pottery with Local Artisans",
    cost: "Chargeable",
    description: "Sit with a local potter and make something, or try to. Either way, you leave with muddy hands and a story.",
    points: [
      "Afternoon relaxed slot",
      "Works for all ages",
      "Take your piece home if it survives the kiln"
    ],
    image: "/src/assets/images/editorial_bedroom_reading_1790837675143.jpg"
  }
];

export const JAWAI_GALLERY = [
  {
    title: "Jawai Retreat exterior and garden view",
    src: "/src/assets/images/hero_jawai_retreat_1790838322856.jpg",
    aspect: "landscape"
  },
  {
    title: "Jawai Retreat outdoor seating area",
    src: "/src/assets/images/jawai_dining_courtyard_1790838383373.jpg",
    aspect: "portrait"
  },
  {
    title: "Jawai Retreat room interior",
    src: "/src/assets/images/jawai_premium_balcony_room_1790838351238.jpg",
    aspect: "landscape"
  },
  {
    title: "Jawai Retreat landscaped pathway",
    src: "/src/assets/images/editorial_garden_path_1790837689103.jpg",
    aspect: "portrait"
  },
  {
    title: "Jawai Retreat courtyard and architecture",
    src: "/src/assets/images/jawai_luxury_pool_room_1790838337213.jpg",
    aspect: "landscape"
  },
  {
    title: "Jawai Retreat dining and lounge setting",
    src: "/src/assets/images/jawai_dining_courtyard_1790838383373.jpg",
    aspect: "portrait"
  }
];

export const HOTEL_INFO = {
  name: "Jawai Retreat",
  tagline: "boutique wilderness retreat",
  location: "Jawai Bandh Road, Pali District, Rajasthan",
  phone: "+91 96360 85370",
  email: "reservations@jawairetreat.com",
  subheading: "Two intimate stays, slow meals, granite views, and easy access to Jawai's lakeside safaris."
};

// Backwards compatibility alias for components
export const ROOMS_EXACT_LIST: RoomItem[] = JAWAI_ROOMS;
