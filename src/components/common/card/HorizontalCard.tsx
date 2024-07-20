import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "../image";
import { cardProps } from ".";
import { gray } from "../../../colors/colors";
import { ThemeRegistry } from "../../../provider";

const HorizontalCard = ({
  media,
  title,
  category,
  description,
  date,
  buttonTitle,
}: cardProps) => {
  const imageWidth = 348;
  const margin = 24;

  return (
    <ThemeRegistry>
      <Card className="p-4 flex items-center h-[246px]">
        <div
          className={`relative h-full`}
          style={{ marginLeft: margin, width: imageWidth }}
        >
          {media ? (
            <Image
              className="object-cover rounded-lg"
              src={media}
              alt={title ?? ""}
              fill
            />
          ) : null}
        </div>
        <CardContent
          sx={{
            width: `calc(100% - ${imageWidth + margin}px)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            {title ? (
              <Typography
                variant="subtitle2"
                color={gray["700"]}
                sx={{ mb: 1 }}
              >
                {title}
              </Typography>
            ) : null}
            {category ? (
              <Typography variant="body2" color={gray["500"]} sx={{ mb: 3 }}>
                {category}
              </Typography>
            ) : null}
            {description ? (
              <Typography
                variant="body1"
                className="line-clamp-3"
                color={gray["700"]}
                sx={{ marginBottom: 2.5 }}
              >
                {description}
              </Typography>
            ) : null}
          </div>
          <Box
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
            }}
          >
            {date ? (
              <Typography variant="body1" color={gray["600"]}>
                {date}
              </Typography>
            ) : null}
            {/* {rate ? (
            <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
              <Box component="span" className="material-symbols-rounded ml-1 text-rate-rateColor">star</Box>
              <Typography variant="caption" className="pt-1" color={gray["600"]}>
                5 / {rate}
              </Typography>
            </Box>
          ) : null} */}
            {buttonTitle ? <Button size="medium">{buttonTitle}</Button> : null}
          </Box>
        </CardContent>
      </Card>
    </ThemeRegistry>
  );
};

export default HorizontalCard;
