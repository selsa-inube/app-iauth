import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { formContainer } from "./tokens";

const StyledFormContainer = styled.div`
  width: 100%;
  min-height: ${({ $isMobile }) => ($isMobile ? "" : "620px")};
  height: auto;
  background: ${({ theme }) =>
    theme?.formContainer?.background?.color ??
    formContainer.light.backgroundColor.color};
  box-sizing: border-box;
  padding: ${tokensWithReference.spacing.s200};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${tokensWithReference.spacing.s100};
  box-shadow:
    0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px
      ${({ theme }) =>
        theme?.formContainer?.shadow?.color ??
        formContainer.dark.boxShadow.color};
`;

const StyledFormTitle = styled.h1`
  font-size: ${({ $labelsSize }) =>
    $labelsSize === "large" ? "1.5rem" : $labelsSize === "medium" ? "1.25rem" : "1rem"};
  text-align: center;
  word-break: break-word;
  margin-top: 0;
  margin-bottom: ${tokensWithReference.spacing.s200};
`;

const StyledAssistedContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export { StyledFormContainer, StyledFormTitle, StyledAssistedContainer };
