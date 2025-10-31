// --- featured properties data ---
export const properties = [
  {
    id: "prop1",
    link: "#",
    title: "Luxury Apartment with Great Views",
    location: "Perth, Western Australia",
    image: "/images/luxury-apartment.png",
    price: "$950",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: "prop2",
    link: "#",
    title: "Stunning Villa with 5 Bedrooms",
    location: "Miami Beach, Florida",
    image: "/images/5-bedrooms.png",
    price: "$1,300",
    bedrooms: 5,
    bathrooms: 2,
  },
  {
    id: "prop3",
    link: "#",
    title: "Recent construction with 3 bedrooms",
    location: "Park Slope, New York",
    image: "/images/3-bedrooms.png",
    price: "$560",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: "prop4",
    link: "#",
    title: "Stunning Villa with 5 Bedrooms",
    location: "Miami Beach, Florida",
    image: "/images/villa.png",
    price: "$1,300",
    bedrooms: 5,
    bathrooms: 2,
  },
  {
    id: "prop5",
    link: "#",
    title: "Modern construction with parking space",
    location: "Midtown, New York",
    image: "/images/parking-space.png",
    price: "$85",
    bedrooms: 1,
    bathrooms: 2,
  },
  {
    id: "prop6",
    link: "#",
    title: "Single Family Townhouses",
    location: "Cobble Hill, New York",
    image: "/images/townhouse.png",
    price: "$840",
    bedrooms: 2,
    bathrooms: 2,
  },
];

// --- last minute deals data ---
export const deals = [
  {
    id: "deal1",
    title: "Private Beach",
    location: "Lossarnach, Eriado",
    availableText: "Available Now", 
    image: "/images/private-beach.png", 
  },
  {
    id: "deal2",
    title: "Mountain Views",
    location: "Hyarnustar, Rhovanion",
    availableText: "Available on 5 July",
    image: "/images/mountain-view.png", 
  },
  {
    id: "deal3",
    title: "Heart of the village",
    location: "Minhiriath, Eriador",
    availableText: "Available 6 July",
    image: "/images/village.png",
  },
  {
    id: "deal4",
    title: "The city life",
    location: "West Beleriand, Mordorn",
    availableText: "Available on 24 July",
    image: "/images/city-life.png",
  },
];

// --- home page regions data ---
export const regions = [
  { id: "rhovanion", name: "Rhovanion", link: "#" },
  { id: "eriador", name: "Eriador", link: "#" },
  { id: "belfalas", name: "Bay of Belfalas", link: "#" },
  { id: "mordor", name: "Mordor", link: "#" },
  { id: "southwest", name: "The Southwest", link: "#" },
  { id: "arnor", name: "Arnor", link: "#" },
];

// --- activities data ---
export const activities = [
  {
    id: "act1",
    image: "/images/sam.png",
    user: "Sam Minnée",
    action: "reviewed",
    subject: "The House With No Windows",
    subjectLink: "#",
    comment: "Awesome solitary confinement, mate. Spot on. Sweet as.",
    timestamp: "Just now",
  },
  {
    id: "act2",
    image: "/images/ingo.png",
    user: "Ingo Schoomer",
    action: "asked a question about",
    subject: "The Mistake by the Lake",
    subjectLink: "#",
    comment: "Has this house been unit tested?",
    timestamp: "37 minutes ago",
  },
];

// --- homepage articles data ---
export const homepageArticles = [
  {
    id: "hart1", 
    link: "#",
    image: "/images/dream-property.png",
    tagIcon: "fa-file-text",
    date: "July 30, 2024",
    comments: 2,
    tags: "Properties, Prices, best deals",
    title: "How to get your dream property for the best price?",
    description:
      "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
  },
  {
    id: "hart2",
    link: "#",
    image: "/images/mortgage.png",
    tagIcon: "fa-film",
    date: "July 24, 2024",
    comments: 4,
    tags: "Tips, Mortgage",
    title: "7 tips to get the best mortgage.",
    description:
      "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
  },
  {
    id: "hart3",
    link: "#",
    image: "/images/location-price-house.png",
    tagIcon: "fa-file-text",
    date: "July 05, 2024",
    comments: 1,
    tags: "Location, Price, House",
    title: "House, location or price: What's the most important factor?",
    description:
      "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
  },
];

// --- news page articles data ---
export const newsArticles = [
  {
    id: "news1",
    link: "#",
    image: "/images/rental-news.png",
    tagIcon: "fa-file-text",
    date: "2024-08-08",
    comments: 0,
    tags: "Admin",
    title: "New Rental Regulations Announced",
    description:
      "The government has announced new rental regulations effective from next month. Find out how this impacts you.",
  },
  {
    id: "news2",
    link: "#",
    image: "/images/sydney-rental.png",
    tagIcon: "fa-file-text",
    date: "2024-08-07",
    comments: 0,
    tags: "Admin",
    title: "Top 10 Rental Properties in Sydney",
    description:
      "Explore our list of the top 10 rental properties in Sydney for the month of August.",
  },
  {
    id: "news3",
    link: "#",
    image: "/images/perfect-room.png",
    tagIcon: "fa-file-text",
    date: "2024-08-06",
    comments: 0,
    tags: "Admin",
    title: "Customer Stories: Finding the Perfect Home",
    description:
      "Read our customer stories about their journey to finding the perfect home through One Ring Rentals.",
  },
];

// --- regions page data ---

export const regionsPageData = [
  {
    id: 'reg1',
    name: 'Sydney',
    location: 'New South Wales',
    image: '/images/sydney.png', 
    link: '#',
  },
  {
    id: 'reg2',
    name: 'Melbourne',
    location: 'Victoria',
    image: '/images/melbourne.png', 
  },
  {
    id: 'reg3',
    name: 'Brisbane',
    location: 'Queensland',
    image: '/images/queensland.png', 
    link: '#',
  },
  {
    id: 'reg4',
    name: 'Perth',
    location: 'Western Australia',
    image: '/images/perth.png', 
    link: '#',
  },
  {
    id: 'reg5',
    name: 'Adelaide',
    location: 'South Australia',
    image: '/images/south-australia.png', 
    link: '#',
  },
  {
    id: 'reg6',
    name: 'Hobart',
    location: 'Tasmania',
    image: '/images/tasmania.png', 
    link: '#',
  },
];