import styled from "styled-components";
import { userWelcome } from "./tokens";

const StyledUserWelcome = styled.div`
  background: ${userWelcome.light.backgroundColor.color};
  width: auto;
  height: auto;
  padding: ${userWelcome.spacing.padding};
  gap: ${userWelcome.spacing.gap};
  border-radius: ${userWelcome.spacing.borderRadius};
  border: 1px solid ${userWelcome.light.border.color};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export { StyledUserWelcome };
