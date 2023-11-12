import { render, screen } from '~/utils/tests'

import { Word } from './Word'

const word = {
  id: 'adhere',
  firstLetter: 'a',
  level: 2,
  type: 'verb',
  pronunciation: 'ad·heer',
  synonym: 'stick',
  translation: 'aderir',
  definitions: [
    'stick fast to a surface or substance',
    'to give support or maintain loyalty',
  ],
  examples: [
    'the stamp failed to adhere to the envelope',
    'adhere to traditional values',
  ],
  inflections: [],
}

describe('<Word />', () => {
  it('should render properly', () => {
    render(<Word {...word} />)

    expect(screen.getAllByText(/adhere/i)).toHaveLength(3)
    expect(screen.getByText('stick')).toBeInTheDocument()
    expect(screen.getByText(/verb/i)).toBeInTheDocument()
    expect(screen.getByText(/medium/i)).toBeInTheDocument()
    expect(screen.getByText(/aderir/i)).toBeInTheDocument()
    expect(screen.getByText(/ad·heer/i)).toBeInTheDocument()
    expect(
      screen.getByText(/stick fast to a surface or substance/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/to give support or maintain loyalty/i)
    ).toBeInTheDocument()
  })
})
