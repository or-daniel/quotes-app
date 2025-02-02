import { FC } from "react";
import { Typography, Box } from "@mui/material";

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <Box mt={5} textAlign="center" maxWidth="sm" mx="auto">
      <Typography variant="h4" color="error" gutterBottom>
        Error
      </Typography>
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};

export default Error;
