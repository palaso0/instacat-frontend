import { Box, TextField, Button } from "@mui/material";
import React from "react";

export const CommentInput = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="outlined-multiline-flexible"
        label="Add a comment"
        multiline
        maxRows={2}
        fullWidth={true}
        size="small"
      />
      <Button size="large">Publish</Button>
    </Box>
  );
};
