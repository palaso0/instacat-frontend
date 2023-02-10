import * as React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const UserComment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        p: 0.5,
        widht: "100px",
      }}
    >
      <Avatar
        sx={{ mr: 2 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU"
      >
        R
      </Avatar>
      <Typography variant="body2">
        <b>User: </b>Comment test asd gdfg sd as dfs df arfads fdsf sdf DSf as
        asd qwqw rewrwer
      </Typography>
    </Box>
  );
};
