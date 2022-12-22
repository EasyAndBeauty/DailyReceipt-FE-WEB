import { ReceiptPaperTriangle, ReceiptPaperContents } from "components";
import * as S from "./ReceiptPaper.styles";
import useAsync from "../../../hooks/useAsync";
import { useEffect } from "react";
import Loading from "react-loading";

/**
 * ReceiptPaper
 *
 * 영수증의 내용이 들어가 종이 처럼 보이는 컴포넌트입니다
 *
 * @param {Array} todos todo 리스트
 * @param {Function} onInsert navigate 함수
 * @returns {JSX.Element} ReceiptPaperTriangle 영수증의 삼각형 모양 컴포넌트
 * @returns {JSX.Element} ReceiptPaperContents 영수증의 내용이 들어가는 컴포넌트
 */

export function ReceiptPaper({ todos, onClick = null }) {
  const [state] = useAsync(getQuotes, []);
  const { loading, data: quote, error } = state;

  useEffect(() => {
    sessionStorage.setItem("famous_saying", quote);
  }, [quote]);

  return (
    <S.Container id={"receipt"} onClick={onClick}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <S.TrianglePosition y="6px">
            <ReceiptPaperTriangle isPaper={true} />
          </S.TrianglePosition>
          <ReceiptPaperContents todos={todos} quote={error ? "Well done!" : quote} />
          <S.TrianglePosition y="-7px">
            <ReceiptPaperTriangle isPaper={true} />
          </S.TrianglePosition>
        </div>
      )}
    </S.Container>
  );
}

async function getQuotes() {
  const response = await fetch("https://api.adviceslip.com/advice").then((response) =>
    response.json(),
  );

  return response.slip.advice;
}
