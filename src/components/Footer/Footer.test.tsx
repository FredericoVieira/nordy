import { render, screen } from '~/utils/tests'

import { Footer } from '.'

describe('<Footer />', () => {
  it('renders', () => {
    render(<Footer prop="footer" />)

    expect(screen.getByRole('heading', { name: /footer/i })).toBeInTheDocument()
  })
})
