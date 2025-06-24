import { BackgroundStyled, StyledMask } from "./styles";
import { IBackground } from "@ptypes/components/login/IBackground";

function BackgroundUI(props: IBackground) {
    const { maskRef } = props;
    return (
        <>
            <StyledMask ref={maskRef} />
            <BackgroundStyled />
        </>
    );
}

export { BackgroundUI };
