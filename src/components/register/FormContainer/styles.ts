import styled from "styled-components";
import { formContainer } from "./tokens";

interface StyledFormContainerProps {
  $isMobile?: boolean;
}

interface StyledFormTitleProps {
  $labelsSize: "large" | "medium" | "small";
}

const StyledFormContainer = styled.div<StyledFormContainerProps>`
  width: 100%;
  min-height: ${({ $isMobile }) => ($isMobile ? "" : "620px")};
  height: auto;
  background: ${formContainer.light.backgroundColor.color};
  box-sizing: border-box;
  padding: ${formContainer.spacing.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${formContainer.border.radius};
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px ${formContainer.dark.boxShadow.color};
`;

const StyledFormTitle = styled.h1<StyledFormTitleProps>`
  font-size: ${({ $labelsSize }) =>
    $labelsSize === "large"
      ? "1.5rem"
      : $labelsSize === "medium"
        ? "1.25rem"
        : "1rem"};
  text-align: center;
  word-break: break-word;
  margin-top: 0;
  margin-bottom: ${formContainer.spacing.padding};
`;

const StyledAssistedContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export { StyledFormContainer, StyledFormTitle, StyledAssistedContainer };
