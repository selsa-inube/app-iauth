import { IMask } from "@ptypes/components/login/IMask";
import { StyledMask } from "./styles";


const MaskUI = (props: IMask) => {
    const {
        zIndex,
        backgroundColor,
        maskModalWarning
    } = props;

    return (
        <StyledMask zIndex={zIndex} backgroundColor={backgroundColor} ref={maskModalWarning} />
    );
}

export { MaskUI };