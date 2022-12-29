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
        sessionStorage.setItem("famous_saying", response.slip.advice);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return { loading, quote, error };
};
