import type { IHeader } from "@ptypes/components/login/IHeader";
import { HeaderUI } from "./interface";

const Header = (props: IHeader) => {
    const {
        labelsSizeDifferent
    } = props;

    return (
        <>
        <HeaderUI labelsSizeDifferent={labelsSizeDifferent} />
        </>
    );
};

export { Header };
