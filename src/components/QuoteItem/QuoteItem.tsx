import { FC } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "./QuoteItem.css";

interface QuoteItemProps {
  body: string;
  author: string;
  tags: string[];
}

const QuoteItem: FC<QuoteItemProps> = ({ body, author, tags }) => {
  return (
    <Card className="quoteCard">
      <Box className="cardBox">
        <CardContent>
          <Typography variant="h6" component="div" className="cardBody">
            {body}
          </Typography>
          <Typography variant="subtitle2" className="cardAuthor">
            {author}
          </Typography>
          <Typography className="cardTag">{tags.join(", ")}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default QuoteItem;
