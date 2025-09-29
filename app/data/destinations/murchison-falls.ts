import type { Destination } from '../destinations'

export const murchisonDestination: Destination = {
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
    '/much5.jpeg',
    '/much6.jpeg',
    '/much7.jpeg',
    '/much8.jpeg',
    '/much9.mp4',
    '/much10.mp4',
    '/much11.mp4',
    '/much12.mp4'
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
}