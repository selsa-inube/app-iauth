import { Divider, Stack, Text, Link } from "@inubekit/inubekit";
import { ILink } from "@ptypes/components/login/ILink";
import { links } from "@config/login/links";


const LinksUI = (props: ILink) => {
    const {
        labelsSize
    } = props;

    return (
        <>
            <Divider
                dashed
            />
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                height="28px">
                <Text
                    as="span"
                    size={labelsSize}
                    appearance="gray"
                    children={links.linkUsername.textSpan}
                />
                <Link
                    path="https://www.inubekit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    size={labelsSize}
                    type="label"
                >
                    {links.linkUsername.textLink}
                </Link>
            </Stack>
        </>
    )

};

export { LinksUI };