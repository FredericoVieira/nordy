import { useParams } from 'react-router-dom'

import { Description } from '~/components/Description'
import { Word } from '~/components/Word'
import { generateRandomInteger } from '~/utils/helpers'

import * as S from './Home.styles'

import words from '~/data/words.json'

export function Home() {
  const { id } = useParams()
  const selectedWord = words.find((word) => word.id === id)

  const randomInteger = generateRandomInteger(words.length - 1)
  const wordToDisplay = selectedWord ?? words[randomInteger]

  return (
    <S.Page>
      <Word {...wordToDisplay} />
      {!selectedWord && <Description />}
    </S.Page>
  )
}
