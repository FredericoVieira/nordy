import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Letter } from '.'

vi.mock('react-router-dom', async () => {
  const mod = (await vi.importActual('react-router-dom')) as object
  return {
    ...mod,
    useParams: () => ({
      letter: 'a',
    }),
  }
})

describe('<Letter />', () => {
  it('renders properly', () => {
    render(
      <MemoryRouter>
        <Letter />
      </MemoryRouter>
    )

    expect(screen.getByText('a')).toBeInTheDocument()

    expect(screen.getByText(/adhere/i)).toBeInTheDocument()
    expect(screen.getByText(/aderir/i)).toBeInTheDocument()
    expect(screen.getByText(/ad·heer/i)).toBeInTheDocument()

    expect(screen.getByText(/acknowledge/i)).toBeInTheDocument()
    expect(screen.getByText(/reconhecer/i)).toBeInTheDocument()
    expect(screen.getByText(/ak·naa·luhj/i)).toBeInTheDocument()

    expect(screen.getByText(/amenity/i)).toBeInTheDocument()
    expect(screen.getByText(/cortesia/i)).toBeInTheDocument()
    expect(screen.getByText(/a·meh·nuh·te/i)).toBeInTheDocument()

    expect(screen.getByText(/aware/i)).toBeInTheDocument()
    expect(screen.getByText(/ciente/i)).toBeInTheDocument()
    expect(screen.getByText(/a·wehr/i)).toBeInTheDocument()
  })
})
