import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { ThemeRegistry } from "../../../provider";

const TabBarPanel = ({
  tabVal,
  index,
  children,
}: {
  tabVal: string | null;
  children: React.ReactNode;
  index: string | undefined;
}) => {
  return (
    <>{tabVal === index && <Box sx={{ width: 1, mt: 2 }}>{children}</Box>}</>
  );
};

const TabBar = ({
  array,
  nonChildrenError,
}: {
  array: { label: string; value: string; children: React.ReactNode }[];
  nonChildrenError?: string;
}) => {
  const [value, setValue] = useState<null | string>(array[0].value);
  const [selectedItem, setSelectedItem] = useState<{
    label: string;
    value: string;
    children?: React.ReactNode;
  }>(array[0]);

  const handleChange = (e: React.SyntheticEvent, newVal: string) => {
    e.preventDefault();
    setValue(newVal);
  };

  return (
    <ThemeRegistry>
      <Box>
        <Tabs
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {array.map((item) => (
            <Tab
              key={item.value}
              value={item.value}
              label={item.label}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </Tabs>
        <TabBarPanel index={selectedItem?.value} tabVal={value}>
          {selectedItem && selectedItem.children ? (
            selectedItem.children
          ) : (
            <Typography variant="label1">
              {nonChildrenError ?? "اطلاعات مورد نظر یافت نشد"}
            </Typography>
          )}
        </TabBarPanel>
      </Box>
    </ThemeRegistry>
  );
};

export default TabBar;
