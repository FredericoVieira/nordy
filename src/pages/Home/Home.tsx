import { useParams } from 'react-router-dom'

import { Description } from '~/components/Description'
import { Word } from '~/components/Word'
import { generateRandomInteger } from '~/utils/helpers'

import * as S from './Home.styles'

import words from '~/data/words.json'

export function Home() {
  const { id } = useParams()

  const randomInteger = generateRandomInteger(words.length)
  const selectedWord =
    (id && words.find((word) => word.id === id)) || words[randomInteger]

  return (
    <S.Page>
      <Word {...selectedWord} />
      <Description />
    </S.Page>
  )
}
