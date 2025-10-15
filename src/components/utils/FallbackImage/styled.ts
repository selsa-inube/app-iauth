import styled from "styled-components";

interface IStyledSize {
  $isMobile: boolean;
  $width?: string | number;
  $height?: string | number;
}

const StyledImgWrapper = styled.div<IStyledSize>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width, $isMobile }) =>
    $width != null
      ? typeof $width === "number" ? `${$width}px` : $width
      : $isMobile
      ? `190px`
      : `200px`};
  height: ${({ $height, $isMobile }) =>
    $height != null
      ? typeof $height === "number" ? `${$height}px` : $height
      : $isMobile
      ? `63px`
      : `60px`};
`;

const StyledImg = styled.img<IStyledSize>`
  width: ${({ $width, $isMobile }) =>
    $width != null
      ? typeof $width === "number" ? `${$width}px` : $width
      : $isMobile
      ? `190px`
      : `200px`};
  height: ${({ $height, $isMobile }) =>
    $height != null
      ? typeof $height === "number" ? `${$height}px` : $height
      : $isMobile
      ? `63px`
      : `60px`};
`;

export { StyledImgWrapper, StyledImg };
