import type { Destination } from '../destinations-index'

export const kibaleDestination: Destination = {
  id: 'kibale',
  title: 'Kibale National Park',
  subtitle: 'Primate Capital of the World',
  description: 'Kibale National Park is renowned as the primate capital of the world, home to 13 primate species including the largest population of chimpanzees in Uganda. This 795 sq. km tropical rainforest in western Uganda offers the highest chimpanzee tracking success rate in East Africa at over 90%. The park protects a diverse ecosystem of tropical rainforest, woodland, and savanna, making it one of Africa\'s foremost research sites for tropical forest ecology.',
  price: '680',
  rating: 5,
  reviewCount: 156,
  location: 'Western Uganda',
  duration: '2-3 Days',
  groupSize: '2-8',
  difficulty: 'Moderate',
  season: 'Year Round',
  images: [
    '/destinations/kibale1.jpg',
    '/destinations/kibale2.jpg',
    '/destinations/kibale3.jpg',
    '/destinations/kibale4.jpg'
  ],
  highlights: [
    '13 primate species - highest diversity in East Africa',
    '90%+ chimpanzee tracking success rate',
    'Largest chimpanzee population in Uganda',
    'Home to rare L\'Hoest\'s monkeys',
    'Over 375 bird species including African Pitta',
    'Tropical rainforest biodiversity hotspot',
    'Bigodi Wetland Sanctuary nearby',
    'Forest elephant population',
    'Butterfly and moth diversity',
    'World-class primate research station'
  ],
  activities: [
    'Chimpanzee Tracking',
    'Chimpanzee Habituation Experience (Full Day)',
    'Primate Walks',
    'Bird Watching',
    'Nature Walks',
    'Night Forest Walks',
    'Bigodi Wetland Sanctuary Visit',
    'Cultural Community Visits',
    'Forest Research Center Tours',
    'Photography Safaris'
  ],
  wildlife: [
    'Chimpanzees (1,500+ individuals)',
    'Red Colobus Monkeys',
    'Black-and-white Colobus',
    'Blue Monkeys',
    'Grey-cheeked Mangabeys',
    'Red-tailed Monkeys',
    'L\'Hoest\'s Monkeys',
    'Vervet Monkeys',
    'Olive Baboons',
    'Potto (nocturnal primate)',
    'Bush Babies',
    'Forest Elephants',
    'Forest Buffalo',
    'Sitatunga Antelopes',
    'Bush Pigs',
    'Giant Forest Hogs',
    '375+ bird species',
    '250+ butterfly species'
  ],
  accommodation: 'Luxury: Papaya Lake Lodge, Crater Safari Lodge, Ndali Lodge. Mid-range: Chimpanzee Forest Lodge, Kibale Guest Cottages. Budget: Kibale Backpackers, community bandas and camping',
  included: [
    'Chimpanzee tracking permits',
    'Professional guide services',
    'Park entrance fees',
    'Nature walks with rangers',
    'All meals as per itinerary',
    'Accommodation as specified',
    'Transfer to/from tracking points'
  ],
  notIncluded: [
    'Transport from Kampala',
    'Chimpanzee habituation permits (extra $250)',
    'Bigodi Wetland entrance fees',
    'Additional primate walks',
    'Cultural visit fees',
    'Personal expenses',
    'Tips for guides and trackers'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Forest Introduction',
      description: 'Journey to the primate capital of the world',
      activities: [
        'Drive from Kampala (5-6 hours) via Fort Portal',
        'Check-in at eco-lodge near the forest',
        'Briefing about chimpanzee tracking protocols',
        'Afternoon nature walk in Kibale Forest',
        'Evening relaxation and early rest'
      ]
    },
    {
      day: 2,
      title: 'Chimpanzee Tracking Adventure',
      description: 'Track our closest living relatives in their natural habitat',
      activities: [
        'Early morning chimpanzee tracking briefing',
        'Enter forest with experienced trackers',
        '1-hour observation with chimpanzee family',
        'Learn about chimpanzee behavior and conservation',
        'Afternoon visit to Bigodi Wetland Sanctuary',
        'Bird watching and primate spotting'
      ]
    },
    {
      day: 3,
      title: 'Primate Walks & Cultural Experience',
      description: 'Explore forest diversity and local culture',
      activities: [
        'Morning primate walk seeking other species',
        'Spot red colobus and blue monkeys',
        'Visit local community projects',
        'Learn about forest conservation efforts',
        'Return to Kampala or continue to Queen Elizabeth NP'
      ]
    }
  ],
  bestTimeToVisit: 'December-February and June-September offer the best tracking conditions with drier trails and clearer forest paths. However, chimpanzees can be tracked year-round. Wet season (March-May, October-November) provides lush forest scenery and active wildlife.',
  gettingThere: 'Located 358km from Kampala via Mubende-Fort Portal road (5-6 hours drive). Alternatively, fly to Kasese airstrip and drive 2 hours. The park is easily combined with Queen Elizabeth National Park visits.',
  conservation: 'Established in 1993, Kibale plays a crucial role in chimpanzee conservation and research. The park protects one of Uganda\'s last significant expanses of pre-montane forest and supports vital corridors connecting to Queen Elizabeth National Park. Community-based conservation programs ensure local support for primate protection.',
  specialFeatures: {
    researchSignificance: 'Kibale Forest is home to the Makerere University Biological Field Station and has been a site for long-term primate research since the 1980s. Scientists study chimpanzee behavior, forest ecology, and conservation strategies, contributing to global understanding of great ape conservation.',
    biodiversityHotspot: 'The park\'s diverse habitats support exceptional biodiversity including 13 primate species (more than any other Ugandan park), 375 bird species, and over 250 butterfly species. The forest represents one of East Africa\'s most important biodiversity conservation areas.',
    habitationProgram: 'Kibale offers both regular chimpanzee tracking (1 hour with chimps) and the unique Chimpanzee Habituation Experience (full day following researchers as they habituate wild chimpanzee groups). This provides unparalleled insight into chimpanzee research and conservation work.'
  }
}