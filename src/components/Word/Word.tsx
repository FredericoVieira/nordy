import { normalizeGradeLevel } from '~/utils'

import * as S from './Word.styles'

import type { WordProps } from './types'

import asteriskLine from '~/assets/asterisk-line.svg'
import circles from '~/assets/circles.svg'
import cube from '~/assets/cube.svg'

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
  const isSingleDefinition = definitions.length === 1

  const handleExample = (example: string) => {
    const [after, before] = example.split(id)
    return (
      <>
        {after} <S.Word>{id}</S.Word> {before}
      </>
    )
  }

  return (
    <>
      <S.Circles src={circles} alt="circles" />
      <S.Container>
        <S.WordProperties>
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
            <S.Properties>
              <S.Pronunciation>/{pronunciation}/</S.Pronunciation>
              <S.List isSingleDefinition={isSingleDefinition} hasMargin>
                {definitions.map((definition, index) => (
                  <S.Item key={index}>{definition}</S.Item>
                ))}
              </S.List>
            </S.Properties>
          </S.Wrapper>
        </S.WordProperties>
        <S.Examples>
          <S.Cube src={cube} alt="cube" />
          <S.List isSingleDefinition={isSingleDefinition}>
            {examples.map((example, index) => (
              <S.Item key={index}>{handleExample(example)}</S.Item>
            ))}
          </S.List>
        </S.Examples>
      </S.Container>
      <S.AsteriskLine src={asteriskLine} alt="asterisk-line" />
    </>
  )
}
