import { MemoryRouter } from 'react-router-dom'

import { generateAlphabet } from '~/utils/helpers'
import { render, screen } from '~/utils/tests'

import { Navigation } from '.'

describe('<Navigation />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Navigation showHeader />
      </MemoryRouter>
    )

    expect(screen.getByText(/search by/i)).toBeInTheDocument()
    expect(screen.getByText(/initial letter/i)).toBeInTheDocument()

    generateAlphabet().flatMap(({ capital }) =>
      expect(screen.getByRole('link', { name: capital })).toBeInTheDocument()
    )
  })
})
