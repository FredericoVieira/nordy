import { render, screen } from '~/utils/tests'

import { Footer } from './Footer'

describe('<Footer />', () => {
  it('should render properly', () => {
    render(<Footer />)

    expect(
      screen.getByRole('separator', { name: /separator/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /frederico vieira/i })
    ).toBeInTheDocument()
  })
})
