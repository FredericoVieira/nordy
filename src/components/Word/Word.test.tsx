import { render, screen } from '~/utils/tests'

import { Word } from '.'

describe('<Word />', () => {
  it('renders', () => {
    render(<Word prop="word" />)

    expect(screen.getByRole('heading', { name: /word/i })).toBeInTheDocument()
  })
})
