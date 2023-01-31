import * as S from "./Spacer.styles";

/**
 * Spacer
 *
 * 아래 위로 공간을 주기 위한 빈 div입니다.
 *
 * @param {String} size - "sm" (12px) / "md"(default, 24px) / "lg" (36px)
 *
 */

export function Spacer({ size = "md" }) {
  return <S.Spacer size={size}></S.Spacer>;
}
