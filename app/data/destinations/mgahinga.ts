import type { Destination } from '../destinations-index'

export const mgahaingaDestination: Destination = {
  id: 'mgahinga',
  title: 'Mgahinga Gorilla National Park',
  subtitle: 'Where Gold Meets Silver - Uganda\'s Smallest National Park',
  description: 'Mgahinga Gorilla National Park is Uganda\'s smallest park at 33.9 sq. km, sitting high in the clouds at altitudes between 2,227m and 4,127m. Located in southwestern Uganda on the borders of Uganda, Congo, and Rwanda, it\'s one of only 4 places in Africa where endangered Mountain Gorillas can be tracked. The park is also home to the rare Golden Monkeys and boasts three extinct volcanoes: Mount Sabinyo, Mount Muhavura, and Mount Gahinga. It\'s rich in cultural significance as the ancestral home of the indigenous Batwa Pygmies.',
  price: '1,180',
  rating: 5,
  reviewCount: 73,
  location: 'Southwest Uganda (Kisoro District)',
  duration: '3-4 Days',
  groupSize: '2-8',
  difficulty: 'Moderate-Hard',
  season: 'Year Round',
  images: [
    '/destinations/mgahinga1.jpg',
    '/destinations/mgahinga2.jpg',
    '/destinations/mgahinga3.jpg',
    '/destinations/mgahinga4.jpg'
  ],
  highlights: [
    'Mountain gorilla trekking (Nyakagezi family)',
    'Golden monkey tracking (only in Uganda here)',
    'Three volcanic mountains to climb',
    'Batwa Pygmy cultural experiences',
    'Highest altitude gorilla habitat in Uganda',
    'Part of Virunga transboundary conservation area',
    'Garama and Muhavura caves exploration',
    'Family with most silverbacks in the world',
    'UNESCO World Heritage consideration',
    'Albertine Rift endemic species'
  ],
  activities: [
    'Mountain Gorilla Trekking',
    'Golden Monkey Tracking',
    'Volcano Climbing (3 peaks)',
    'Batwa Trail Cultural Experience',
    'Cave Exploration (Garama Caves)',
    'Bird Watching',
    'Nature Walks',
    'Forest Hiking',
    'Cultural Visits',
    'Photography Safaris'
  ],
  wildlife: [
    'Mountain Gorillas (80+ individuals)',
    'Golden Monkeys (endemic)',
    'Blue Monkeys',
    'Black-and-white Colobus Monkeys',
    'Vervet Monkeys',
    'Bush Babies',
    'Forest Elephants',
    'Bush Pigs',
    'Giant Forest Hogs',
    'Buffalo',
    'Bushbucks',
    'Duikers',
    '100+ bird species',
    'Albertine Rift endemic birds'
  ],
  accommodation: 'Mount Gahinga Safari Lodge, Chameleon Hill Lodge, Amajamere Lwacu Camp, Traveler\'s Nest Hotel, Clouds Mountain Gorilla Lodge, Mountain Gahinga Rest Camp',
  included: [
    'Gorilla trekking permits',
    'Golden monkey permits',
    'Professional guide services',
    'Park entrance fees',
    'Armed ranger escort',
    'Accommodation as specified',
    'All meals during safari',
    'Cultural experience fees'
  ],
  notIncluded: [
    'Transport from Kampala',
    'Volcano climbing permits (separate)',
    'Cave exploration fees',
    'Additional cultural activities',
    'Porter services for trekking',
    'Personal expenses',
    'Tips for guides and trackers'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Cultural Introduction',
      description: 'Journey to Uganda\'s smallest mountain park',
      activities: [
        'Drive from Kampala (8-9 hours) or fly to Kisoro',
        'Check-in at mountain lodge',
        'Orientation briefing about gorilla trekking',
        'Batwa cultural trail experience',
        'Learn about Pygmy forest traditions'
      ]
    },
    {
      day: 2,
      title: 'Mountain Gorilla Trekking',
      description: 'Track the famous Nyakagezi gorilla family',
      activities: [
        'Early morning trekking briefing',
        'Track Nyakagezi family (highest silverback count)',
        'One hour observation with mountain gorillas',
        'Learn about gorilla behavior and conservation',
        'Afternoon rest and cultural discussions'
      ]
    },
    {
      day: 3,
      title: 'Golden Monkey Adventure',
      description: 'Discover Uganda\'s endemic golden monkeys',
      activities: [
        'Golden monkey tracking in bamboo forest',
        'Observe these rare Virunga endemics',
        'Explore Garama Cave system',
        'Learn about cave historical significance',
        'Optional short volcano hike'
      ]
    },
    {
      day: 4,
      title: 'Volcano Climbing & Departure',
      description: 'Climb one of the three volcanic peaks',
      activities: [
        'Climb Mount Gahinga (3,474m) or Mount Sabinyo',
        'Experience montane forest zones',
        'Border point views of three countries',
        'Final cultural interactions',
        'Departure to Kampala or Rwanda'
      ]
    }
  ],
  bestTimeToVisit: 'June-August and December-February offer the best trekking conditions with less rainfall and clearer mountain views. However, gorilla trekking is possible year-round. Wet seasons provide lush forest scenery but more challenging hiking conditions.',
  gettingThere: 'By Road: 8-9 hour drive from Kampala via Kabale-Kisoro highway. By Air: Charter flights to Kisoro airstrip (1.5 hours) then short drive to park. Can combine with Rwanda visits via Cyanika border.',
  conservation: 'Established as game sanctuary in 1930, upgraded to National Park in 1991. Part of the greater Virunga conservation area spanning Uganda, Rwanda, and DR Congo. The park plays a crucial role in mountain gorilla conservation and protecting Albertine Rift endemic species. Community conservation programs support the displaced Batwa people.',
  specialFeatures: {
    gorillaFamily: 'Mgahinga is home to the famous Nyakagezi gorilla family, which stands out as having the highest number of silverbacks in the world. This family is known for its cross-border movements between Uganda, Rwanda, and DR Congo, making it a symbol of transboundary conservation.',
    culturalHeritage: 'The park is the ancestral home of the Batwa Pygmies, who lived as hunters and gatherers in these forests for thousands of years. The Batwa Trail offers authentic cultural experiences including traditional hunting techniques, forest medicine knowledge, and storytelling in the sacred Garama caves.',
    volcanicMountains: 'The park encompasses parts of three extinct volcanoes: Mount Gahinga (3,474m) meaning "pile of stones," Mount Muhavura (4,127m) meaning "guide," and Mount Sabinyo (3,645m) meaning "old man\'s teeth." These form part of the Virunga Mountain chain.',
    goldenMonkeys: 'Mgahinga is one of only two places in the world (along with Rwanda\'s Volcanoes National Park) where the endangered Golden Monkeys can be tracked. These beautiful primates are endemic to the Virunga Mountains and are a subspecies of the blue monkey.'
  }
}