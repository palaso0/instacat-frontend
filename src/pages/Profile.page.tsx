import { Box } from "@mui/system";
import { Header, Profile, Feed } from "../layouts";
import { Copyright } from "../components";
import React from "react";

export const ProfilePage: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Profile />
        <Feed />
      </Box>
      <Copyright />
    </>
  );
};
