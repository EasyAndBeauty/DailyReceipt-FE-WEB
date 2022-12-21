import * as S from "./ReceiptQuotes.styles";
import useAsync from "../../../hooks/useAsync";

/**
 * ReceiptQuotes
 *
 * 영수증의 문구를 보여주는 컴포넌트입니다
 * 랜덤 영어 명언 API를 사용해 랜덤으로 문구를 보여줍니다
 *
 * @returns
 */
export function ReceiptQuotes() {
  const [state] = useAsync(getQuotes, []);
  const { loading, data: quote, error } = state;
  console.log(quote);

  return <S.Quotes>{loading || error ? "Well done!" : quote}</S.Quotes>;
}

async function getQuotes() {
  const response = await fetch("https://api.adviceslip.com/advice").then((response) =>
    response.json(),
  );

  return response.slip.advice;
}
