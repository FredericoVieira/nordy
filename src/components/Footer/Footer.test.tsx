import { render, screen } from '~/utils/tests'

import { Footer } from '.'

describe('<Footer />', () => {
  it('renders properly', () => {
    render(<Footer />)

    expect(
      screen.getByRole('separator', { name: /separator/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /frederico vieira/i })
    ).toBeInTheDocument()
  })
})
