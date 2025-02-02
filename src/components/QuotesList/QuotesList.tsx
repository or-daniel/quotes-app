import { FC } from "react";
import QuoteItem from "../QuoteItem/QuoteItem";
import Quote from "../../types/Quote";

interface QuoteListProps {
  isLoading: boolean;
  quotes: Quote[];
}

const QuotesList: FC<QuoteListProps> = ({ isLoading, quotes }) => {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {quotes.map((quote) => {
        return (
          <QuoteItem
            key={quote.id}
            body={quote.body}
            author={quote.author}
            tags={quote.tags || []}
          />
        );
      })}
    </div>
  );
};

export default QuotesList;
