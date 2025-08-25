import styled, { css } from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";

const fieldHeights: Record<string, string> = {
  compact: "2.5rem",
  wide: "3rem",
};

const Wrapper = styled.div<{ $fullwidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "auto")};
  min-width: 0;
`;

const LabelRow = styled.label<{ $disabled?: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ $disabled }) => ($disabled ? "#8A8A8A" : "#0D2135")};
  margin: 0 0 ${tokensWithReference.spacing.s050};
`;

const FieldContainer = styled.div<{
  $size: "compact" | "wide";
  $invalid?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: stretch;
  border: 1px solid ${({ $invalid }) => ($invalid ? "#D14343" : "#D0D5DD")};
  background: ${({ $disabled }) => ($disabled ? "#F3F4F6" : "#FFFFFF")};
  border-radius: 8px;
  height: ${({ $size }) => fieldHeights[$size]};
  overflow: hidden;
  transition: border-color 0.15s ease;
  flex: 1 1 auto;
  min-width: 0;

  &:focus-within {
    border-color: #005bbb;
  }
`;

const CountryButton = styled.button<{
  $size: "compact" | "wide";
  $open: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${tokensWithReference.spacing.s050};
  background: #f7f8f9;
  border: none;
  padding: 0 ${tokensWithReference.spacing.s100};
  cursor: pointer;
  font: inherit;
  color: #0d2135;
  outline: none;
  border-right: 1px solid #d0d5dd;

  ${({ $open }) =>
    $open &&
    css`
      background: #eef2f6;
    `};

  &:hover {
    background: #eef2f6;
  }

  & > span.dial {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const NumberInput = styled.input<{ $size: "compact" | "wide" }>`
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  padding: 0 ${tokensWithReference.spacing.s150};
  font-size: 0.95rem;
  background: transparent;

  &::placeholder {
    color: #98a2b3;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: 4px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SearchBox = styled.input`
  border: none;
  border-bottom: 1px solid #e4e7ec;
  padding: 8px 12px;
  outline: none;
  font-size: 0.85rem;
`;

const CountryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex: 1;
`;

const CountryItem = styled.li<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.85rem;
  background: ${({ $active }) => ($active ? "#EEF2F6" : "transparent")};

  &:hover {
    background: #f1f5f9;
  }

  & span.name {
    flex: 1;
  }
  & span.code {
    color: #667085;
    font-size: 0.75rem;
  }
`;

const HelperText = styled.span<{ $error?: boolean }>`
  margin-top: 4px;
  font-size: 0.75rem;
  color: ${({ $error }) => ($error ? "#D14343" : "#667085")};
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

const WarningIcon = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Wrapper,
  LabelRow,
  FieldContainer,
  CountryButton,
  NumberInput,
  Dropdown,
  SearchBox,
  CountryList,
  CountryItem,
  HelperText,
  ErrorContainer,
  WarningIcon,
};
