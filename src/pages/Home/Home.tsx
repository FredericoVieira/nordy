import { Description } from '~/components/Description'
import { Word } from '~/components/Word'

import * as S from './Home.styles'

const word = {
  id: 'adhere',
  firstLetter: 'a',
  level: 2,
  type: 'verb',
  pronunciation: 'ad·heer',
  synonym: 'stick',
  translation: 'aderir',
  definitions: [
    'stick fast to a surface or substance',
    'to give support or maintain loyalty',
  ],
  examples: [
    'the stamp failed to adhere to the envelope',
    'adhere to traditional values',
  ],
}

export function Home() {
  return (
    <S.Page>
      <Word {...word} />
      <Description />
    </S.Page>
  )
}
