import * as S from "./style";

/**
 * Header component
 *
 * 상단 헤더에 사용되는 컴포넌트
 * children에 text를 넣어 사용함
 *
 */

export function HeaderText({ children }) {
  return <S.Text>{children}</S.Text>;
}
