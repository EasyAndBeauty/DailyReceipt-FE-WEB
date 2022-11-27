import { useEffect, useState } from "react";
import * as S from "./ReceiptQuotes.styles";

/**
 * ReceiptQuotes
 *
 * 영수증의 문구를 보여주는 컴포넌트입니다
 * 랜덤 영어 명언 API를 사용해 랜덤으로 문구를 보여줍니다
 *
 * @returns
 */
export function ReceiptQuotes() {
  const [quotesState, setQuotes] = useState();

  useEffect(() => {
    (async () => {
      await fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setQuotes(data.slip.advice))
        .catch((e) => console.error(e));
    })();

    // 세션에 저장
  }, []);

  return <S.Quotes>{quotesState || "Well done!"}</S.Quotes>;
}
