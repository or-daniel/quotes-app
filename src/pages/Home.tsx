import { FC, useState, useCallback } from "react";
import QuotesList from "../components/QuotesList/QuotesList";
import Quote from "../types/Quote";
import Toolbar from "../components/Toolbar/Toolbar";
import fetchQuotes from "../api/quotesApi";
import Error from "../components/Error/Error";

const Home: FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(async (count: number, tag?: string) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const fetchedQuotes = await fetchQuotes(count, tag);
      setQuotes(fetchedQuotes);
    } catch (error) {
      setErrorMessage((error as Error).message);
      setQuotes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h1>Quotes Of the Day</h1>
      <Toolbar onSubmit={handleSubmit} />
      {errorMessage && <Error message={errorMessage} />}
      <QuotesList quotes={quotes} isLoading={isLoading} />
    </>
  );
};

export default Home;
