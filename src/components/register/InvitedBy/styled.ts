import styled from "styled-components";

interface IStyledInvitedByImg {
  $isMobile: boolean;
}

const StyledInvitedByImg = styled.img<IStyledInvitedByImg>`
  width: ${({ $isMobile }) => {
    return $isMobile ? `141px` : `141px`;
  }};
  height: ${({ $isMobile }) => {
    return $isMobile ? `40px` : `40px`;
  }};
`;

export { StyledInvitedByImg };
