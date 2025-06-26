import { StyledBox } from "./styles.js";

interface IBox {
  children?: React.ReactNode;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  appearance?: string;
  flexDirection?: string;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
}

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
export type { IBox };