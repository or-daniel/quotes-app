import { FC, useState, ChangeEvent, memo, useCallback } from "react";
import {
  Box,
  TextField,
  Button,
  AppBar,
  Toolbar as MuiToolbar,
} from "@mui/material";

interface ToolbarProps {
  onSubmit: (count: number, tag?: string) => void;
}

const Toolbar: FC<ToolbarProps> = memo(({ onSubmit }) => {
  const [count, setCount] = useState<number>(1);
  const [tag, setTag] = useState<string>("");

  const handleCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCount(Number(event.target.value));
    },
    []
  );

  const handleTagsChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTag(event.target.value);
    },
    []
  );

  const handleClick = useCallback(() => {
    onSubmit(count, tag);
  }, [count, tag, onSubmit]);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        padding: "15px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <MuiToolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            type="number"
            label="Number of Quotes"
            variant="outlined"
            sx={{ minWidth: "200px" }}
            onChange={handleCountChange}
            inputProps={{ min: 1, max: 25 }}
          />
          <TextField
            label="Filter by Tags"
            variant="outlined"
            onChange={handleTagsChange}
            placeholder="e.g. love, life"
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#5b4192" }}
            onClick={handleClick}
          >
            Fetch Quotes
          </Button>
        </Box>
      </MuiToolbar>
    </AppBar>
  );
});

export default Toolbar;
