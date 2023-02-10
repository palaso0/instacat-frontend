import { CardHeader, Avatar, Typography } from "@mui/material";

export const FullPostHeader = () => {
  return (
    <>
      <CardHeader
        sx={{ pl: 0 }}
        avatar={<Avatar>R</Avatar>}
        title="Lionel Messi"
        subheader="September 14, 2016"
      />
      <Typography variant="body1"> Post description </Typography>
    </>
  );
};
