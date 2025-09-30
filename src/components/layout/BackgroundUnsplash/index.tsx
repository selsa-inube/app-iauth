import { BackgroundUnsplashUI } from "./interface.tsx";
import { IBackgroundUnsplash } from "@ptypes/components/layout/backgroundUnsplash/IBackgroundUnsplash";

const BackgroundUnsplash = (props: IBackgroundUnsplash) => {
  const { children } = props;

  return <BackgroundUnsplashUI>{children}</BackgroundUnsplashUI>;
};

export { BackgroundUnsplash };
