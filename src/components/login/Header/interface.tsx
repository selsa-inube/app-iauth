import { Stack, Text } from "@inubekit/inubekit";
import logoPadlock from "@assets/img/lgo/logo-padlock-blue.png";
import { titles } from "@config/login/titles";
import { IHeader } from "@ptypes/components/login/IHeader";


const HeaderUI = (props: IHeader) => {
    const {
        labelsSizeDifferent
    } = props;
    
    return (

        <Stack
            alignItems="center"
            height="38.02px"
            justifyContent="center"
            gap="7.07px"
        >
            <img
                src={logoPadlock}
                alt="Logo Candado"
                width="31.81"
                height="31.81"
            />
            <Text
                type="title"
                size={labelsSizeDifferent}
                appearance="gray"
                weight="bold"
            >
                {titles.mainTitle}
            </Text>
        </Stack>
    );
}

export { HeaderUI };