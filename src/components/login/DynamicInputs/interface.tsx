import { Input, Stack, Text, Link } from "@inubekit/inubekit";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";

const DynamicInputsUI = (props: IDynamicInputs) => {
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
                    size={props.sizeLables}
                    type="headline"
                    weight="bold"
                    appearance="dark">
                    {props.labels.mainLabel}
                </Text>
                <Text
                    as="p"
                    textAlign="center"
                    type="title"
                    size={props.sizeLables}
                    appearance="gray">
                    {props.labels.subMainLabel}
                </Text>
            </Stack>

            <Stack
                direction="column"
                gap="12px">
                <Input
                    size="wide"
                    status={props.status}
                    fullwidth={true}
                    message={props.message}
                    iconBefore={props.icon}
                    placeholder={props.labels.inputPlaceholder}
                    type={props.labels.inputType}
                    label={props.labels.inputLabel}
                    id={props.labels.inputId}
                    onChange={props.handleInputChange}
                    value={props.inputValue}
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
                        {props.labels.linkLabel}
                    </Link>
                </Stack>
            </Stack>
        </>
    );
}

export { DynamicInputsUI };