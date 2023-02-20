import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Letter } from '.'

describe('<Letter />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Letter />
      </MemoryRouter>
    )

    const [title, description] = screen.getAllByRole('heading')

    expect(title).toHaveTextContent('Letter Page')
    expect(description).toHaveTextContent('This is the Letter page description')
  })
})
