import React from "react";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BoxModal, FollowerButton, UserList } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setModalState, selectModalState } from "../../features";

export const Profile = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => dispatch(setModalState(true));

  return (
    <Box
      sx={{
        maxWidth: 400,
        padding: "20px 0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar
          alt="Image profile"
          src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3125544effd09308/639f60c65d0ea95c1ee0e6c3/GettyImages-1450106798.jpg?format=jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          Paulo Choque
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <FollowerButton number="13" text="Posts" />
          <FollowerButton
            number="345"
            text="Followers"
            onClick={handleOpenModal}
          />
          <FollowerButton
            number="13"
            text="Following"
            onClick={handleOpenModal}
          />
        </Box>
        <Button variant="contained" sx={{ width: "80%" }}>
          Follow
        </Button>

        <BoxModal Component={UserList} />
      </Box>
    </Box>
  );
};
