import { BackgroundUI } from "./interface";
import type { ICard } from "@ptypes/components/card/ICard";

function Background(props: ICard) {
    const { children } = props;

    return (
        <BackgroundUI>
            {children}    
        </ BackgroundUI>
    );
}
 export { Background };