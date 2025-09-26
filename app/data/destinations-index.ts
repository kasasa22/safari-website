// Import individual destination files
import { bwindiDestination } from './destinations/bwindi-impenetrable'
import { murchisonDestination } from './destinations/murchison-falls'
import { queenElizabethDestination } from './destinations/queen-elizabeth'
import { kidepoDestination } from './destinations/kidepo'
import { kibaleDestination } from './destinations/kibale'
import { lakeMburoDestination } from './destinations/lake-mburo'
import { mgahaingaDestination } from './destinations/mgahinga'
import { rwenzoriDestination } from './destinations/rwenzori'
import { jinjaDestination } from './destinations/jinja'

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



// Export all destinations
export const destinations: Record<string, Destination> = {
  'bwindi-impenetrable': bwindiDestination,
  'murchisons': murchisonDestination,
  'queen-elizabeth': queenElizabethDestination,
  'kibale': kibaleDestination,
  'lake-mburo': lakeMburoDestination,
  'mgahinga': mgahaingaDestination,
  'kidepo': kidepoDestination,
  'rwenzori': rwenzoriDestination,
  'jinja': jinjaDestination
}

export function getDestination(id: string): Destination | null {
  return destinations[id] || null
}

export function getAllDestinations(): Destination[] {
  return Object.values(destinations)
}