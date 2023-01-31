import * as S from "./ErrorText.styles";

/**
 * Error Text
 *
 * 에러 표시용 텍스트를 위한 컴포넌트
 * children에 text를 넣어 사용함
 *
 */

export function ErrorText({ children }) {
  return <S.Text>{children}</S.Text>;
}
