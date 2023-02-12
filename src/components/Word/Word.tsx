import { normalizeGradeLevel } from '~/utils'

import * as S from './Word.styles'

import type { WordProps } from './types'

import asteriskLine from '~/assets/asterisk-line.svg'
import circles from '~/assets/circles.svg'
import cube from '~/assets/cube.svg'

export function Word({
  id,
  firstLetter,
  level,
  type,
  pronunciation,
  synonym,
  translation,
  definitions,
  examples,
}: WordProps) {
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
      <S.Circles src={circles} alt="circles" />
      <S.Wrapper>
        <S.Word main>{id.toUpperCase()}</S.Word>
        <S.Properties>
          <S.Property>
            <S.Word>{synonym.toUpperCase()}</S.Word>
          </S.Property>
          <S.Property>{type.toUpperCase()}</S.Property>
          <S.Property>{normalizeGradeLevel(level)}</S.Property>
        </S.Properties>
      </S.Wrapper>
      <S.Wrapper>
        <S.Translation>{translation.toUpperCase()}</S.Translation>
        <S.Properties>
          <S.Pronunciation>/{pronunciation}/</S.Pronunciation>
          <S.List>
            {definitions.map((definition, index) => (
              <S.Item key={index}>{definition}</S.Item>
            ))}
          </S.List>
        </S.Properties>
      </S.Wrapper>
      <S.Examples>
        <S.Cube src={cube} alt="cube" />
        <S.List>
          {examples.map((example, index) => (
            <S.Item key={index}>{handleExample(example)}</S.Item>
          ))}
        </S.List>
        <S.AsteriskLine src={asteriskLine} alt="asterisk-line" />
      </S.Examples>
    </S.Container>
  )
}
