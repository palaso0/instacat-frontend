import { Avatar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { UserItem } from "./UserItem";
import React from "react";

export const UserList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
        height: "400px",
        padding: "2px"
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Followers
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </Box>
    </Box>
  );
};

const userList = [
  {
    id: 1,
    name: "Lionel Messi",
  },
  {
    id: 2,
    name: "Andres Iniesta",
  },
  {
    id: 3,
    name: "Xavi Hernandez",
  },
  {
    id: 4,
    name: "Carles Puyol",
  },
  {
    id: 5,
    name: "Ansu Fati",
  },
];
