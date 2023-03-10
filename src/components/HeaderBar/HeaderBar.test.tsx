import { render, screen } from '~/utils/tests'

import { HeaderBar } from '.'

describe('<HeaderBar />', () => {
  it('renders properly', () => {
    render(<HeaderBar />)

    expect(screen.getByText(/nordy - new word a day/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /open github project/i })
    ).toBeInTheDocument()
  })
})
