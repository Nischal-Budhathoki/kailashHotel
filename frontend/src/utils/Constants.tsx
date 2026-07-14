import { FaLocationDot } from "react-icons/fa6";
// navlinks-constants
export const navConstants = [
    {name: "Home" , href:"/"},
    {name: "About" , href:"/rooms"},
    {name: "Services" , href:"/bookings"},
    {name: "contact" , href:"/contact"},
    {name: "appointment" , href:"/checkin"},
]

// location-btns
export const locationBtn = [
    {name: "Kathmandu", 
        icon: < FaLocationDot/>
     },
    {name: "Pokhara", icon: < FaLocationDot/> },
    {name: "Chitwan", icon: < FaLocationDot/> },
    {name: "Lumbini",  icon: < FaLocationDot/>},
]

//room-types
export const roomDetails = [
  {
    id: 1,
    roomType: "Normal",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    description:
      "Handwoven textiles, carved screens, and hand-moulded tiles gather into rooms that feel collected rather than designed.",
    pax: "2 Adults + 1 Child",
    bedSize: "Queen",
    location: "Kathmandu",
  },

  {
    id: 2,
    roomType: "Deluxe",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    description:
      "Elegant rooms offering handcrafted interiors, modern amenities, and exceptional comfort.",
    pax: "3 Adults",
    bedSize: "King",
    location: "Pokhara",
  },

  {
    id: 3,
    roomType: "Super Deluxe",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    description:
      "Luxury accommodation with spacious interiors, premium services, and breathtaking views.",
    pax: "2 Adults + 2 Children",
    bedSize: "King",
    location: "Chitwan",
  },
];

//location details
export const locationDetails =[
    {
        id: 1,
        location: "Kathmandu",
        img:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
        desc:""
    }
]

// locationdata. 
export const destinations =[
  {  title: "Kathmandu",
    description:
      "Kathmandu, the vibrant capital of Nepal, is a timeless city where ancient traditions blend seamlessly with modern life. Surrounded by lush green hills and overlooked by the majestic Himalayan ranges, the Kathmandu Valley is home to centuries-old temples, UNESCO World Heritage Sites, colorful markets, and rich cultural heritage. Wander through historic palace squares, experience sacred spirituality at iconic stupas and temples, savor authentic Nepali cuisine, and immerse yourself in the warmth of local hospitality. Whether you're beginning your Himalayan adventure or exploring Nepal's cultural treasures, Kathmandu offers an unforgettable journey filled with history, spirituality, and breathtaking landscapes.",
    reverse: false,
    delay: 2500,
    images: [
       "https://res.cloudinary.com/djdip2cyb/image/upload/v1757686404/cld-sample-2.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1757686402/samples/man-portrait.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826533/sanjay-hona-XAHCmk14JfU-unsplash_h9gz06.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826485/ayush-shakya-EJIsZlySyn4-unsplash_i3i5zg.jpg",
    ]},
  {
     title: "Pokhara",
    description:
      "Nestled beside the crystal-clear waters of Phewa Lake and beneath the awe-inspiring Annapurna mountain range, Pokhara is one of the most beautiful destinations in Nepal. Famous for its peaceful lakes, spectacular sunrise views from Sarangkot, thrilling adventure sports, cascading waterfalls, mysterious caves, and panoramic Himalayan scenery, Pokhara is the perfect escape for both relaxation and adventure. Whether you're boating across tranquil waters, paragliding above the valley, hiking scenic trails, or simply enjoying the reflection of snow-capped peaks on the lake, every moment in Pokhara feels magical.",
    reverse: true,
    delay:4000,
    images: [
       "https://res.cloudinary.com/djdip2cyb/image/upload/v1757686404/cld-sample-2.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826340/ayush-shakya-_FVqFeTozr4-unsplash_f3dnap.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826533/sanjay-hona-XAHCmk14JfU-unsplash_h9gz06.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1757686404/cld-sample-2.jpg",
    ]
  },
  {
     title: "Chitwan",
    description:
      "Discover the untamed wilderness of Chitwan, where lush forests, winding rivers, and extraordinary wildlife create one of Asia's finest nature experiences. Home to Chitwan National Park, a UNESCO World Heritage Site, this remarkable destination offers thrilling jungle safaris, canoe rides, bird watching, and rare encounters with the one-horned rhinoceros, Bengal tiger, elephants, crocodiles, and hundreds of exotic bird species. Beyond its wildlife, visitors can experience the vibrant culture of the indigenous Tharu community, making Chitwan a perfect blend of adventure, conservation, and authentic Nepali traditions.",
    reverse: false,
    delay:3000,
    images: [
       "https://res.cloudinary.com/djdip2cyb/image/upload/v1757686404/cld-sample-2.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826663/ashok-sharma-GS-YrUwvZoU-unsplash_n57lzx.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826696/bishan-thapa-magar-LiLk0bCRKVE-unsplash_mplx5k.jpg",
    "https://res.cloudinary.com/djdip2cyb/image/upload/v1783826663/ashok-sharma-GS-YrUwvZoU-unsplash_n57lzx.jpg",
    ]
  },
]

// adventure-constants
export const activities = [
  {
    title: "Paragliding",
    location: "Pokhara",
    image: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783828271/mamun-srizon-V3sYIXV-HFc-unsplash_ckgyq4.jpg",
    description: "Soar above Phewa Lake and enjoy breathtaking Himalayan views."
  },
  {
    title: "Everest Base Camp Trek",
    location: "Khumbu",
    image: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783828505/dylan-shaw-johHd-MxPsc-unsplash_fhttqg.jpg",
    description: "Embark on one of the world's most iconic trekking adventures."
  },
  {
    title: "White Water Rafting",
    location: "Bhote Koshi",
    image: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783828170/jackalope-west-nBNROOkE0W8-unsplash_nxv8pe.jpg",
    description: "Navigate thrilling rapids with expert guides."
  },
  {
    title: "Jungle Safari",
    location: "Chitwan",
    image: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783828182/kasara-chitwan-9533kpM-Wt8-unsplash_vrnqfq.jpg",
    description: "Spot rhinos, crocodiles, deer, and exotic birdlife."
  },
  {
    title: "Bungee Jumping",
    location: "Bhote Koshi",
    image: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783828256/laurynas-me-Z2h10lcXXfU-unsplash_ancjn5.jpg",
    description: "Take a leap from one of Nepal's most famous suspension bridges."
  },
  {
    title: "Zipline",
    location: "Pokhara",
    image: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783828307/ty-downs-gIgBlQe5OEw-unsplash_klcsv0.jpg",
    description: "Race over lush valleys with spectacular mountain scenery."
  }
];

// food-constants
export const food = [
  {
    title: "Nepalese Cuisine",
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783839088/zoshua-colah-gep3f7NQzZY-unsplash_yxvvsz.jpg",
    desc: "Nepal's diverse culinary."
  },
  {
    title: "Traditional Indian",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
    desc: "Savor aromatic Indian curries."
  },
  {
    title: "Chinese Delights",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
    desc: "Sizzling of Chinese favorites."
  },
  {
    title: "International Cuisine",
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783839088/zoshua-colah-gep3f7NQzZY-unsplash_yxvvsz.jpg",
    desc: "Global Menu Dishes."
  }
];

// logo-constants
export const imgDock = [
  {
    id: 1,
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783909816/f95a0f0a67a9ca93ae8b33299037a608_fz5z1v.png",
    alt: "Booking.com",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783909640/4096a6e78cf9060a2c039cf21a45603a_fbq5oy.png",
    alt: "Airbnb",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783909635/225fa6a5a6eb0443dbbbd6ac58f318d2_gvq8fh.png",
    alt: "Tripadvisor",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783909629/35be46d257de8eb58da9307f9e4aec57_qpoe0i.png",
    alt: "Expedia",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783909796/7431c03d3dce6909a62d1d8c2ed3a65b_fuy76m.png",
    alt: "Agoda",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/djdip2cyb/image/upload/v1783909623/02fb79281494cdfada8b6220a3eafdbb_tbtkvo.png",
    alt: "Hotels.com",
  },
];