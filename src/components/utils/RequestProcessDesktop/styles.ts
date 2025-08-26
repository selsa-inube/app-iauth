import styled from "styled-components";
import { IIconAppearance, inube } from "@inubekit/inubekit";
import { tokens } from "@design/tokens/tokens";

interface IStyledContainerProgressBar {
  $appearance: IIconAppearance;
  $height: string;
}

interface IStyledStepIndicator {
  $statusError: boolean;
}

const StyledContainerProgressBar = styled.div<IStyledContainerProgressBar>`
  width: 100%;
  background-color: ${({ theme }) =>
    (theme as any)?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  border: ${({ theme }) =>
    `1px solid ${(theme as any)?.palette?.neutral?.N10 || inube.palette.neutral.N10}`};
  border-radius: ${tokens.spacing.s050};
  height: ${({ $height }) => $height};
`;

const StyledStepIndicator = styled.div<IStyledStepIndicator>`
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
      ? `${(theme as any)?.palette?.red?.R400 || inube.palette.red.R400}`
      : `${(theme as any)?.palette?.green?.G400 || inube.palette.green.G400}`};
`;

export { StyledContainerProgressBar, StyledStepIndicator };
