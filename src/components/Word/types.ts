export type WordProps = {
  id: string
  firstLetter: string
  level: number
  type: string
  pronunciation: string
  synonym: string
  translation: string
  definitions: Array<string>
  examples: Array<string>
  language?: string // TODO: not implemented yet
  inflections: Array<string>
}
