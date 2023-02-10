import { Box } from "@mui/system";
import React from "react";
import { Header, News } from "../layouts";
import { Copyright } from "../components";
export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <News />
      </Box>
      <Copyright />
    </>
  );
};
