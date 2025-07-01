import { IMask } from "@ptypes/components/login/IMask";
import { StyledMask } from "./styles";

const Mask = (props: IMask) => {
    const { 
        zIndex,
        backgroundColor
    } = props;

    return (
        <StyledMask 
            $zIndex={zIndex}
            $backgroundColor={backgroundColor} 
            $direction="column"
        />
    );
}   

export { Mask };