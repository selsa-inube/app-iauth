import styled from "styled-components";

const GAP = "0.5rem";

const StyledFieldsRow = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  justify-content: space-between;
  width: 100%;
  gap: ${GAP};
`;

const StyledFieldWrapper = styled.div<{ $isMobile?: boolean }>`
  flex: 1 1 0;
  min-width: 0;
  box-sizing: border-box;
  ${({ $isMobile }) => $isMobile && "margin: 0.5rem 0;"}
`;

const StyledFieldFirst = styled(StyledFieldWrapper)<{ $isMobile?: boolean }>`
  ${({ $isMobile }) =>
    !$isMobile && `
      flex: 0 0 calc(35% - (${GAP} * 2 / 3));
      max-width: calc(35% - (${GAP} * 2 / 3));
    `}
`;

const StyledFieldMiddle = styled(StyledFieldWrapper)<{ $isMobile?: boolean }>`
  ${({ $isMobile }) =>
    $isMobile
      ? `
        display: flex;
        align-items: center;
        gap: 1rem;
      `
      : `
        flex: 0 0 calc(25% - (${GAP} * 2 / 3));
        max-width: calc(25% - (${GAP} * 2 / 3));
      `}
`;

const StyledFieldLast = styled(StyledFieldWrapper)<{ $isMobile?: boolean }>`
  ${({ $isMobile }) =>
    !$isMobile && `
      flex: 0 0 calc(35% - (${GAP} * 2 / 3));
      max-width: calc(35% - (${GAP} * 2 / 3));
    `}
`;

export { StyledFieldsRow, StyledFieldFirst, StyledFieldMiddle, StyledFieldLast };
