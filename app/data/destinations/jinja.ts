import type { Destination } from '../destinations-index'

export const jinjaDestination: Destination = {
  id: 'jinja',
  title: 'Jinja - Adventure Capital',
  subtitle: 'Source of the Nile & East Africa\'s Adrenaline Center',
  description: 'Jinja is East Africa\'s adventure capital and adrenaline center, located in eastern Uganda where the mighty River Nile begins its 6,650km journey to the Mediterranean Sea. Once Uganda\'s leading industrial town, Jinja has transformed into a premier adventure tourism destination offering world-class white water rafting, bungee jumping, and numerous water sports. The city provides the perfect blend of adrenaline-raising activities and serene relaxation along the world\'s longest river, just 2 hours from Kampala.',
  price: '320',
  rating: 4,
  reviewCount: 143,
  location: 'Eastern Uganda',
  duration: '2-3 Days',
  groupSize: '2-15',
  difficulty: 'Easy-Moderate',
  season: 'Year Round',
  images: [
    '/images/jinja1.jpeg',
    '/images/jina2.jpeg',
    '/images/jinja3.jpeg',
    '/images/jinja4.jpeg',
    '/images/jinja5.jpeg',
    '/images/jinja6.jpeg',
    '/images/jinja7.jpeg'
  ],
  highlights: [
    'Source of the world\'s longest river - River Nile',
    'Grade 5 white water rafting (best in Africa)',
    'Bungee jumping from 44-meter tower over Nile',
    'Adventure capital of East Africa',
    'Historic colonial architecture and temples',
    'Serene setting perfect for relaxation',
    'World-class adventure tourism facilities',
    'Mahatma Gandhi monument and cultural sites',
    'Mabira Forest nearby for eco-tourism',
    'Perfect base for multi-activity adventures'
  ],
  activities: [
    'White Water Rafting (Grade 5)',
    'Bungee Jumping (44m tower)',
    'Jet Boating (90 km/h speeds)',
    'Source of Nile Boat Trips',
    'Kayaking & Canoeing',
    'Tubing the Nile',
    'Quad Biking',
    'Horseback Riding',
    'Mountain Biking',
    'Sport Fishing',
    'Golf (with Big Five statues)',
    'Bird Watching',
    'Cultural Tours',
    'Mabira Forest Walks'
  ],
  wildlife: [
    'Nile Monitor Lizards',
    'Various Water Birds',
    'Fish Species (Nile Perch, Tilapia)',
    'River Ecosystems',
    'Primates in Mabira Forest',
    'Butterflies and Insects',
    'Aquatic Life',
    'Riverine Vegetation'
  ],
  accommodation: 'Wild Waters Lodge, Explorer\'s River Camp, Gately on the Nile, Source of the Nile Hotel, 2 Friends Guest House, Bilkon Hotel, Brisk Hotel Triangle Jinja, Sunset Hotel International',
  included: [
    'Selected adventure activities',
    'Safety equipment provision',
    'Professional instructors/guides',
    'Accommodation as specified',
    'Source of Nile visit',
    'Cultural site visits',
    'All meals as per package'
  ],
  notIncluded: [
    'All adventure activities (varies by choice)',
    'Transport from Kampala',
    'Equipment for personal activities',
    'Mabira Forest entrance fees',
    'Personal expenses',
    'Tips for guides and instructors',
    'Travel insurance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Source of Nile',
      description: 'Discover where the world\'s longest river begins',
      activities: [
        'Drive from Kampala (2 hours) via Jinja highway',
        'Visit Source of the Nile monument',
        'Boat trip to exact Nile source point',
        'John Speke historical site visit',
        'Evening relaxation at riverside lodge'
      ]
    },
    {
      day: 2,
      title: 'Ultimate Adventure Day',
      description: 'Experience world-class adrenaline activities',
      activities: [
        'Morning white water rafting (Grade 5 rapids)',
        'Conquer multiple rapids on longest river',
        'Afternoon bungee jumping (44m over Nile)',
        'Optional jet boating experience',
        'Evening cultural dinner and relaxation'
      ]
    },
    {
      day: 3,
      title: 'Nature & Culture Exploration',
      description: 'Discover Jinja\'s natural and cultural heritage',
      activities: [
        'Morning visit to Mabira Forest',
        'Nature walks and primate spotting',
        'Explore colonial architecture in Jinja',
        'Visit Hindu temples and Gandhi monument',
        'Return to Kampala or continue adventures'
      ]
    }
  ],
  bestTimeToVisit: 'Year-round destination with March-May and September-November being optimal for white water activities due to higher water levels. December-February offers excellent weather for all activities. June-August provides perfect conditions for rafting and outdoor adventures.',
  gettingThere: 'Located 81km from Kampala via the well-tarmacked Jinja highway (1.5-2 hours drive). Regular bus services and private transport options available. Easy day trip from Kampala or perfect for multi-day adventure packages.',
  conservation: 'Adventure tourism in Jinja supports Nile River conservation awareness and local community development. Tourism revenue funds environmental education programs and sustainable development initiatives. The industry promotes responsible tourism practices and river ecosystem protection.',
  specialFeatures: {
    adventureCapital: 'Jinja has earned its reputation as East Africa\'s adventure capital through offering world-class facilities for extreme sports. The Grade 5 white water rafting is considered among the best in Africa, with experienced international guides ensuring safety while providing unforgettable thrills.',
    sourceOfNile: 'The Source of the Nile in Jinja marks the beginning of the world\'s longest river\'s 6,650km journey through 11 countries to the Mediterranean Sea. John Speke, the first European to identify the source in 1862, described it as one of the most important geographical discoveries of the 19th century.',
    industrialHistory: 'Jinja was once Uganda\'s leading industrial center due to hydroelectric power from the Nile. The expulsion of Indians by Idi Amin in the 1970s led to economic decline, but this inadvertently preserved the town\'s colonial character and created the perfect environment for adventure tourism development.',
    culturalHeritage: 'The city features significant cultural sites including the Gandhi Monument commemorating where Mahatma Gandhi\'s ashes were scattered in the Nile, historic Hindu temples, and well-preserved colonial architecture that tells the story of Uganda\'s diverse cultural heritage.'
  }
}