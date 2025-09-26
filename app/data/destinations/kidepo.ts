import type { Destination } from '../destinations-index'

export const kidepoDestination: Destination = {
  id: 'kidepo',
  title: 'Kidepo Valley National Park',
  subtitle: 'Uganda\'s Most Remote Wilderness & Africa\'s Hidden Gem',
  description: 'Kidepo Valley National Park is Uganda\'s most isolated and remote park consisting of hills, rugged savannah plains, surrounded by Morungole Mountains (2,750 meters) and great valleys. Located in Kaabong district in northeastern Uganda, it boasts the best landscape in the country and was listed among the 3 most attractive parks in the world by CNN Travel. The park is gifted with two major valleys - Kidepo and Narus, each with rivers of the same name that serve as major water sources. This is the only park in Uganda comparable to Kenya\'s Masai Mara and Tanzania\'s Serengeti.',
  price: '890',
  rating: 5,
  reviewCount: 64,
  location: 'Northeastern Uganda (Kaabong District)',
  duration: '3-4 Days',
  groupSize: '2-12',
  difficulty: 'Easy-Moderate',
  season: 'Year Round (Best: Dec-Mar, Jul-Aug)',
  images: [
    '/destinations/kidepo1.jpg',
    '/destinations/kidepo2.jpg',
    '/destinations/kidepo3.jpg',
    '/destinations/kidepo4.jpg'
  ],
  highlights: [
    'Listed among world\'s top 3 most attractive parks by CNN',
    'Only park in Uganda with cheetahs and African wild dogs',
    'Home to unique wildlife not found in other Ugandan parks',
    'Semi-arid endless savanna plains stretching beyond horizon',
    'Two spectacular valleys: Kidepo and Narus',
    'Morungole Mountains rising to 2,750 meters',
    'Only Ugandan park with ostriches in the wild',
    'Best place for untouched Karamojong culture',
    'Kanangorok Hot Springs near Uganda-South Sudan border',
    'Remote wilderness comparable to Masai Mara'
  ],
  activities: [
    'Game Drives (Morning/Afternoon)',
    'Karamojong Cultural Visits',
    'Ik People Cultural Experience',
    'Nature Walks & Mountain Hikes',
    'Bird Watching',
    'Hot Springs Visit (Kanangorok)',
    'Morungole Mountain Hiking',
    'Namamukweny Valley Birding',
    'Lomej Hills Wildlife Viewing',
    'Night Game Drives'
  ],
  wildlife: [
    'African Lions',
    'African Leopards', 
    'Cheetahs (only in Uganda)',
    'African Wild Dogs',
    'African Bush Elephants',
    'Plains Zebras',
    'African Buffaloes',
    'Rothschild\'s Giraffes',
    'Spotted Hyenas',
    'Bat-eared Fox',
    'Aardwolf',
    'Caracal',
    'Jackals',
    'Klipspringer',
    'Elands',
    'Jackson\'s Hartebeest',
    'Bohor Reedbuck',
    'Bushbuck',
    'Bush Duskier',
    'Defassa Waterbuck',
    'Greater Kudu',
    'Oribi',
    'Uganda Kobs',
    'Ostriches (wild population)',
    '86 mammal species total',
    '500+ bird species'
  ],
  accommodation: 'Apoka Safari Lodge, Nga\'Moru Wilderness Camp, Apoka Rest Camp, Kidepo Savannah Lodge, UWA camping facilities',
  included: [
    'Park entrance fees',
    'Game drives with armed rangers',
    'Cultural visits to Karamojong',
    'Professional guide services',
    'Accommodation as per package',
    'All meals during safari',
    'Airport/accommodation transfers'
  ],
  notIncluded: [
    'Domestic flights to park',
    'Long road transport costs',
    'Ik people cultural visit fees',
    'Mountain hiking permits',
    'Personal expenses and tips',
    'Travel insurance',
    'Additional cultural activities'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Apoka Tourism Center',
      description: 'Arrive at Uganda\'s most remote wilderness',
      activities: [
        'Flight from Entebbe or long scenic drive',
        'Check-in at Apoka Tourism Center',
        'Orientation about park activities',
        'Evening game drive in Narus Valley',
        'Wildlife spotting at Narus River'
      ]
    },
    {
      day: 2,
      title: 'Narus Valley Wildlife Safari',
      description: 'Explore Africa\'s premier wildlife gathering place',
      activities: [
        'Early morning game drive in Narus Valley',
        'Visit artificial Narus water dam',
        'Spot lions, cheetahs, elephants, giraffes',
        'Afternoon exploration of Kidepo Valley',
        'Ostrich viewing in the valley'
      ]
    },
    {
      day: 3,
      title: 'Cultural Experience & Hot Springs',
      description: 'Discover ancient cultures and natural wonders',
      activities: [
        'Visit to Karamojong pastoralist communities',
        'Learn about traditional cattle culture',
        'Excursion to Kanangorok Hot Springs',
        'Views of mountain ranges at border',
        'Cultural storytelling and traditional dances'
      ]
    },
    {
      day: 4,
      title: 'Ik People & Mountain Exploration',
      description: 'Visit the isolated Ik people on Morungole Mountains',
      activities: [
        'Hike to Morungole Mountains (2,750m)',
        'Cultural visit to Ik people settlements',
        'Learn about Ethiopia-origin culture',
        'Mountain wildlife viewing',
        'Return journey via Lomej Hills'
      ]
    }
  ],
  bestTimeToVisit: 'December-March and July-August for best wildlife viewing. Dry season concentrates animals around water sources making sighting easier. Year-round accessibility though roads challenging during rains.',
  gettingThere: 'By Air: Charter flights from Entebbe to park airstrips (1.5 hours). By Road: 521km from Kampala (10-12 hours), 219km from Moroto. Most convenient via domestic flight though road journey offers amazing scenery.',
  conservation: 'Established as game reserve in 1958, upgraded to National Park in 1962. The park protects pristine wilderness while supporting local Karamojong and Ik communities. Conservation efforts focus on anti-poaching, community development, and preserving traditional cultures alongside wildlife protection.',
  specialFeatures: {
    historicalNotes: 'Originally gazetted in 1958 by Colonial British Government to protect wildlife from poaching and vegetation clearing. Upgraded to National Park status in 1962 following Uganda\'s independence under President Milton Obote. The park\'s isolation helped preserve both wildlife and traditional cultures.',
    culturalSignificance: 'Home to two distinct indigenous peoples: the Karamojong (nomadic pastoralists related to Kenya\'s Masai) and the Ik people (mountain dwellers who migrated from Ethiopia). Both cultures remain largely untouched by modernization, offering authentic African cultural experiences.',
    uniqueFeatures: 'Only Ugandan park with wild ostriches, cheetahs, and African wild dogs. The park\'s semi-arid landscape creates a unique ecosystem different from Uganda\'s other parks. Kanangorok Hot Springs provide therapeutic waters near international borders.'
  }
}