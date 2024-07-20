import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { gray, primary } from "../../../colors/colors";
import { cardLinkProps, cardProps, categoryLink } from ".";
import Image from "../image";
import { ThemeRegistry } from "../../../provider";

const CategoryLink = ({
  item,
  linkComponent,
}: {
  item: categoryLink;
  linkComponent: cardLinkProps;
}) => {
  // const [onHovered, onHoveredSet] = useState(false);

  // const onMouseOver = () => {
  //   onHoveredSet(true);
  // };
  // const onMouseLeave = () => {
  //   onHoveredSet(false);
  // };

  return (
    <Typography
      color={gray["700"]}
      component={linkComponent}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 1,
        p: 1,
        mb: 1,
      }}
      variant="buttonMedium"
      href={item?.url}
      // onMouseOver={onMouseOver}
      // onMouseLeave={onMouseLeave}
    >
      <Box component="span" sx={{ ml: 0.5 }}>
        {item?.title}
      </Box>
      <Box
        component="span"
        sx={{ color: primary["500"], mr: 2 }}
        className="material-symbols-rounded"
      >
        keyboard_arrow_left
      </Box>
    </Typography>
  );
};

const CategoryCard = ({
  linkComponent,
  icon,
  title,
  category,
  description,
  linksArray,
  href,
  buttonTitle,
}: cardProps) => {
  return (
    <ThemeRegistry>
      <Card className="p-6">
        {icon ? (
          <Box
            sx={{
              mx: "auto",
              width: "96px",
              height: "96px",
              position: "relative",
              mb: 3,
            }}
          >
            <Image src={icon} fill alt={title ?? ""} />
          </Box>
        ) : null}
        <CardContent className="">
          {title ? (
            <Typography
              variant="subtitle2"
              color={gray["700"]}
              sx={{ mb: 3, textAlign: "center" }}
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
              sx={{
                marginBottom: 2.5,
                textAlign: "center",
                maxWidth: "80%",
                mx: "auto",
              }}
            >
              {description}
            </Typography>
          ) : null}
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "fit-content",
            mx: "auto",
            mb: 3,
          }}
        >
          {linksArray?.map((item, index) => {
            if (item) {
              return (
                <CategoryLink
                  linkComponent={linkComponent}
                  item={item}
                  key={index}
                />
              );
            }
            return null;
          })}
        </Box>
        {buttonTitle ? (
          <Button
            component={linkComponent}
            href={href}
            sx={{ width: 1 }}
            size="medium"
          >
            {buttonTitle}
          </Button>
        ) : null}
      </Card>
    </ThemeRegistry>
  );
};

export default CategoryCard;
