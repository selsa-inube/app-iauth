import { Input, Stack, Text, Link } from "@inubekit/inubekit";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";

const DynamicInputsUI = (props: IDynamicInputs) => {
    const {
        labels,
        labelsSize,
        status,
        message,
        icon,
        handleInputChange,
        inputValue
    } = props;

    return (
        <>
            <Stack height="68px"
                alignItems="center"
                direction="column"
                justifyContent="center"
                gap="8px"
            >
                <Text as="h1"
                    textAlign="center"
                    size={labelsSize}
                    type="headline"
                    weight="bold"
                    appearance="dark">
                    {labels.header.title}
                </Text>
                <Text
                    as="p"
                    textAlign="center"
                    type="title"
                    size={labelsSize}
                    appearance="gray">
                    {labels.header.subtitle}
                </Text>
            </Stack>

            <Stack
                direction="column"
                gap="12px">
                <Input
                    size="wide"
                    status={status}
                    fullwidth={true}
                    message={message}
                    iconBefore={icon}
                    placeholder={labels.input.placeholder}
                    type={labels.input.type}
                    label={labels.input.label}
                    id={labels.input.id}
                    onChange={handleInputChange}
                    value={inputValue}
                />
                <Stack
                    justifyContent="flex-end"
                    height="16px">
                    <Link
                        path="https://www.inubekit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        type="label">
                        {labels.link.text}
                    </Link>
                </Stack>
            </Stack>
        </>
    );
}

export { DynamicInputsUI };