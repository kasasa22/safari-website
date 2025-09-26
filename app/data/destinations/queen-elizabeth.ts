import type { Destination } from '../destinations-index'

export const queenElizabethDestination: Destination = {
  id: 'queen-elizabeth',
  title: 'Queen Elizabeth National Park',
  subtitle: 'Uganda\'s Most Visited & Biodiverse National Park',
  description: 'Queen Elizabeth National Park is Uganda\'s most popular and visited national park, spanning 1,978 square kilometers across four districts in western Uganda. Originally named Kazinga National Park, it was renamed after Queen Elizabeth II\'s visit in the 1950s. Located within the rain shadow of the Rwenzori Mountains, the park boasts year-round green scenery and diverse landscapes including woodlands, lakes, forests, plains, rivers, gorges, and volcanic features. The park is a UNESCO lion conservation unit and home to over 95 mammal species, 490+ bird species, and the famous tree-climbing lions of Ishasha.',
  price: '650',
  rating: 5,
  reviewCount: 198,
  location: 'Western Uganda (Kamwenge, Rubirizi, Kasese, Rukingiri)',
  duration: '3-4 Days',
  groupSize: '2-12',
  difficulty: 'Easy',
  season: 'Year Round',
  images: [
    '/destinations/qenp1.jpg',
    '/destinations/qenp2.jpg',
    '/destinations/qenp3.jpg',
    '/destinations/qenp4.jpg',
    '/destinations/qenp5.jpg'
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
}