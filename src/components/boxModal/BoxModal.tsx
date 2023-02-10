import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { UserList } from "../userList";
import { Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setModalState, selectModalState } from "../../features";
import { FullPost } from "../post";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "white",
  boxShadow: 24,
  overflowY: "auto",
  overflowX: "hidden",
};

interface BoxModalProps {
  Component?: any;
}

export const BoxModal: React.FC<BoxModalProps> = ({ Component }) => {
  const dispatch = useDispatch();
  const open = useSelector(selectModalState);

  // const handleOpen = () => dispatch(setModalState(true));
  const handleClose = () => dispatch(setModalState(false));

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style} elevation={10}>
          {/* <Component /> */}
          <FullPost />
        </Paper>
      </Modal>
    </div>
  );
};
