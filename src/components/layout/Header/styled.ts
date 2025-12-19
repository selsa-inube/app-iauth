import styled from "styled-components";
import logoPadlock from "@assets/img/lgo/logo-linix-user.svg";

interface IStyledImg {
    img: string | undefined;
}

const StyledImg = styled.img<IStyledImg>`
    content: url(${({ img }) => img || logoPadlock});
    width: 109px;
    height: 50px;
    alt: "Logo Linix User";
`;

export { StyledImg };