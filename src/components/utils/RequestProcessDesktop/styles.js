import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { requestProcessDesktopTokens } from "./tokens";

const StyledContainerProgressBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme?.requestProcessDesktop?.progressBar?.track?.background?.color ??
    requestProcessDesktopTokens.progressBar.track.background.color};
  border: 1px solid
    ${({ theme }) =>
      theme?.requestProcessDesktop?.progressBar?.track?.border?.color ??
      requestProcessDesktopTokens.progressBar.track.border.color};
  border-radius: ${tokensWithReference.spacing.s050};
  height: ${({ $height }) => $height};
`;

const StyledStepIndicator = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ $statusError, theme }) =>
    $statusError
      ? theme?.requestProcessDesktop?.stepIndicator?.border?.color?.error ??
        requestProcessDesktopTokens.stepIndicator.border.color.error
      : theme?.requestProcessDesktop?.stepIndicator?.border?.color?.success ??
        requestProcessDesktopTokens.stepIndicator.border.color.success};
`;

const StyledRequestContainer = styled.div`
  border: 1px solid
    ${({ theme }) =>
      theme?.requestProcessDesktop?.requestContainer?.border?.color ??
      requestProcessDesktopTokens.requestContainer.border.color};
  border-radius: ${tokensWithReference.spacing.s100};
  padding: ${tokensWithReference.spacing.s150};
`;

export { StyledContainerProgressBar, StyledStepIndicator, StyledRequestContainer };
