import { render, screen } from '~/utils/tests'

import { Description } from './Description'

describe('<Description />', () => {
  it('should render properly', () => {
    render(<Description />)

    expect(
      screen.getByText(
        /nordy is a dictionary with the words and their meanings that i learn on a daily basis/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/the idea came about as a way to improve my english/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /the words shown are common words, used in everyday life/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /the dictionary is intended for intermediate and advanced english learners who lack fluency and for those who want to improve their vocabulary/i
      )
    ).toBeInTheDocument()
  })
})
