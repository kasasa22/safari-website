import type { Destination } from '../destinations-index'

export const rwenzoriDestination: Destination = {
  id: 'rwenzori',
  title: 'Mountain Rwenzori National Park',
  subtitle: 'The Mountains of the Moon - Africa\'s Third Highest Peak',
  description: 'Mountain Rwenzori National Park is one of Uganda\'s highest altitude and oldest protected areas, situated in the southwestern corner along the border with DR Congo\'s Virunga National Park. The park covers 1,000 sq. km and is home to the mighty Rwenzori mountain ranges, including Mount Stanley\'s peak Margherita (5,109m) - Africa\'s third highest point. Known as the "Mountains of the Moon," this UNESCO World Heritage Site features unique vegetation zones, glaciers, over 20 lakes, beautiful waterfalls, and distinctive flora that differentiates it from other African parks.',
  price: '1,450',
  rating: 4,
  reviewCount: 42,
  location: 'Western Uganda (Kasese, Kabarole, Bundibugyo)',
  duration: '7-10 Days',
  groupSize: '2-8',
  difficulty: 'Hard',
  season: 'Dec-Feb, Jun-Aug',
  images: [
    '/destinations/rwenzori1.jpg',
    '/destinations/rwenzori2.jpg',
    '/destinations/rwenzori3.jpg',
    '/destinations/rwenzori4.jpg'
  ],
  highlights: [
    'Africa\'s third-highest peak (Mount Margherita 5,109m)',
    'UNESCO World Heritage Site since 1994',
    'Unique vegetation zones from tropical to alpine',
    'Glaciers and permanent snow at equator',
    'Over 20 mountain lakes',
    'Rare three-horned chameleon (males only)',
    'World-class mountaineering destination',
    'Multiple volcanic peaks to climb',
    '18 sacred sites for local communities',
    'Mountains of the Moon legendary status'
  ],
  activities: [
    'Mountain Climbing (Multi-day)',
    'Peak Climbing to Margherita',
    'Central Circuit Trail (7 days)',
    'Kilembe Trail (5 days)',
    'Forest Hiking',
    'Nature Walks',
    'Bird Watching',
    'Cultural Experiences (Bakonzo people)',
    'Photography Safaris',
    'Research Station Visits'
  ],
  wildlife: [
    'Forest Elephants',
    'Chimpanzees',
    'Blue Monkeys',
    'Black-and-white Colobus Monkeys',
    'Angola Colobus',
    'Olive Baboons',
    'Leopards',
    'Giant Forest Hogs',
    'Bush Babies',
    'Rwenzori Otter',
    'Duikers',
    'Three-horned Chameleon (endemic)',
    '177+ bird species',
    '70+ mammal species'
  ],
  accommodation: 'Hotel Margherita, Rwenzori International Hotel, Katara Lodge, Equator Snow Lodge, Tours Holiday Inn, Ruboni Community Camp, Rwenzori Turaco View Campsite, Mihunga Safari Lodge, Mountain huts on climbing routes',
  included: [
    'Professional mountain guides',
    'Porter services',
    'Mountain huts accommodation',
    'Climbing equipment (basic)',
    'Park entrance fees',
    'All meals on mountain',
    'Rescue services backup',
    'Cultural experiences'
  ],
  notIncluded: [
    'Personal climbing gear',
    'Pre/post climb accommodation',
    'Transport to/from Kampala',
    'Travel insurance',
    'Extra porter services',
    'Personal expenses',
    'Equipment rental'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Preparation & Forest Entry',
      description: 'Begin the legendary Mountains of the Moon adventure',
      activities: [
        'Arrive in Kasese town',
        'Equipment check and briefing',
        'Meet guides and porters',
        'Enter montane forest zone',
        'First night at mountain hut'
      ]
    },
    {
      day: 2,
      title: 'Bamboo Zone Ascent',
      description: 'Climb through distinctive vegetation zones',
      activities: [
        'Ascend through bamboo forest',
        'Experience changing vegetation',
        'Wildlife spotting opportunities',
        'Photography of unique flora',
        'Night at higher altitude hut'
      ]
    },
    {
      day: 3-6,
      title: 'High Altitude Climbing',
      description: 'Navigate through heath and alpine zones',
      activities: [
        'Tree heath and bog zone trekking',
        'Hagenia-Rapanea scrub zone',
        'Afro-Alpine moorland exploration',
        'Acclimatization days',
        'Prepare for summit attempt'
      ]
    },
    {
      day: 7,
      title: 'Summit Attempt - Margherita Peak',
      description: 'Climb to Africa\'s third highest point',
      activities: [
        'Pre-dawn summit attempt',
        'Glacier crossing experience',
        'Reach Margherita Peak (5,109m)',
        'Experience snow at the equator',
        'Descend to lower camp'
      ]
    },
    {
      day: 8-9,
      title: 'Descent & Cultural Experience',
      description: 'Return through vegetation zones',
      activities: [
        'Gradual descent through zones',
        'Visit Bakonzo communities',
        'Learn about mountain culture',
        'Traditional healing practices',
        'Return to Kasese'
      ]
    }
  ],
  bestTimeToVisit: 'June-September and December-February during dry seasons for optimal climbing conditions. These periods offer clearer weather, less rainfall, and better visibility of peaks. Climbing is possible year-round but wet seasons (March-May, October-November) present more challenging conditions.',
  gettingThere: 'By Road: 300km from Kampala via Mubende-Fort Portal-Kasese (5-6 hours). By Air: Charter flights from Entebbe to Kasese airstrip (2.5 hours) then short drive to park headquarters or accommodation.',
  conservation: 'Gazetted as National Park in 1991, designated UNESCO World Heritage Site in 1994. Temporarily listed as "in danger" (1999-2004) due to rebel activities. The park protects unique montane ecosystems, endemic species, and serves as a crucial water catchment. Community programs support the indigenous Bakonzo people and forest conservation.',
  specialFeatures: {
    unescoStatus: 'Declared a UNESCO World Heritage Site in 1994 for its exceptional natural beauty, unique ecosystems, and endemic species. The park represents one of Africa\'s most important montane environments and a crucial component of the Albertine Rift ecosystem.',
    vegetationZones: 'The park showcases five distinct vegetation zones: Montane Forest (1,000-2,500m), Bamboo Forest (2,500-3,000m), Tree Heath-Bog (3,000-4,000m), Afro-Alpine Moorland (4,000-4,500m), and Alpine Zone (4,500m+). Each zone supports unique flora and fauna adapted to specific altitude conditions.',
    glacialFeatures: 'Despite being located on the equator, Rwenzori Mountains have permanent glaciers and snow fields. The park contains over 20 mountain lakes formed by glacial action, waterfalls, and unique geological formations that contribute to its "Mountains of the Moon" mystique.',
    culturalImportance: 'The mountains hold deep cultural significance for the Bakonzo people, who consider 18 sites within the park as sacred. Traditional beliefs associate the mountains with ancestral spirits, and the peaks play important roles in local weather prediction and agricultural practices.'
  }
}