const grades: { [key: number]: string } = {
  1: '1st',
  2: '2nd',
  3: 'High',
}

const normalizeGradeLevel = (level: number) => `${grades[level]}-Sch`

const generateAlphabet = () =>
  [...Array(26)].map((_, i) => ({
    letter: String.fromCharCode(i + 97),
    capital: String.fromCharCode(i + 65),
  }))

const generateRandomInteger = (max: number) => {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max + 1))
}

const handlePunctuation = (endingSentenceSlice: string) => {
  const startsWithPunctuation = !!endingSentenceSlice.match(/^[.,:!?]/)
  return `${startsWithPunctuation ? '' : ' '}${endingSentenceSlice}`
}

export {
  normalizeGradeLevel,
  generateAlphabet,
  generateRandomInteger,
  handlePunctuation,
}
