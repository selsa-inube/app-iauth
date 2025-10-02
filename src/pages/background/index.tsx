import { useBusinessDataContext } from "@context/businessData";
import { BackgroundUI } from "./interface";
import type { ICard } from "@ptypes/components/card/ICard";

const Background = (props: ICard) => {
    const { children } = props;
    const { originatorData } = useBusinessDataContext();
    return (
        <BackgroundUI backgroundImageUrl={originatorData?.backgroundImageUrl}>
            {children}
        </BackgroundUI>
    );
}
 export { Background };