import styled from "styled-components";

interface IStyledQuestionsGridProps {
  $isMobile?: boolean;
  margin?: string;
}

const StyledQuestionsGrid = styled.div<IStyledQuestionsGridProps>`
  display: grid;
  grid-template-columns: ${({ $isMobile }) =>
    !$isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(12rem, 1fr))"};
  gap: 1rem;
  margin: ${({ margin }) => margin || "1rem"};
`;

export { StyledQuestionsGrid };
