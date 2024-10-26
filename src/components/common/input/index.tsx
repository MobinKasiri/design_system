import { gray } from "../../../colors/colors";
import { cacheRtl } from "../../../theme/rtl";
import { CacheProvider } from "@emotion/react";
import {
  TextField,
  TextFieldProps as MuiTextFieldProps,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { ThemeRegistry } from "../../../provider";
import mergeObjectFunction from "../../../functions/mergeObjectsFunction";
import { MuiTextField } from "../../../theme/options/components/MuiTextField";

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
  ...rest
}) => {
  const [showPassword, showPasswordSet] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (stateSet) {
      stateSet(e.target.value);
    }
  };

  const mergedInputProps = mergeObjectFunction(
    MuiTextField.defaultProps?.InputProps ?? {},
    InputProps ?? {}
  );

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
            ...mergedInputProps,
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
