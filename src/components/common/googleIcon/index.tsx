import { Box, BoxProps } from "@mui/material";
import { ThemeRegistry } from "../../../provider";
import "./index.css";
interface Props extends BoxProps {
  iconName: string;
}

const GoogleIcon = ({ iconName, className, ...rest }: Props) => {
  return (
    <ThemeRegistry>
      <Box
        {...rest}
        className={"material-symbols-rounded icon_style " + className}
      >
        {iconName}
      </Box>
    </ThemeRegistry>
  );
};

export default GoogleIcon;
