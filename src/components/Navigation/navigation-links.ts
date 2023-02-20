import { generateAlphabet } from '~/utils/helpers'

export const NAVIGATION_LINKS = [
  {
    to: '/',
    label: 'Home',
  },
  ...generateAlphabet().map(({ letter, capital }) => ({
    to: `letter/${letter}`,
    label: capital,
  })),
]
