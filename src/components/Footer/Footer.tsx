import * as S from './Footer.styles'

export function Footer() {
  return (
    <S.Footer>
      <S.Hr />
      <S.Note>
        © {new Date().getFullYear()} -{' '}
        <S.Link href="https://fredvieira.dev/" target="_blank">
          Frederico Vieira
        </S.Link>
      </S.Note>
    </S.Footer>
  )
}
