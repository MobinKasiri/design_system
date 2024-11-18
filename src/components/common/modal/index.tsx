import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import MuiModal, { ModalProps } from "@mui/material/Modal";
import { ThemeRegistry } from "../../../provider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "scaleIn 0.25s cubic-bezier(0.175, 0.885, 0.15, 1.275)",
  "@keyframes scaleIn": {
    "0%": {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.85)",
    },
    "100%": {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
    },
  },
};

const Modal = ({ open, children, ...rest }: ModalProps) => {
  return (
    <ThemeRegistry>
      <MuiModal
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        open={open}
        {...rest}
      >
        <Box sx={style}>{children}</Box>
      </MuiModal>
    </ThemeRegistry>
  );
};

export default Modal;
