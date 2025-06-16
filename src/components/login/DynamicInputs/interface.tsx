import { Input, Stack, Text, Link } from "@inubekit/inubekit";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";

const DynamicInputsUI = (props: IDynamicInputs) => {
    const {
        labels,
        sizeLables,
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
                    size={sizeLables}
                    type="headline"
                    weight="bold"
                    appearance="dark">
                    {labels.mainLabel}
                </Text>
                <Text
                    as="p"
                    textAlign="center"
                    type="title"
                    size={sizeLables}
                    appearance="gray">
                    {labels.subMainLabel}
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
                    placeholder={labels.inputPlaceholder}
                    type={labels.inputType}
                    label={labels.inputLabel}
                    id={labels.inputId}
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
                        {labels.linkLabel}
                    </Link>
                </Stack>
            </Stack>
        </>
    );
}

export { DynamicInputsUI };