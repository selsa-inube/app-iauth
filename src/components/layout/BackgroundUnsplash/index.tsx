import { BackgroundUnsplashUI } from "./interface.tsx";
import { IBackgroundUnsplash } from "@ptypes/components/layout/backgroundUnsplash/IBackgroundUnsplash";
import { useBusinessDataContext } from "@context/businessData";
import imgBackground from "@assets/img/bkn/background-unsplash.png";
const BackgroundUnsplash = (props: IBackgroundUnsplash) => {
  const { children } = props;
  const { originatorData } = useBusinessDataContext();
  const backgroundImageUrl = originatorData?.signedUrlBackgroundImage || imgBackground;
  return (
    <BackgroundUnsplashUI backgroundImageUrl={backgroundImageUrl}>
      {children}
    </BackgroundUnsplashUI>
  );
};

export { BackgroundUnsplash };
