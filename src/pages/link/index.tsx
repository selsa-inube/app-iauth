import { LinksUI } from "./interface";
import { ILink } from "@ptypes/components/login/ILink";

const Links = (props:ILink) => {
    const {
        labelsSize,
        registerUrl
    } = props;

    return(
        <LinksUI labelsSize={labelsSize} registerUrl={registerUrl} />
    );
}

export { Links };