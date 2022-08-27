import styled from "styled-components";
import { useEffect, useState } from "react";

export function ReceiptQuotes() {
  // const getQuotes = async () => {
  //   try{
  //     const res = await fetch("https://api.adviceslip.com/advice");
  //
  //     if(!res.ok) throw new Error("오늘은 명언이 없어도 괜찮은 하루일지도 몰라요.");
  //
  //     const data = await res.json();
  //     setQuotes(data);
  //   }catch(e){
  //     console.error(e);
  //   }
  // }

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
