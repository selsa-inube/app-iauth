import { StyledBox } from "./styles.js";
import { IBox } from "@ptypes/components/box/IBox";

function Box(props: IBox) {
  const {
    children,
    padding = "16px",
    margin,
    borderRadius = "8px",
    width,
    height,
    appearance,
    flexDirection,
    gap,
    justifyContent,
    alignItems
  } = props;
  return (
    <StyledBox
      $padding={padding}
      $margin={margin}
      $borderRadius={borderRadius}
      $width={width}
      $height={height}
      $appearance={appearance}
      $flexDirection={flexDirection}
      $gap={gap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}

    >
      {children}
    </StyledBox>
  );
}

export { Box };