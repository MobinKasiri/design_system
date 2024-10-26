import { CacheProvider } from "@emotion/react";
import {
  FormControlProps,
  MenuItem,
  TextFieldProps,
  TextField,
  SelectProps,
} from "@mui/material";
import { cacheRtl } from "../../../theme/rtl";
import { fontName } from "../../../theme/options/typography";
import { ThemeRegistry } from "../../../provider";

interface FilterArray {
  array: any[];
  label: string;
  onSelectChange: (...arg: any) => void;
}
type mySelectProps = TextFieldProps &
  SelectProps &
  FormControlProps &
  FilterArray;

const Select = ({ label, array, onSelectChange, ...rest }: mySelectProps) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeRegistry>
        <TextField
          select
          sx={{ fontFamily: fontName }}
          label={label}
          onChange={onSelectChange}
          {...rest}
        >
          {array?.map((e) => {
            if (e?.label) {
              return (
                <MenuItem
                  sx={{ fontFamily: fontName }}
                  key={e.value}
                  value={e.value}
                >
                  {e.label}
                </MenuItem>
              );
            } else return null;
          })}
        </TextField>
      </ThemeRegistry>
    </CacheProvider>
  );
};

export default Select;
