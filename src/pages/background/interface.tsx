import { StyledMaskContainer, StyledMask } from "./styles";
import type { ICard } from "@ptypes/components/card/ICard";

const BackgroundUI = (props: ICard) =>{
    const { children } = props;

    return (
        <StyledMaskContainer>
            <StyledMask>
                {children}
            </StyledMask>
        </StyledMaskContainer>
    );
}

export { BackgroundUI };
