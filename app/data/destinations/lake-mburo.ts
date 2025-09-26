import type { Destination } from '../destinations-index'

export const lakeMburoDestination: Destination = {
  id: 'lake-mburo',
  title: 'Lake Mburo National Park',
  subtitle: 'Uganda\'s Smallest Savanna Park - Where Wildlife Roams Free',
  description: 'Lake Mburo National Park is Uganda\'s smallest savannah park and the most easily accessed, located in Kiruhura district in the western part of the country. Despite its small size (260 sq. km), the park boasts flat grasslands, rolling hills, forests, 12 lakes, swamps, rocky outcrops, and bush thickets. The park is elephant-free, leading to healthy vast woodlands, and is home to Uganda\'s rarely found species in large numbers including zebras, elands, klipspringers, and impalas. It\'s also the best place to spot leopards in Uganda due to their high density per square kilometer.',
  price: '450',
  rating: 4,
  reviewCount: 89,
  location: 'Western Uganda (Kiruhura District)',
  duration: '2-3 Days',
  groupSize: '2-12',
  difficulty: 'Easy',
  season: 'Year Round',
  images: [
    '/destinations/mburo1.jpg',
    '/destinations/mburo2.jpg',
    '/destinations/mburo3.jpg',
    '/destinations/mburo4.jpg'
  ],
  highlights: [
    'Uganda\'s only park with zebras in large numbers',
    'Best leopard viewing park in Uganda',
    'Elephant-free park with healthy woodlands',
    'Boat safari on Lake Mburo',
    'Horse riding safaris available',
    'Walking safaris throughout the park',
    '12 lakes including Lake Mburo',
    'Lion conservation unit since recent reintroduction',
    'Strategic location for multi-park tours',
    'Rich Ankole cultural heritage'
  ],
  activities: [
    'Game Drives (Day & Night)',
    'Boat Cruise on Lake Mburo',
    'Guided Nature Walks',
    'Lakeside Track Hiking',
    'Sport Fishing',
    'Horseback Riding Safaris',
    'Quad Biking',
    'Bird Watching',
    'Rubanga Forest Walk',
    'Salt Lick Observation',
    'Cultural Visits (Igongo Center)',
    'Rwakobo Rock Hiking'
  ],
  wildlife: [
    'Plains Zebras',
    'African Leopards',
    'African Buffaloes',
    'Elands',
    'Impalas',
    'Hippos',
    'Klipspringers',
    'Giant Bush Rats',
    'Waterbucks',
    'Defassa Waterbucks',
    'Topis',
    'Warthogs',
    'Rothschild\'s Giraffes (reintroduced)',
    'Jackals',
    'African Lions (reintroduced)',
    'Bush Duikers',
    'White-tailed Mongoose',
    'Genets',
    'Over 350 bird species'
  ],
  accommodation: 'Mantana Tented Camp, Arcadia Cottages, Rwonyo Rest Camp, Lake Mburo Safari Lodge, Eagle\'s Nest Lodge, Mihingo Lodge, Rwakobo Rock Lodge',
  included: [
    'Park fees',
    'Game drives (day and night)',
    'Boat safari on Lake Mburo',
    'Nature walks with armed rangers',
    'Professional guide services',
    'Accommodation as specified',
    'All meals during safari'
  ],
  notIncluded: [
    'Transport from Kampala',
    'Horseback riding fees',
    'Quad biking costs',
    'Fishing licenses and equipment',
    'Cultural center entrance fees',
    'Personal expenses',
    'Tips for guides'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival & First Game Drive',
      description: 'Arrive at Uganda\'s most accessible savanna park',
      activities: [
        'Drive from Kampala (3.5 hours) via Masaka',
        'Check-in at lodge with lake views',
        'Afternoon game drive seeking zebras and leopards',
        'Visit salt lick observation point',
        'Evening relaxation at lodge'
      ]
    },
    {
      day: 2,
      title: 'Lake Safari & Cultural Experience',
      description: 'Explore the lake and local Ankole culture',
      activities: [
        'Morning boat cruise on Lake Mburo',
        'Hippo and crocodile viewing',
        'Afternoon visit to Igongo Cultural Center',
        'Learn about Banyankole culture',
        'Evening nature walk or horseback riding'
      ]
    },
    {
      day: 3,
      title: 'Forest Walk & Departure',
      description: 'Final wildlife experiences before departure',
      activities: [
        'Early morning Rubanga Forest Walk',
        'Bird watching (42+ species possible)',
        'Final game drive with zebra photography',
        'Visit Rwakobo Rock for panoramic views',
        'Return to Kampala or continue to other parks'
      ]
    }
  ],
  bestTimeToVisit: 'Year-round destination. Dry season (June-September, December-February) offers easier road access and concentrated wildlife viewing around water sources. Wet season provides lush scenery and excellent bird watching.',
  gettingThere: 'Located 240km from Kampala via Masaka-Mbarara highway (3.5-4 hour drive). Strategically positioned for combined safaris to Queen Elizabeth, Kibale, and Bwindi parks. Charter flights available to nearby airstrips.',
  conservation: 'Originally gazetted as controlled hunting area (1933), upgraded to game reserve (1963), then National Park (1983). Despite past conflicts with pastoralists, current community-based conservation programs ensure successful wildlife reintroduction including giraffes, elands, and lions. The park demonstrates successful human-wildlife coexistence.',
  specialFeatures: {
    historicalNotes: 'The park has an interesting local myth about two Ankole brothers named Mburo and Kigarama. Kigarama received a prophetic dream warning of danger and moved to safety on nearby hills, while Mburo stayed in the valley. Heavy rains flooded the valley, drowning Mburo, hence the lake was named after him and the hill after Kigarama.',
    uniqueFeatures: 'Lake Mburo is one of only two Ugandan parks offering horseback riding safaris (the other being Kabwoya Wildlife Reserve). The elephant-free environment allows for unique activities like walking safaris throughout the park and quad biking among grazing wildlife.',
    culturalSignificance: 'The park region is home to the Banyankole people, famous for their long-horned Ankole cattle. Visitors can experience traditional pastoralist culture and visit the Igongo Cultural Center to learn about Banyakitara tribes (Banyoro, Bakiga, Batooro, Banyankole).'
  }
}