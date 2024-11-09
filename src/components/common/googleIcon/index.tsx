import { Box, BoxProps } from "@mui/material";
import "./index.css";

interface Props extends BoxProps {
  iconName: string;
}

const GoogleIcon = ({ iconName, ...rest }: Props) => {
  return (
    <Box className="material-symbols-rounded icon_style" {...rest}>
      {iconName}
    </Box>
  );
};

export default GoogleIcon;
