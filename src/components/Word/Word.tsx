import { handlePunctuation, normalizeGradeLevel } from '~/utils/helpers'

import * as S from './Word.styles'
import { CLASSIFICATIONS } from './constants'

import type { WordProps } from './types'

export function Word({
  id,
  level,
  type,
  pronunciation,
  synonym,
  translation,
  classification,
  definitions,
  examples,
  inflections,
}: WordProps) {
  const hasSingleItem = definitions?.length === 1

  const handleExample = (example: string) => {
    const inflection = inflections.find((inflection) => {
      return example.includes(inflection)
    })
    const word = inflection || id
    const [after, before] = example.split(word)
    return (
      <>
        {after} <S.Word>{word}</S.Word>
        {handlePunctuation(before)}
      </>
    )
  }

  return (
    <S.Container>
      <S.CirclesImage />
      <S.Wrapper>
        <S.WordWrapper>
          {classification !== CLASSIFICATIONS.FORMAL && (
            <S.Classification>{classification}</S.Classification>
          )}
          <S.Word main>{id}</S.Word>
        </S.WordWrapper>
        <S.Properties>
          <S.Property>
            <S.Word>{synonym}</S.Word>
          </S.Property>
          <S.Property>{type}</S.Property>
          <S.Property>{normalizeGradeLevel(level)}</S.Property>
        </S.Properties>
      </S.Wrapper>
      <S.Wrapper>
        <S.Translation>{translation}</S.Translation>
        <S.Pronunciation>/{pronunciation}/</S.Pronunciation>
      </S.Wrapper>
      <S.Wrapper>
        <S.List hasSingleItem={hasSingleItem}>
          {definitions?.map((definition, index) => (
            <S.Item key={index}>{definition}</S.Item>
          ))}
        </S.List>
      </S.Wrapper>
      <S.Examples>
        <S.CubeImage />
        <S.List hasSingleItem={hasSingleItem} isExample>
          {examples?.map((example, index) => (
            <S.Item key={index}>{handleExample(example)}</S.Item>
          ))}
        </S.List>
      </S.Examples>
      <S.AsteriskLineImage />
    </S.Container>
  )
}
