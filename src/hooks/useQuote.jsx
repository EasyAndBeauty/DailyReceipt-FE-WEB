import { useCallback, useEffect, useState } from "react";

export const useFetchQuote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(false);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((response) => {
        setQuote(response.slip.advice);
        sessionStorage.setItem("famousSaying", response.slip.advice);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return { loading, quote, error };
};
