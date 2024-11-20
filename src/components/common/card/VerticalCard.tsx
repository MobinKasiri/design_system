import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { cardProps } from ".";
import Image from "../image";
import { gray, primary } from "../../../colors/colors";
import "./card.css";
import { ThemeRegistry } from "../../../provider";

const VerticalCard = ({
  media,
  title,
  id,
  category,
  description,
  buttonTitle,
  href,
  buttonIconPosition,
  buttonIcon,
  linkComponent,
}: cardProps) => {
  return (
    <ThemeRegistry>
      <Card className={""}>
        {media ? (
          <Box
            sx={{
              width: "100%",
              height: 200,
              position: "relative",
              marginBottom: 2,
            }}
          >
            <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
              <Image
                loading="lazy"
                fill
                className="card__placeholder "
                style={{ borderRadius: "16px", width: "100%" }}
                src={media}
                alt={title ?? ""}
              />
            </Box>
          </Box>
        ) : null}
        <CardContent>
          {title ? (
            <>
              {id ? (
                <Typography
                  component={linkComponent ?? "a"}
                  href={href}
                  variant="subtitle2"
                  color={gray["700"]}
                  className="line-clamp-1 transition-all"
                  sx={{
                    width: 1,
                    ":hover": {
                      color: primary["500"],
                    },
                  }}
                >
                  {title}
                </Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  color={gray["700"]}
                  className="mb-1 truncate"
                >
                  {title}
                </Typography>
              )}
            </>
          ) : null}
          {category ? (
            <Typography
              variant="body2"
              color={gray["500"]}
              sx={{ marginBottom: 2.5 }}
            >
              {category}
            </Typography>
          ) : null}
          {description ? (
            <Typography
              variant="body1"
              className="line-clamp-3"
              color={gray["700"]}
              sx={{ marginBottom: 2.5 }}
              textAlign="justify"
            >
              {description}
            </Typography>
          ) : null}
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          {buttonTitle ? (
            <Link component={linkComponent ?? "a"} href={href}>
              <Button
                sx={{
                  display: "flex",
                  flexDirection:
                    buttonIconPosition === "left"
                      ? "flex-row"
                      : "flex-row-reverse",
                }}
                size="medium"
              >
                <Typography>{buttonTitle}</Typography>
                <span className="material-symbols-outlined">{buttonIcon}</span>
              </Button>
            </Link>
          ) : null}
        </Box>
      </Card>
    </ThemeRegistry>
  );
};

export default VerticalCard;
