import { LinksUI } from "@components/login/Links/interface";
import { ILink } from "@ptypes/components/login/ILink";

const Links = (props:ILink) => {
    const {
        sizeLables
    } = props;

    return(
        <LinksUI sizeLables={sizeLables} />
    );
}

export { Links };