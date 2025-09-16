import styled from "styled-components";

const GAP = "0.5rem";

const StyledFieldsRow = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  justify-content: space-between;
  width: 100%;
  gap: ${GAP};

  & > .field-wrapper {
    flex: 1 1 0;
    min-width: 0;
    ${({ $isMobile }) => $isMobile && "margin: 0.5rem 0;"}
    box-sizing: border-box;
  }

  & > .field-wrapper.middle {
    ${({ $isMobile }) =>
      $isMobile &&
      `
            display: flex;
            align-items: center;
            gap: 1rem;
        `}
  }

  ${({ $isMobile }) =>
    !$isMobile &&
    `
    & > .field-wrapper.first { flex: 0 0 calc(35% - (${GAP} * 2 / 3)); max-width: calc(35% - (${GAP} * 2 / 3)); }
    & > .field-wrapper.middle { flex: 0 0 calc(25% - (${GAP} * 2 / 3)); max-width: calc(25% - (${GAP} * 2 / 3)); }
    & > .field-wrapper.last { flex: 0 0 calc(35% - (${GAP} * 2 / 3)); max-width: calc(35% - (${GAP} * 2 / 3)); }
    `}
`;

export { StyledFieldsRow };
