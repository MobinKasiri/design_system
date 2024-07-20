import { gray } from "../../../colors/colors";
import { cacheRtl } from "../../../theme/rtl";
import { CacheProvider } from "@emotion/react";
import {
  TextField,
  TextFieldProps as MuiTextFieldProps,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { fontName } from "../../../theme/options/typography";
import { ThemeRegistry } from "../../../provider";

interface CustomTextFieldProps {
  stateSet?: React.Dispatch<React.SetStateAction<any>>;
}

type MyTextFieldProps = CustomTextFieldProps & MuiTextFieldProps;

const VisibilityIcon = ({
  state,
  stateSet,
}: {
  state?: boolean;
  stateSet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box
      onClick={() => stateSet((prev) => !prev)}
      sx={{ cursor: "pointer", ml: 1 }}
      className="material-symbols-rounded"
      color={gray["700"]}
    >
      {state ? "visibility" : "visibility_off"}
    </Box>
  );
};

const Input: React.FC<MyTextFieldProps> = ({
  stateSet,
  InputProps,
  type,
  sx,
  InputLabelProps,
  ...rest
}) => {
  const [showPassword, showPasswordSet] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (stateSet) {
      stateSet(e.target.value);
    }
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeRegistry>
        <TextField
          {...rest}
          onChange={stateSet ? handleChange : rest.onChange}
          InputProps={{
            endAdornment:
              type === "password" ? (
                <VisibilityIcon
                  state={showPassword}
                  stateSet={showPasswordSet}
                />
              ) : null,
            ...InputProps,
            style: {
              borderRadius: 8,
              fontFamily: fontName,
              ...InputProps?.style,
            },
          }}
          InputLabelProps={{
            style: { fontFamily: fontName, ...InputLabelProps?.style },
          }}
          sx={{
            width: 1,
            ...sx,
          }}
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
        />
      </ThemeRegistry>
    </CacheProvider>
  );
};

export default Input;
