import CategoryCard from "./CategoryCard";
import HorizontalCard from "./HorizontalCard";
import IconCard from "./IconCard";
import VerticalCard from "./VerticalCard";

import { CardProps } from "@mui/material";

export type cardLinkProps = React.ElementType<
  any,
  keyof React.JSX.IntrinsicElements
>;

export type categoryLink = {
  title: string;
  url: string;
};

export interface cardProps extends CardProps {
  id?: string;
  title?: string;
  category?: string;
  description?: string;
  buttonTitle?: string;
  buttonIcon?: string | React.ReactNode;
  buttonIconPosition?: string;
  date?: string;
  rate?: string | React.ReactNode;
  linksArray?: categoryLink[];
  media?: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  type: "vertical" | "horizontal" | "category" | "icon";
  linkComponent: cardLinkProps;
}

const index = (props: cardProps) => {
  switch (props?.type) {
    case "vertical":
      return <VerticalCard {...props} />;
    case "category":
      return <CategoryCard {...props} />;
    case "horizontal":
      return <HorizontalCard {...props} />;
    case "icon":
      return <IconCard {...props} />;

    default:
      return null;
  }
};

export default index;
