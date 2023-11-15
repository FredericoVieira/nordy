import { CLASSIFICATIONS, TYPES } from './constants'

export type WordProps = {
  id: string
  firstLetter: string
  level: number
  type: typeof TYPES[keyof typeof TYPES]
  pronunciation: string
  synonym: string
  translation: string
  classification: typeof CLASSIFICATIONS[keyof typeof CLASSIFICATIONS]
  definitions: Array<string>
  examples: Array<string>
  inflections: Array<string>
}
