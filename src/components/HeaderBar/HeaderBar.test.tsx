import { render, screen } from '~/utils/tests'

import { HeaderBar } from './HeaderBar'

describe('<HeaderBar />', () => {
  it('should render properly', () => {
    render(<HeaderBar />)

    expect(screen.getByText(/nordy - new word a day/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /open github project/i })
    ).toBeInTheDocument()
  })
})
