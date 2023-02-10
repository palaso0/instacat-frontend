import * as React from "react";

import IconButton from "@mui/material/IconButton";
import { ImageList } from "./components/ImageList";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { UserComment } from "./components/UserComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CommentInput } from "./components/CommentInput";
import { FullPostHeader } from "./components/FullPostHeader";
import { commentContainerStyles, FullPostStylesPaper } from "./styles";

export const FullPost = () => {
  return (
    <Paper elevation={10} sx={FullPostStylesPaper}>
      <ImageList />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FullPostHeader />
        <Box className="comment-container" sx={commentContainerStyles}>
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
          <UserComment />
        </Box>
        <Box sx={{ m: "5px 0px" }}>
          <IconButton aria-label="Like">
            <FavoriteIcon /> 15
          </IconButton>
        </Box>
        <CommentInput />
      </Box>
    </Paper>
  );
};
