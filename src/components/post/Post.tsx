import * as React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { ImageList } from "./components/ImageList";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Post = () => {
  return (
    <Paper sx={{ maxWidth: 400 }} elevation={10}>
      {/* <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}> */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Lionel Messi"
          subheader="September 14, 2016"
        />
      {/* </Link> */}
      <ImageList />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lionel Andrés Messi, also known as Leo Messi, is an Argentine
          professional footballer who plays as a forward for the Barcelona FC
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment">
          <ModeCommentOutlinedIcon />
        </IconButton>
      </CardActions>
    </Paper>
  );
};
