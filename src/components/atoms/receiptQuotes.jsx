import styled from "styled-components";
import { useEffect, useState } from "react";

export function ReceiptQuotes() {
  const [quotesState, setQuotes] = useState();

  useEffect(() => {
    const getQuotes = async () => {
      await fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setQuotes(data.slip.advice))
        .catch((e) => console.error(e));
    };

    getQuotes();
  }, []);

  return <Quotes>{quotesState}</Quotes>;
}
const Quotes = styled.div`
  width: 92%;
  margin: 24px 0;
  text-align: center;
`;
