import styled from "styled-components";

interface IStyledQuestionsGridProps {
  $isMobile?: boolean;
}

const StyledQuestionsGrid = styled.div<IStyledQuestionsGridProps>`
  display: grid;
  grid-template-columns: ${({ $isMobile }) =>
    !$isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(12rem, 1fr))"};
  gap: 1rem;
  margin-top: 1rem;
`;

export { StyledQuestionsGrid };
