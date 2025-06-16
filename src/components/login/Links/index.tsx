import { LinksUI } from "@components/login/Links/interface";
import { ILink } from "@ptypes/components/login/ILink";

const Links = (props:ILink) => {
    const {
        labelsSize
    } = props;

    return(
        <LinksUI labelsSize={labelsSize} />
    );
}

export { Links };