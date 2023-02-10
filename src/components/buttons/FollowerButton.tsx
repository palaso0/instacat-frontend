import { Button, Typography } from "@mui/material";
import React from "react";

interface FollowerButtonProps {
  number: string;
  text: string;
  onClick?: () => {};
}

export const FollowerButton: React.FC<FollowerButtonProps> = ({
  number,
  text,
  onClick,
}) => {
  return (
    <Button
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "capitalize",
      }}
      variant="text"
      onClick={onClick}
    >
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ fontWeight: "bold" }}
        gutterBottom
        onClick={onClick}
      >
        {number}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        gutterBottom
        onClick={onClick}
      >
        {text}
      </Typography>
    </Button>
  );
};
