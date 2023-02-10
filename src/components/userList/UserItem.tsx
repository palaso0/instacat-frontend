import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";

export const UserItem = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "350px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <Avatar src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" />
        <Box>
          <Typography sx={{ mb: 0, fontSize: "14px", fontWeight: "bold" }}>
            Name
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 0, fontSize: "12px" }}>
            userName
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" sx={{ height: "70%", fontSize: "10px" }}>
        Following
      </Button>
    </Box>
  );
};
