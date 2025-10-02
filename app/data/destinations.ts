export interface Destination {
  id: string
  title: string
  subtitle: string
  description: string
  price: string
  rating: number
  reviewCount: number
  location: string
  duration: string
  groupSize: string
  difficulty: string
  season: string
  images: string[]
  highlights: string[]
  activities: string[]
  wildlife: string[]
  accommodation: string
  included: string[]
  notIncluded: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
  }[]
  bestTimeToVisit: string
  gettingThere: string
  conservation: string
  specialFeatures?: {
    fallsDetails?: string
    filmHistory?: string
    historicalNotes?: string
    fishingInfo?: string
    campingDetails?: string
  }
}

export const destinations: Record<string, Destination> = {
  'bwindi-impenetrable': {
    id: 'bwindi-impenetrable',
    title: 'Bwindi Impenetrable National Park',
    subtitle: 'Home to Mountain Gorillas',
    description: 'Bwindi Impenetrable National Park is a UNESCO World Heritage Site and home to nearly half of the world\'s remaining mountain gorillas. This ancient rainforest offers life-changing gorilla trekking experiences through misty forests and steep terrain.',
    price: '1,250',
    rating: 5,
    reviewCount: 127,
    location: 'Southwest Uganda',
    duration: '3-4 Days',
    groupSize: '2-8',
    difficulty: 'Moderate-Hard',
    season: 'Year Round',
    images: [
      '/images/bwindi.jpeg',
      '/images/gorilla.jpg',
      '/images/gorilla.webp',
      '/images/bwindi2.jpg',
    ],
    highlights: [
      'Mountain gorilla trekking permits included',
      'Visit to Batwa pygmy community',
      'Nature walks through ancient rainforest',
      'Over 350 bird species',
      '120+ mammal species',
      'UNESCO World Heritage Site'
    ],
    activities: [
      'Mountain Gorilla Trekking',
      'Batwa Cultural Experience',
      'Forest Nature Walks',
      'Bird Watching',
      'Community Visits',
      'Photography'
    ],
    wildlife: [
      'Mountain Gorillas',
      'L\'Hoest\'s Monkeys',
      'Black & White Colobus',
      'Forest Elephants',
      'Giant Forest Hog',
      '350+ Bird Species'
    ],
    accommodation: 'Luxury eco-lodges and mid-range options available',
    included: [
      'Gorilla trekking permits',
      'Professional guide',
      'All meals',
      'Accommodation',
      'Transport',
      'Park fees'
    ],
    notIncluded: [
      'International flights',
      'Visa fees',
      'Personal items',
      'Tips',
      'Travel insurance',
      'Extra activities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Bwindi',
        description: 'Transfer from Kampala/Entebbe to Bwindi Impenetrable National Park',
        activities: ['Scenic drive through Uganda countryside', 'Check-in at lodge', 'Evening briefing']
      },
      {
        day: 2,
        title: 'Gorilla Trekking Experience',
        description: 'Early morning gorilla trekking in the impenetrable forest',
        activities: ['Pre-trek briefing', 'Gorilla trekking (2-8 hours)', 'Certificate presentation', 'Batwa community visit']
      },
      {
        day: 3,
        title: 'Nature Walk & Departure',
        description: 'Morning nature walk and return journey',
        activities: ['Forest nature walk', 'Bird watching', 'Transfer back to Kampala']
      }
    ],
    bestTimeToVisit: 'June-August and December-February (dry seasons), though gorillas can be tracked year-round',
    gettingThere: 'Road transfer from Kampala (8-9 hours) or domestic flight to nearby airstrip',
    conservation: 'Your visit directly supports gorilla conservation and local communities through park fees and employment opportunities.'
  },

  'lake-mburo': {
    id: 'lake-mburo',
    title: 'Lake Mburo National Park',
    subtitle: 'Uganda\'s Smallest Savanna Park',
    description: 'Lake Mburo National Park is Uganda\'s smallest savanna park, known for its rich biodiversity and beautiful acacia woodland. It\'s the best place in Uganda to see zebras and offers excellent boat safaris on Lake Mburo.',
    price: '450',
    rating: 4,
    reviewCount: 89,
    location: 'Western Uganda',
    duration: '2-3 Days',
    groupSize: '2-12',
    difficulty: 'Easy',
    season: 'Year Round',
    images: [
      '/images/mburo_main.jpeg',
      '/images/mburo_card.jpeg',
      '/images/mburo2.jpeg',
      '/images/mburo3.jpeg',
      '/images/mburo4.jpeg',
      '/images/mburo5.jpeg',
      '/images/mburo6.jpeg',
      '/images/mburo.jpeg'
    ],
    highlights: [
      'Only park in Uganda with zebras',
      'Boat safari on Lake Mburo',
      'Walking safaris allowed',
      'Rich birdlife with 350+ species',
      'Beautiful acacia woodland',
      'Close to Kampala (3.5 hours drive)'
    ],
    activities: [
      'Game Drives',
      'Boat Safari',
      'Walking Safari',
      'Horseback Riding',
      'Bird Watching',
      'Cultural Visits'
    ],
    wildlife: [
      'Zebras',
      'Impalas',
      'Elands',
      'Buffalos',
      'Hippos',
      'Crocodiles',
      'Leopards',
      'Hyenas'
    ],
    accommodation: 'Safari lodges and camping options available',
    included: [
      'Park fees',
      'Game drives',
      'Boat safari',
      'Professional guide',
      'Accommodation',
      'All meals'
    ],
    notIncluded: [
      'Transport from Kampala',
      'Walking safari fees',
      'Horseback riding',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Game Drive',
        description: 'Arrive at Lake Mburo and enjoy your first game drive',
        activities: ['Transfer from Kampala', 'Check-in at lodge', 'Evening game drive', 'Zebra and impala spotting']
      },
      {
        day: 2,
        title: 'Boat Safari & Walking Safari',
        description: 'Explore the lake by boat and enjoy a walking safari',
        activities: ['Morning boat safari', 'Hippo and crocodile viewing', 'Afternoon walking safari', 'Bird watching']
      },
      {
        day: 3,
        title: 'Morning Game Drive & Departure',
        description: 'Final game drive and return to Kampala',
        activities: ['Early morning game drive', 'Breakfast', 'Transfer back to Kampala']
      }
    ],
    bestTimeToVisit: 'December-February and June-September for optimal wildlife viewing',
    gettingThere: '3.5-hour drive from Kampala via Masaka-Mbarara highway',
    conservation: 'The park protects Uganda\'s acacia savanna ecosystem and supports local community conservation initiatives.'
  },

  'kibale': {
    id: 'kibale',
    title: 'Kibale National Park',
    subtitle: 'Primate Capital of the World',
    description: 'Kibale National Park is renowned as the primate capital of the world, home to 13 primate species including the largest population of chimpanzees in Uganda. The park offers exceptional chimpanzee tracking and diverse forest experiences.',
    price: '680',
    rating: 5,
    reviewCount: 156,
    location: 'Western Uganda',
    duration: '2-3 Days',
    groupSize: '2-8',
    difficulty: 'Moderate',
    season: 'Year Round',
    images: [
      '/images/kibale2.jpg',
      '/images/kibale.jpg',
      '/images/kibale3.jpg',
      '/images/kibale4.jpeg'
    ],
    highlights: [
      '13 primate species including chimpanzees',
      'Highest chimpanzee tracking success rate',
      'Bigodi Wetland bird sanctuary',
      'Community-based tourism',
      '375+ bird species',
      'Ancient tropical rainforest'
    ],
    activities: [
      'Chimpanzee Tracking',
      'Primate Walks',
      'Bird Watching',
      'Bigodi Wetland Walk',
      'Community Visits',
      'Forest Walks'
    ],
    wildlife: [
      'Chimpanzees',
      'Red Colobus Monkeys',
      'L\'Hoest\'s Monkeys',
      'Blue Monkeys',
      'Grey-cheeked Mangabeys',
      'Forest Elephants',
      'Forest Buffalo'
    ],
    accommodation: 'Eco-lodges and forest camps available',
    included: [
      'Chimpanzee tracking permits',
      'Professional guide',
      'Park fees',
      'Accommodation',
      'All meals',
      'Bigodi wetland walk'
    ],
    notIncluded: [
      'Transport from Kampala',
      'Additional activities',
      'Personal items',
      'Tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Forest Walk',
        description: 'Arrive at Kibale and explore the forest edge',
        activities: ['Transfer from Kampala', 'Check-in at lodge', 'Evening forest walk', 'Night sounds of the forest']
      },
      {
        day: 2,
        title: 'Chimpanzee Tracking',
        description: 'Early morning chimpanzee tracking experience',
        activities: ['Pre-tracking briefing', 'Chimpanzee tracking (2-5 hours)', 'Afternoon Bigodi wetland walk', 'Bird watching']
      },
      {
        day: 3,
        title: 'Community Visit & Departure',
        description: 'Cultural experience and return journey',
        activities: ['Community visit', 'Traditional crafts demonstration', 'Transfer back to Kampala']
      }
    ],
    bestTimeToVisit: 'December-February and June-September for easier trekking conditions',
    gettingThere: '5-hour drive from Kampala via Fort Portal',
    conservation: 'Community-based conservation programs protect the forest while providing local employment and education opportunities.'
  },

  'mgahinga': {
    id: 'mgahinga',
    title: 'Mgahinga Gorilla National Park',
    subtitle: 'Where Gold Meets Silver',
    description: 'Mgahinga Gorilla National Park is Uganda\'s smallest national park, nestled in the Virunga Mountains. It offers gorilla trekking, golden monkey tracking, and volcanic hiking with spectacular mountain views.',
    price: '1,180',
    rating: 5,
    reviewCount: 73,
    location: 'Southwest Uganda',
    duration: '3-4 Days',
    groupSize: '2-8',
    difficulty: 'Moderate-Hard',
    season: 'Year Round',
    images: [
      '/images/gorilla.jpg',
      '/images/gorilla.webp',
      '/images/gorilla-bwindi-rb01n75rk5dshksl7mdwamyktdf4na7qf9dp7k884g.webp',
      '/images/mgahinga.jpeg'
    ],
    highlights: [
      'Mountain gorilla trekking',
      'Golden monkey tracking',
      'Volcanic hiking opportunities',
      'Batwa cultural experience',
      'Scenic Virunga mountain views',
      'Cross-border conservation area'
    ],
    activities: [
      'Gorilla Trekking',
      'Golden Monkey Tracking',
      'Volcano Climbing',
      'Batwa Trail Experience',
      'Bird Watching',
      'Nature Walks'
    ],
    wildlife: [
      'Mountain Gorillas',
      'Golden Monkeys',
      'Black & White Colobus',
      'Forest Elephants',
      'Forest Buffalo',
      '180+ Bird Species'
    ],
    accommodation: 'Mountain lodges and guesthouses available',
    included: [
      'Gorilla trekking permits',
      'Golden monkey permits',
      'Professional guides',
      'Park fees',
      'Accommodation',
      'All meals'
    ],
    notIncluded: [
      'Transport from Kampala',
      'Volcano climbing fees',
      'Personal items',
      'Tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Batwa Experience',
        description: 'Arrive at Mgahinga and experience Batwa culture',
        activities: ['Transfer from Kampala', 'Check-in at lodge', 'Batwa cultural trail', 'Evening relaxation']
      },
      {
        day: 2,
        title: 'Gorilla Trekking',
        description: 'Mountain gorilla trekking experience',
        activities: ['Early morning briefing', 'Gorilla trekking', 'Certificate presentation', 'Rest and recovery']
      },
      {
        day: 3,
        title: 'Golden Monkey Tracking',
        description: 'Track the rare golden monkeys',
        activities: ['Golden monkey tracking', 'Nature walk', 'Volcano viewing', 'Preparation for departure']
      },
      {
        day: 4,
        title: 'Optional Volcano Climb',
        description: 'Climb one of the Virunga volcanoes or depart',
        activities: ['Mount Gahinga climb (optional)', 'Transfer back to Kampala']
      }
    ],
    bestTimeToVisit: 'June-August and December-February for clearer mountain views',
    gettingThere: '8-9 hour drive from Kampala or domestic flight to Kisoro',
    conservation: 'Part of the transboundary Virunga conservation area protecting mountain gorillas across Uganda, Rwanda, and DRC.'
  },

  'kidepo': {
    id: 'kidepo',
    title: 'Kidepo Valley National Park',
    subtitle: 'Uganda\'s Most Remote Wilderness',
    description: 'Kidepo Valley National Park is Uganda\'s most remote and pristine wilderness area. Known for its rugged beauty, diverse wildlife, and the unique Karamojong culture, it offers an authentic African safari experience.',
    price: '890',
    rating: 5,
    reviewCount: 64,
    location: 'Northern Uganda',
    duration: '3-4 Days',
    groupSize: '2-12',
    difficulty: 'Easy-Moderate',
    season: 'Year Round',
    images: [
      '/images/kidepo.jpg',
      '/images/kidepo.jpeg',
      '/images/kidepo1.jpg',
      '/images/kidepo.webp'
    ],
    highlights: [
      'Most remote and pristine park',
      'Largest herds of buffalo in Uganda',
      'Only park with cheetahs',
      'Karamojong cultural experience',
      'Stunning mountain scenery',
      'Over 475 bird species'
    ],
    activities: [
      'Game Drives',
      'Cultural Visits',
      'Bird Watching',
      'Nature Walks',
      'Hot Springs Visit',
      'Photography'
    ],
    wildlife: [
      'Lions',
      'Elephants',
      'Cheetahs',
      'Leopards',
      'Buffalo Herds',
      'Giraffes',
      'Zebras',
      'Wild Dogs'
    ],
    accommodation: 'Safari lodges and camping available',
    included: [
      'Park fees',
      'Game drives',
      'Cultural visits',
      'Professional guide',
      'Accommodation',
      'All meals'
    ],
    notIncluded: [
      'Domestic flights',
      'Road transport (long drive)',
      'Personal expenses',
      'Tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Game Drive',
        description: 'Arrive at Kidepo and evening wildlife viewing',
        activities: ['Domestic flight or drive from Kampala', 'Check-in at lodge', 'Evening game drive', 'Narus Valley exploration']
      },
      {
        day: 2,
        title: 'Full Day Game Drives',
        description: 'Explore Kidepo and Narus valleys',
        activities: ['Morning game drive - Kidepo Valley', 'Afternoon game drive - Narus Valley', 'Large buffalo herds viewing', 'Predator spotting']
      },
      {
        day: 3,
        title: 'Cultural Experience',
        description: 'Visit local Karamojong communities',
        activities: ['Karamojong cultural visit', 'Traditional dances', 'Hot springs visit', 'Community interaction']
      },
      {
        day: 4,
        title: 'Final Game Drive & Departure',
        description: 'Last wildlife viewing and departure',
        activities: ['Early morning game drive', 'Final wildlife photography', 'Transfer to airstrip or start drive back']
      }
    ],
    bestTimeToVisit: 'September-March for optimal wildlife viewing and accessibility',
    gettingThere: 'Domestic flight from Entebbe (1.5 hours) or 10-12 hour drive from Kampala',
    conservation: 'Remote location helps preserve pristine wilderness while providing employment for local Karamojong communities.'
  },

  'rwenzori': {
    id: 'rwenzori',
    title: 'Mountain Rwenzori National Park',
    subtitle: 'The Mountains of the Moon',
    description: 'Mountain Rwenzori National Park protects the highest mountain range in Africa, known as the "Mountains of the Moon." This UNESCO World Heritage Site offers challenging mountain climbing and unique alpine vegetation.',
    price: '1,450',
    rating: 4,
    reviewCount: 42,
    location: 'Western Uganda',
    duration: '7-10 Days',
    groupSize: '2-8',
    difficulty: 'Hard',
    season: 'Dec-Feb, Jun-Aug',
    images: [
      '/images/mtn.jpeg',
      '/images/mtn1.jpeg',
      '/images/mtn2.jpeg',
      '/images/mtn3.jpeg'
    ],
    highlights: [
      'Africa\'s third-highest peak (Margherita - 5,109m)',
      'UNESCO World Heritage Site',
      'Unique alpine vegetation zones',
      'Glacial lakes and waterfalls',
      'Endemic species and plants',
      'Challenging mountaineering experience'
    ],
    activities: [
      'Mountain Climbing',
      'Peak Climbing (Margherita)',
      'Nature Walks',
      'Bird Watching',
      'Photography',
      'Cultural Visits'
    ],
    wildlife: [
      'Forest Elephants',
      'Chimpanzees',
      'L\'Hoest\'s Monkeys',
      'Blue Monkeys',
      'Endemic Bird Species',
      'Unique Alpine Plants'
    ],
    accommodation: 'Mountain huts and camping on climbing routes',
    included: [
      'Professional mountain guides',
      'Porters',
      'Mountain hut accommodation',
      'All meals on mountain',
      'Climbing equipment',
      'Park fees'
    ],
    notIncluded: [
      'Personal climbing gear',
      'Transport from Kampala',
      'Pre/post climb accommodation',
      'Travel insurance',
      'Tips for guides/porters'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Preparation',
        description: 'Arrive and prepare for the climb',
        activities: ['Transfer from Kampala', 'Equipment check', 'Briefing', 'Rest at base']
      },
      {
        day: 2,
        title: 'Start Climbing - Nyabitaba Hut',
        description: 'Begin the mountain adventure',
        activities: ['Start climb from Nyakalengija', 'Forest zone trekking', 'Reach Nyabitaba Hut (2,650m)', 'Overnight in hut']
      },
      {
        day: 3,
        title: 'John Matte Hut',
        description: 'Continue through bamboo and heather zones',
        activities: ['Cross Kurt Shafer Bridge', 'Bamboo forest trekking', 'Reach John Matte Hut (3,505m)', 'Acclimatization']
      }
    ],
    bestTimeToVisit: 'December-February and June-August for clearer weather and less rain',
    gettingThere: '5-6 hour drive from Kampala to Kasese, then to Nyakalengija trailhead',
    conservation: 'UNESCO World Heritage Site protection preserves unique montane ecosystems and endemic species.'
  },

  'murchisons': {
    id: 'murchisons',
    title: 'Murchison Falls National Park',
    subtitle: 'Uganda\'s Largest Park & Most Powerful Waterfall',
    description: 'Murchison Falls National Park, locally known as Kabalega National Park, was founded in 1952 and covers 1,503 square miles, making it Uganda\'s largest park. Located in northwestern Uganda across Kiryandongo, Masindi, Bulisa and Nwoya districts, the park is endowed with beautiful sceneries, especially River Nile which flows through the park. The park\'s main attraction is the thunderous Murchison Falls, named by British explorer Sir Samuel Baker, where the mighty Nile squeezes through an 8-meter gorge and plunges 42 meters into the "Devil\'s Cauldron," creating the world\'s most powerful waterfall. The park consists mainly of wetlands, open plains, savanna grasslands, and woodlands, and is part of the Murchison Falls Conservation Area including Bugungu Wildlife Reserve and Karuma Falls. It features large forests like Kaniyo Pabidi (with Mahogany and ironwood trees), Budongo Forest, and Rabango Forests.',
    price: '410',
    rating: 4,
    reviewCount: 247,
    location: 'Northwestern Uganda',
    duration: '2-4 Days',
    groupSize: '2-12',
    difficulty: 'Easy',
    season: 'Year Round (Best: Jun-Sep, Jan-Mar)',
    images: [
      '/images/murchion_main.jpeg',
      '/much1.jpeg',
      '/much2.jpeg',
      '/much3.jpeg',
      '/much4.jpeg',
      '/much5.jpeg'
    ],
    highlights: [
      'World\'s most powerful waterfall - Murchison Falls',
      'Boat cruise to the base of the falls with rainbow views',
      'Big Five wildlife including lions, elephants, leopards',
      'Over 556 bird species including rare Shoebill Stork',
      'Chimpanzee tracking in Budongo Forest',
      'Hot air balloon wildlife viewing (first in Uganda)',
      'Nile Delta boat safari for exceptional birding',
      'Karuma Falls - additional spectacular waterfall',
      'Cultural encounters with Boom Village community',
      'Sport fishing for Nile Perch and Tiger Fish'
    ],
    activities: [
      'Game Drives (Morning/Afternoon/Night)',
      'Boat Safari to Falls Base',
      'Top of Falls Hike',
      'Nile Delta Boat Trip',
      'Chimpanzee Tracking',
      'Hot Air Balloon Safari',
      'Sport Fishing',
      'Bird Watching',
      'Forest Nature Walks',
      'Cultural Village Visits',
      'Camping Adventures',
      'Karuma Falls Visit'
    ],
    wildlife: [
      'Lions',
      'African Elephants', 
      'Rothschild Giraffes',
      'African Buffalos',
      'Leopards',
      'Hippos',
      'Nile Crocodiles',
      'Spotted Hyenas',
      'Chimpanzees',
      'Blue Monkeys',
      'Black & White Colobus Monkeys',
      'Olive Baboons',
      'Uganda Kobs',
      'Hartebeests',
      'Warthogs',
      'Bushbucks',
      'Defassa Waterbucks',
      'Bohor Reedbucks',
      'Patas Monkeys',
      'Side-striped Jackals',
      'African Rock Pythons',
      'Green Mambas',
      'Cobras',
      'Monitor Lizards',
      '144 mammal species total',
      '51 amphibian species',
      '51 reptile species'
    ],
    accommodation: 'Luxury lodges (Nile Safari Lodge, Paara Safari Lodge, Pakuba Safari Lodge), mid-range (Sambiya River Lodge, Murchison River Lodge), budget (Red Chilli Rest Camp), and camping options',
    included: [
      'Park entrance fees',
      'Game drives with professional guide',
      'Boat safari to falls base',
      'Accommodation as per package',
      'All meals during safari',
      'Bottled water during activities',
      'Airport/hotel transfers'
    ],
    notIncluded: [
      'International flights',
      'Uganda visa fees',
      'Chimpanzee tracking permits (extra $30)',
      'Hot air balloon safari (extra $350)',
      'Fishing license and equipment',
      'Cultural village visit fees',
      'Personal expenses and tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Evening Game Drive',
        description: 'Transfer from Kampala to Murchison Falls (4-5 hours drive)',
        activities: [
          'Scenic drive through Uganda countryside',
          'Check-in at selected accommodation',
          'Lunch and rest',
          'Evening game drive in northern sector',
          'Wildlife spotting: elephants, giraffes, antelopes',
          'Sunset views over the savanna'
        ]
      },
      {
        day: 2,
        title: 'Murchison Falls Experience',
        description: 'Boat safari to falls and hike to the top',
        activities: [
          'Early morning boat cruise upstream on River Nile',
          'Wildlife viewing: hippos, crocodiles, elephants',
          'Bird watching including Shoebill Stork',
          'Arrive at base of Murchison Falls',
          'Hike to top of falls (45 minutes)',
          'Experience "Devil\'s Cauldron" and rainbow mists',
          'Visit Uhuru Falls and crocodile bar',
          'Afternoon rest or optional fishing'
        ]
      },
      {
        day: 3,
        title: 'Chimpanzee Tracking & Departure',
        description: 'Forest adventure and return to Kampala',
        activities: [
          'Early morning chimpanzee tracking in Budongo Forest',
          'Forest nature walk and bird watching',
          'Visit to local community project',
          'Lunch and check-out',
          'Transfer back to Kampala/Entebbe',
          'Optional stop at Ziwa Rhino Sanctuary'
        ]
      },
      {
        day: 4,
        title: 'Extended Safari Options',
        description: 'Additional activities for longer stays',
        activities: [
          'Nile Delta boat safari for serious birders',
          'Hot air balloon wildlife viewing at sunrise',
          'Cultural visit to Boom Village',
          'Karuma Falls excursion',
          'Night game drive for nocturnal species',
          'Sport fishing on the Nile'
        ]
      }
    ],
    bestTimeToVisit: 'June-September and January to mid-March during dry seasons for best wildlife viewing and accessibility. The park is open year-round, but roads may be challenging during heavy rains (April-May, October-November).',
    gettingThere: 'By Road: 305km from Kampala/Entebbe (4-5 hours drive), 280km from Fort Portal. By Air: Charter flights from Entebbe International Airport to Pakuba, Bugundu, or Chobe airstrips.',
    conservation: 'As Uganda\'s oldest national park and part of the Murchison Falls Conservation Area (including Bugungu Wildlife Reserve and Karuma Falls), the park plays a crucial role in wildlife conservation. Tourism revenue directly supports anti-poaching efforts, community development, and the planned reintroduction of white rhinos from Ziwa Rhino Sanctuary. The park protects vast ecosystems including wetlands, open savanna, woodlands, and forests like Budongo, Rabongo, and Kaniyo Pabidi, which are vital habitats for endangered species and over 556 bird species.',
    specialFeatures: {
      fallsDetails: 'The Murchison Falls are the most powerful waterfalls on the planet. The Nile waters pass through a small gorge of 8m wide and plunge 42m, forming a dramatic fall with a thunderous roar into the "Devil\'s Cauldron." The falling water forms mist that, together with sun rays, creates an eye-catching rainbow. After the heavy fall, the waters form a very calm flow where wildlife like crocodiles, elephants, fish species, hippos, and countless bird species call home. At the top of the falls, you\'ll notice the ground seems to be shaking because of the heavily falling waters. You can also see the smaller Uhuru Falls before the main Murchison Falls and the famous "crocodile bar" where crocodiles of all sizes gather patiently waiting for unlucky animals dragged down by the water.',
      filmHistory: 'Murchison Falls National Park was showcased to the world after the film "African Queen" starring Humphrey Bogart was filmed in the park on the Nile and at Lake Albert.',
      historicalNotes: 'The falls were named by the famous British explorer Sir Samuel Baker who was mesmerized by their beauty. The Ugandan dictator Idi Amin attempted to rename the falls to Kabarega Falls (in memory of the King of Bunyoro), but this only survived during his regime. The park was affected by the Lord\'s Resistance Army rebellion in the 1990s, with some countries declaring it a no-go zone, but since 2005 peace has returned and tourist numbers have steadily increased.',
      fishingInfo: 'Murchison Falls National Park is one of Uganda\'s best fishing destinations. Fishing can be done on boat cruises along the Nile River, at the bottom of the falls, at Karuma Falls, or in riverside pools. Common catches include Tiger Fish, Tilapia, and Nile Perch. The biggest fish ever caught was a Nile Perch weighing over 200 pounds. A fishing license is required, and visitors must bring their own fishing gear.',
      campingDetails: 'Camping requires bringing your own gear, though it can be arranged through lodges. Preferred locations include Kaniyo Pabidi Forest or wilderness areas. Camps provide firewood, water, and tents, but visitors need to bring their own food and equipment or hire them from lodges or park authorities.'
    }
  },

  'queen-elizabeth': {
    id: 'queen-elizabeth',
    title: 'Queen Elizabeth National Park',
    subtitle: 'Uganda\'s Most Visited Park',
    description: 'Queen Elizabeth National Park is Uganda\'s most popular and biodiverse national park. Famous for tree-climbing lions, diverse ecosystems, and the Kazinga Channel boat safari, it offers classic African safari experiences.',
    price: '650',
    rating: 5,
    reviewCount: 198,
    location: 'Western Uganda',
    duration: '3-4 Days',
    groupSize: '2-12',
    difficulty: 'Easy',
    season: 'Year Round',
    images: [
      '/images/queen_main.jpeg',
      '/images/queen3.jpeg',
      '/images/queen4.jpeg',
      '/images/queen5.jpeg',
      '/images/queen6.jpeg',
      '/images/queen7.jpeg',
      '/images/queen8.jpeg',
      '/images/Queen_main.jpeg'
    ],
    highlights: [
      'Famous tree-climbing lions in Ishasha',
      'Kazinga Channel boat safari',
      'Diverse ecosystems and landscapes',
      'Over 600 bird species',
      'Chimpanzee tracking in Kyambura',
      'Crater lakes and savanna plains'
    ],
    activities: [
      'Game Drives',
      'Kazinga Channel Boat Safari',
      'Chimpanzee Tracking',
      'Bird Watching',
      'Nature Walks',
      'Cultural Visits'
    ],
    wildlife: [
      'Tree-climbing Lions',
      'Elephants',
      'Hippos',
      'Buffalos',
      'Leopards',
      'Chimpanzees',
      'Antelopes',
      '600+ Bird Species'
    ],
    accommodation: 'Wide range from luxury lodges to budget camps',
    included: [
      'Park fees',
      'Game drives',
      'Kazinga boat safari',
      'Professional guide',
      'Accommodation',
      'All meals'
    ],
    notIncluded: [
      'Transport from Kampala',
      'Chimpanzee permits',
      'Additional activities',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Crater Drive',
        description: 'Arrive and explore the crater area',
        activities: ['Transfer from Kampala', 'Check-in at lodge', 'Crater lakes drive', 'Evening relaxation']
      },
      {
        day: 2,
        title: 'Kazinga Channel Safari',
        description: 'Boat safari on the famous Kazinga Channel',
        activities: ['Morning game drive', 'Afternoon Kazinga boat safari', 'Hippo and elephant viewing', 'Bird watching']
      },
      {
        day: 3,
        title: 'Ishasha Tree-climbing Lions',
        description: 'Visit the southern sector for tree-climbing lions',
        activities: ['Drive to Ishasha sector', 'Tree-climbing lion tracking', 'Game viewing', 'Return to main sector']
      },
      {
        day: 4,
        title: 'Chimpanzee Tracking & Departure',
        description: 'Track chimps and return to Kampala',
        activities: ['Kyambura chimpanzee tracking', 'Final game drive', 'Transfer back to Kampala']
      }
    ],
    bestTimeToVisit: 'December-February and June-September for optimal wildlife viewing',
    gettingThere: '6-7 hour drive from Kampala or domestic flight to Kasese',
    conservation: 'Biosphere Reserve status helps balance wildlife conservation with sustainable community development.'
  },

  'jinja': {
    id: 'jinja',
    title: 'Jinja - Adventure Capital',
    subtitle: 'Source of the Nile Adventures',
    description: 'Jinja is Uganda\'s adventure capital, located at the source of the mighty Nile River. Known for world-class white water rafting, bungee jumping, and various water sports, it\'s perfect for adrenaline seekers.',
    price: '320',
    rating: 4,
    reviewCount: 143,
    location: 'Eastern Uganda',
    duration: '2-3 Days',
    groupSize: '2-15',
    difficulty: 'Easy-Moderate',
    season: 'Year Round',
    images: [
      '/images/jinja_main.jpeg',
      '/images/jinja8.jpeg',
      '/images/jinja9.jpeg',
      '/images/jinja10.jpeg',
      '/images/jinja11.jpeg',
      '/images/jinja12.jpeg',
      '/images/water.jpeg',
      '/images/jinja.jpeg'
    ],
    highlights: [
      'Source of the Nile River',
      'World-class white water rafting',
      'Bungee jumping over the Nile',
      'Kayaking and stand-up paddling',
      'Quad biking adventures',
      'Cultural and historical sites'
    ],
    activities: [
      'White Water Rafting',
      'Bungee Jumping',
      'Kayaking',
      'Stand-up Paddling',
      'Quad Biking',
      'Source of Nile Visit',
      'Cultural Tours'
    ],
    wildlife: [
      'Nile Monitor Lizards',
      'Various Water Birds',
      'Hippos (distant)',
      'Crocodiles (distant)',
      'Butterflies',
      'River Fish Species'
    ],
    accommodation: 'Riverside lodges, backpacker hostels, and hotels',
    included: [
      'Accommodation',
      'Selected activities',
      'Professional guides',
      'Safety equipment',
      'Meals',
      'Transport to activity sites'
    ],
    notIncluded: [
      'Transport from Kampala',
      'All adventure activities',
      'Personal expenses',
      'Tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Source of Nile',
        description: 'Arrive in Jinja and visit the Source of the Nile',
        activities: ['Transfer from Kampala', 'Check-in at accommodation', 'Source of Nile visit', 'Evening relaxation by river']
      },
      {
        day: 2,
        title: 'White Water Rafting',
        description: 'Full day white water rafting adventure',
        activities: ['Safety briefing', 'Full day rafting (Grade 3-5 rapids)', 'Riverside lunch', 'Evening celebration']
      },
      {
        day: 3,
        title: 'Adventure Activities & Departure',
        description: 'Additional activities and return to Kampala',
        activities: ['Bungee jumping or kayaking', 'Cultural site visits', 'Local crafts shopping', 'Transfer back to Kampala']
      }
    ],
    bestTimeToVisit: 'March-May and September-November for optimal water levels',
    gettingThere: '2-hour drive from Kampala via Jinja highway',
    conservation: 'Adventure tourism supports local communities while raising awareness about Nile River conservation.'
  }
}

export function getDestination(id: string): Destination | null {
  return destinations[id] || null
}

export function getAllDestinations(): Destination[] {
  return Object.values(destinations)
}