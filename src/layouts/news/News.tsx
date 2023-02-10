import { Post } from "../../components";
import { Box } from "@mui/material";

export const News = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap:"wrap",
        gap: 4,
        width: "80%",
        p:"20px 0px"
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
