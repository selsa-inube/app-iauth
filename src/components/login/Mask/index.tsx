import { MaskUI } from "./interface";
import { IMask } from "@ptypes/components/login/IMask";

const Mask = (props: IMask) => {
    const { 
        zIndex, 
        backgroundColor,
        maskModalWarning 
    } = props;

    return (
        <MaskUI 
            zIndex={zIndex}
            backgroundColor={backgroundColor} 
            maskModalWarning={maskModalWarning}
        />
    );
}   

export { Mask };