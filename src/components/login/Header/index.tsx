import type { IHeader } from "@ptypes/components/login/IHeader";
import { HeaderUI } from "./interface";

const Header = (props: IHeader) => {
    const {
        labelsSizeDiferent
    } = props;

    return (
        <HeaderUI labelsSizeDiferent={labelsSizeDiferent} />
    );
};

export { Header };
