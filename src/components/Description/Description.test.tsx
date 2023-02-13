import { render, screen } from '~/utils/tests'

import { Description } from '.'

describe('<Description />', () => {
  it('renders', () => {
    render(<Description prop="description" />)

    expect(screen.getByRole('heading', { name: /description/i })).toBeInTheDocument()
  })
})
