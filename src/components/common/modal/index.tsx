import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import MuiModal, { ModalProps } from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ThemeRegistry } from "../../../provider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Modal = ({ open, children, ...rest }: ModalProps) => {
  return (
    <ThemeRegistry>
      <MuiModal
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        open={open}
        {...rest}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </MuiModal>
    </ThemeRegistry>
  );
};

export default Modal;
