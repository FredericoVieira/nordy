const grades: { [key: number]: string } = {
  1: '1st',
  2: '2nd',
  3: 'High',
}

const normalizeGradeLevel = (level: number) =>
  `${grades[level]} School`.toUpperCase()

export { normalizeGradeLevel }
