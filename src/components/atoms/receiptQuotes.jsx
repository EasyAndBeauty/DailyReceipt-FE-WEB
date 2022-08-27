import styled from "styled-components";
import { useState } from "react";

export function ReceiptQuotes() {
  const [quotesState, setQuotes] = useState();
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => setQuotes(data.slip.advice));

  return <Quotes>{quotesState}</Quotes>;
}
const Quotes = styled.div`
  width: 92%;
  margin: 24px 0;
  text-align: center;
`;
