import React, { ComponentType, FC, useEffect, useState } from "react";

type ImageProps = React.ComponentProps<"img"> & { fill?: boolean };

const isNextJs = (): boolean => {
  return process.env.NEXT_PUBLIC_IS_NEXTJS === "true";
};

const getNextImageComponent =
  async (): Promise<React.ComponentType<ImageProps> | null> => {
    if (isNextJs()) {
      try {
        // @ts-ignore
        const nextImageModule = await import("next/image");
        return nextImageModule.default as React.ComponentType<ImageProps>;
      } catch (error) {
        console.error("Failed to load next/image:", error);
        return null;
      }
    }
    return null;
  };

const Image: FC<ImageProps> = (props) => {
  const [NextImage, setNextImage] = useState<ComponentType<ImageProps> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getNextImageComponent().then((Component) => {
      if (mounted) {
        setNextImage(() => Component);
        setIsLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) {
    return null; // or some kind of loading spinner
  }

  if (NextImage) {
    console.log("using next js");
    return <NextImage {...props} />;
  }

  console.log("not using next js");
  return <img {...props} />;
};

export default Image;
