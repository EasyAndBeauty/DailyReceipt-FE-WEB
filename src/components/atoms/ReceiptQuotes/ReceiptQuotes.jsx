import * as S from "./ReceiptQuotes.styles";
/**
 * ReceiptQuotes
 *
 * 영수증의 문구를 보여주는 컴포넌트입니다
 * 랜덤 영어 명언 API를 사용해 랜덤으로 문구를 보여줍니다
 * @param {string} quote 명언
 * @returns
 */
export function ReceiptQuotes({ quote }) {
  return <S.Quotes>{quote}</S.Quotes>;
}
