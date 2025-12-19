import styled from "styled-components";

const StyledLogoContainer = styled.div`
  width: 94px;
  height: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 90dvh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 0;
  box-sizing: border-box;
`;

const StyledInnerColumn = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { StyledLogoContainer, StyledLogoImage, StyledContentArea, StyledInnerColumn };
