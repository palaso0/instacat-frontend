import Typography from "@mui/material/Typography";

export const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ mt: 8, mb: 4 }}
    >
      {`Copyright © Instacat ${new Date().getFullYear()}.`}
    </Typography>
  );
};
