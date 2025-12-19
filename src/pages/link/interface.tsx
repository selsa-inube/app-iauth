import { Divider, Stack, Text, Link } from "@inubekit/inubekit";
import { ILink } from "@ptypes/components/login/ILink";
import { links } from "@config/login/links";


const LinksUI = (props: ILink) => {
    const {
        labelsSize,
        registerUrl
    } = props;

    const isEnabled = Boolean(registerUrl);

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
                {isEnabled ? (
                    <Link
                        path={registerUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        size={labelsSize}
                        type="label"
                    >
                        {links.linkUsername.textLink}
                    </Link>
                ) : (
                    <Text
                        as="span"
                        size={labelsSize}
                        appearance="gray"
                        disabled
                    >
                        {links.linkUsername.textLink}
                    </Text>
                )}
            </Stack>
        </>
    )

};

export { LinksUI };