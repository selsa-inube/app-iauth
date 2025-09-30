import { Text } from "@inubekit/inubekit";
import type { IInformationBoxUI } from "@ptypes/components/utils/IInformationBoxUI";
import {
  StyledContent,
  StyledInformationBox,
  StyledHeader,
} from "./styles";

const InformationBoxUI = (props: IInformationBoxUI) => {
  const { 
    title, 
    content, 
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
  } = props;

  return (
    <StyledInformationBox 
      $width={width}
      $height={height}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      $maxHeight={maxHeight}
    >
      <StyledContent>
        <StyledHeader>
          <Text size="medium" weight="bold" appearance="dark">
            {title}
          </Text>
        </StyledHeader>
        <Text appearance="gray" size="medium">
          {content}
        </Text>
      </StyledContent>
    </StyledInformationBox>
  );
};

export { InformationBoxUI };
