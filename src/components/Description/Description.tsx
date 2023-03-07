import * as S from './Description.styles'

export function Description() {
  return (
    <S.Container>
      <S.AsteriskLineImage />
      <S.CircleImage />
      <S.Description>
        Nordy is a dictionary with the words and their meanings that I learn on
        a daily basis
      </S.Description>
      <S.Motivation>
        The idea came about as a way to improve my English. The words shown are
        common words, used in everyday life.
        <br />
        <br />
        The dictionary is intended for intermediate and advanced English
        learners who lack fluency and for those who want to improve their
        vocabulary.
      </S.Motivation>
    </S.Container>
  )
}
