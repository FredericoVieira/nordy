import { render, screen } from '~/utils/tests'

import { HeaderBar } from '.'

describe('<HeaderBar />', () => {
  it('renders', () => {
    render(<HeaderBar />)

    expect(
      screen.getByRole('heading', { name: /headerbar/i })
    ).toBeInTheDocument()
  })
})
