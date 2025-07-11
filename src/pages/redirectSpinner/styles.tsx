import styled from "styled-components";
import { spacing } from "@design/tokens/tokensWithReference/spacing/spacing";

const StyledBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    gap: ${spacing.s250};
    z-index: 1;
`;

export { StyledBox };