import { IMask } from "@ptypes/components/login/IMask";
import { StyledMask } from "./styles";

const Mask = (props: IMask) => {
    const { 
        zIndex,
        isModal
    } = props;

    return (
        <StyledMask 
            $zIndex={zIndex}
            $isModal={isModal} 
            $direction="column"
        />
    );
}   

export { Mask };