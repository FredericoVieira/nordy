import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Home } from './Home'

vi.mock('react-router-dom', async () => {
  const mod = (await vi.importActual('react-router-dom')) as object
  return {
    ...mod,
    useParams: () => ({
      id: 'adhere',
    }),
  }
})

describe('<Home />', () => {
  it('renders properly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getAllByText(/adhere/i)).toHaveLength(3)
  })
})
