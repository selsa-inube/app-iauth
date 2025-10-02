import { BackgroundUnsplashUI } from "./interface.tsx";
import { IBackgroundUnsplash } from "@ptypes/components/layout/backgroundUnsplash/IBackgroundUnsplash";
import { useBusinessDataContext } from "@context/businessData";

const BackgroundUnsplash = (props: IBackgroundUnsplash) => {
  const { children } = props;
  const { originatorData } = useBusinessDataContext();
  return (
    <BackgroundUnsplashUI backgroundImageUrl={originatorData?.backgroundImageUrl}>
      {children}
    </BackgroundUnsplashUI>
  );
};

export { BackgroundUnsplash };
