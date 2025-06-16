import { Divider, Stack, Text, Link } from "@inubekit/inubekit";
import { ILink } from "@ptypes/components/login/ILink";

const LinksUI = (props: ILink) => {
    const {
        sizeLables
    } = props;

    return (
        <>
            <Divider
                dashed={true}
            />
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                height="28px">
                <Text
                    as="span"
                    size={sizeLables}
                    appearance="gray"
                    children="¿No tienes cuenta?"
                />
                <Link
                    path="https://www.inubekit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size={sizeLables}
                    type="label"
                >
                    ¡Regístrate!
                </Link>
            </Stack>
        </>
    )

};

export { LinksUI };