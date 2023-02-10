import * as React from "react";
import Button from "@mui/material/Button";

interface UploadButtonProps {
  text?: string;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ text }) => {
  return (
    <Button variant="contained" component="label">
      {text}
      <input hidden accept="image/*" multiple type="file" />
    </Button>
  );
};
