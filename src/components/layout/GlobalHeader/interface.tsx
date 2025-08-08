import { Stack } from "@inubekit/inubekit";
import { StyledLogoContainer, StyledLogoImage } from "../PageLayout/styles";
import { StyledHeader } from "./styled";
import { IGlobalHeader } from "@ptypes/components/layout/globalHeader/IGlobalHeader";
import imgBackground from "@assets/img/lgo/inube-saas.png";

const GlobalHeaderUI = (props: IGlobalHeader) => {
  const { children } = props;

  return (
    <StyledHeader>
      {children ? (
        children
      ) : (
        <Stack
          alignItems="center"
          justifyContent="start"
          width="100%"
          height="100%"
        >
          <StyledLogoContainer>
            <StyledLogoImage src={imgBackground} alt="Logo" />
          </StyledLogoContainer>
        </Stack>
      )}
    </StyledHeader>
  );
};

export { GlobalHeaderUI };
