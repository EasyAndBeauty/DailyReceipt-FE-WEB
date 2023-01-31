import * as S from "./HeaderText.styles";

/**
 * Header Text
 *
 * Header에 표시되는 텍스트용 컴포넌트
 * children에 text를 넣어 사용함
 *
 */

export function HeaderText({ children }) {
  return <S.Text>{children}</S.Text>;
}
