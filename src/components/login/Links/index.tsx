import { LinksUI } from "@components/login/Links/interface";
import { ILink } from "@ptypes/components/login/ILink";

const Links:React.FC<ILink>  = (props) => {
    return(
        <LinksUI sizeLables={props.sizeLables} />
    );
}

export { Links };