import { StyledMaskContainer, StyledMask } from "./styles";
import type { ICard } from "@ptypes/components/card/ICard";

const BackgroundUI = (props: ICard) =>{
    const { children, backgroundImageUrl } = props;

    return (
        <StyledMaskContainer $backgroundImageUrl={backgroundImageUrl}>
            <StyledMask>
                {children}
            </StyledMask>
        </StyledMaskContainer>
    );
}

export { BackgroundUI };
