import { CacheProvider } from "@emotion/react";
import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";
import { cacheRtl } from "../../../theme/rtl";
import { fontName } from "../../../theme/options/typography";
import { ThemeRegistry } from "../../../provider";

interface FilterArray {
  array: any[];
  labelId: string;
  label: string;
  onSelectChange: (...arg: any) => void;
}
type mySelectProps = SelectProps & FormControlProps & FilterArray;

const Select = ({
  label,
  array,
  labelId,
  onSelectChange,
  ...rest
}: mySelectProps) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeRegistry>
        <FormControl fullWidth>
          <InputLabel
            sx={{ fontFamily: fontName }}
            id={labelId ?? "simple-label-id"}
          >
            {label}
          </InputLabel>
          <MuiSelect
            sx={{ fontFamily: fontName }}
            labelId={labelId ?? "simple-label-id"}
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
          </MuiSelect>
        </FormControl>
      </ThemeRegistry>
    </CacheProvider>
  );
};

export default Select;
