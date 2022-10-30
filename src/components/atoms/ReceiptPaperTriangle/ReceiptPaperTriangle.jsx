import * as S from "./ReceiptPaperTriangle.styles";

/**
 * ReceiptPaperTriangle
 *
 * 영수증의 삼각형 모양입니다
 * map을 이용해 삼각형을 만들어줍니다
 *
 * @returns
 */
export function ReceiptPaperTriangle({ isPaper }) {
  const Triangle = new Array(23).fill(0).map((_, i) => {
    return <S.Triangle key={i} isPaper={isPaper} />;
  });

  return <S.TriContainer>{Triangle}</S.TriContainer>;
}
