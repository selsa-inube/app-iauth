import { BackgroundStyled, StyledMask } from "./styles";
import type { ICard } from "@ptypes/components/card/ICard";

function BackgroundUI(props: ICard) {
    const { children } = props;

    return (
        <BackgroundStyled>
            <StyledMask>
                {children}
            </StyledMask>
        </BackgroundStyled>
    );
}

export { BackgroundUI };
