import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { inube } from "@inubekit/inubekit";

const fieldHeights: Record<string, string> = {
  compact: "2.5rem",
  wide: "3rem",
};

const StyledWrapper = styled.div<{ $fullwidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "auto")};
  min-width: 0;
`;

const StyledLabelRow = styled.label<{ $disabled?: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ $disabled }) =>
    $disabled
      ? inube.palette.neutral.N500
      : inube.palette.neutral.N900};
  margin: 0 0 ${tokensWithReference.spacing.s050};
`;

const StyledFieldContainer = styled.div<{
  $size: "compact" | "wide";
  $invalid?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: stretch;
  border: 1px solid
    ${({ $invalid }) =>
      $invalid
        ? inube.palette.red.R400
        : inube.palette.neutral.N40};
  background: ${({ $disabled }) =>
    $disabled
      ? inube.palette.neutral.N10
      : inube.palette.neutral.N0};
  border-radius: 8px;
  height: ${({ $size }) => fieldHeights[$size]};
  overflow: hidden;
  transition: border-color 0.15s ease;
  flex: 1 1 auto;
  min-width: 0;

  &:focus-within {
    border-color: ${inube.palette.blue.B500};
  }
`;

const StyledCountryButton = styled.button<{
  $size: "compact" | "wide";
  $open: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${tokensWithReference.spacing.s050};
  background: ${inube.palette.neutral.N10};
  border: none;
  padding: 0 ${tokensWithReference.spacing.s100};
  cursor: pointer;
  font: inherit;
  color: ${inube.palette.neutral.N900};
  outline: none;
  border-right: 1px solid ${inube.palette.neutral.N40};

  ${({ $open }) => $open && `background: ${inube.palette.neutral.N30};`}

  &:hover {
    background: ${inube.palette.neutral.N30};
  }

  & > span.dial {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const StyledNumberInput = styled.input<{ $size: "compact" | "wide" }>`
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  padding: 0 ${tokensWithReference.spacing.s150};
  font-size: 0.95rem;
  background: transparent;

  &::placeholder {
    color: ${inube.palette.neutral.N300};
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: 4px;
  background: ${inube.palette.neutral.N0};
  border: 1px solid ${inube.palette.neutral.N40};
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  border-radius: 8px;
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledSearchBox = styled.input`
  border: none;
  border-bottom: 1px solid ${inube.palette.neutral.N40};
  padding: 8px 12px;
  outline: none;
  font-size: 0.85rem;
`;

const StyledCountryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex: 1;
`;

const StyledCountryItem = styled.li<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.85rem;
  background: ${({ $active }) =>
    $active ? inube.palette.neutral.N30 : "transparent"};

  &:hover {
    background: ${inube.palette.neutral.N30};
  }

  & span.name {
    flex: 1;
  }
  & span.code {
  color: ${inube.palette.neutral.N500};
    font-size: 0.75rem;
  }
`;

const StyledHelperText = styled.span<{ $error?: boolean }>`
  margin-top: 4px;
  font-size: 0.75rem;
  color: ${({ $error }) =>
    $error ? inube.palette.red.R400 : inube.palette.neutral.N500};
`;

const StyledErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

const StyledWarningIcon = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledWrapper,
  StyledLabelRow,
  StyledFieldContainer,
  StyledCountryButton,
  StyledNumberInput,
  StyledDropdown,
  StyledSearchBox,
  StyledCountryList,
  StyledCountryItem,
  StyledHelperText,
  StyledErrorContainer,
  StyledWarningIcon,
};
const StyledRelative = styled.div`
  position: relative;
`;

const StyledFlag = styled.span<{ $size?: number; $round?: boolean }>`
  display: inline-flex;
  width: ${({ $size = 20 }) => $size}px;
  height: ${({ $size = 20 }) => $size}px;
  border-radius: ${({ $round = true }) => ($round ? "50%" : "0")};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  & > svg, & > img { width: 100%; height: 100%; object-fit: cover; }
`;

export { StyledRelative, StyledFlag };
