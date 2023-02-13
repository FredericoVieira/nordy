import * as S from './Description.styles'

import circle from '~/assets/circle.svg'

export function Description() {
  return (
    <S.Container>
      <S.Circle src={circle} alt="circle" />
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
