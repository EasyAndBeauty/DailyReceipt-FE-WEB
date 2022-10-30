import * as S from "./TextBtn.styles";

/**
 * BackBtn
 *
 * 뒤로가기 버튼입니다
 * 누르면 이전 페이지로 이동합니다
 *
 * @returns
 */
export function TextBtn({ onClick, type = "default", children }) {
  return (
    <S.TextContainer onClick={onClick} type={type}>
      {children}
    </S.TextContainer>
  );
}
