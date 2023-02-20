import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Navigation } from '.'

describe('<Navigation />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Letter' })).toBeInTheDocument()
  })
})
