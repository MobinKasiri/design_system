import { Box, Card, CardContent, Typography } from "@mui/material";
import { cardProps } from ".";
import Image from "../image";
import { gray } from "../../../colors/colors";
import { ThemeRegistry } from "../../../provider";

const IconCard = ({ icon, title, category }: cardProps) => {
  return (
    <ThemeRegistry>
      <Card className="p-6">
        {icon ? (
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              position: "relative",
              mx: "auto",
              width: "96px",
              height: "96px",
            }}
          >
            <Image src={icon} fill alt={title ?? ""} />
          </Box>
        ) : null}
        <CardContent>
          {title ? (
            <Typography
              variant="subtitle2"
              color={gray["700"]}
              sx={{ mb: 1, textAlign: "center" }}
            >
              {title}
            </Typography>
          ) : null}
          {category ? (
            <Typography
              variant="body2"
              color={gray["500"]}
              sx={{ textAlign: "center" }}
            >
              {category}
            </Typography>
          ) : null}
        </CardContent>
      </Card>
    </ThemeRegistry>
  );
};

export default IconCard;
