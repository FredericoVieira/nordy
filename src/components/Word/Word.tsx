import { normalizeGradeLevel } from '~/utils'

import * as S from './Word.styles'

import type { WordProps } from './types'

export function Word({
  id,
  level,
  type,
  pronunciation,
  synonym,
  translation,
  definitions,
  examples,
}: WordProps) {
  const hasSingleItem = definitions.length === 1

  const handleExample = (example: string) => {
    const [after, before] = example.split(id)
    return (
      <>
        {after} <S.Word>{id}</S.Word> {before}
      </>
    )
  }

  return (
    <S.Container>
      <S.CirclesImage />
      <S.Wrapper>
        <S.Word main>{id}</S.Word>
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
      <S.Wrapper hasMaxWidth>
        <S.List hasSingleItem={hasSingleItem}>
          {definitions.map((definition, index) => (
            <S.Item key={index}>{definition}</S.Item>
          ))}
        </S.List>
      </S.Wrapper>
      <S.Examples>
        <S.CubeImage />
        <S.List hasSingleItem={hasSingleItem} isExample>
          {examples.map((example, index) => (
            <S.Item key={index}>{handleExample(example)}</S.Item>
          ))}
        </S.List>
      </S.Examples>
    </S.Container>
  )
}
