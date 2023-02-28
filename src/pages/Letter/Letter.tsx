import { useNavigate, useParams } from 'react-router-dom'

import * as S from './Letter.styles'

import words from '~/data/words.json'

export function Letter() {
  const navigate = useNavigate()
  const { letter } = useParams()

  const filteredWords = words.filter(
    ({ firstLetter }) => firstLetter === letter
  )

  return (
    <S.Page>
      <S.StarImage />
      <S.Letter>{letter}</S.Letter>
      <S.LetterList>
        {filteredWords.map(({ id, translation, pronunciation }) => (
          <S.WordList key={id} onClick={() => navigate(`/${id}`)}>
            <S.AsteriskImage />
            <S.Word key={id}>{id}</S.Word>
            <S.Translation>{translation}</S.Translation>
            <S.Pronunciation>/{pronunciation}/</S.Pronunciation>
          </S.WordList>
        ))}
      </S.LetterList>
      <S.TableImage />
    </S.Page>
  )
}
