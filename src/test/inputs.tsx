import { Input, Stack, Text, Link, IInput } from "@inubekit/inubekit";
import React from "react";

type FormStepLabels = {
    mainLabel: string;
    subMainLabel: string;
    inputLabel: string;
    inputPlaceholder: string;
    inputType: IInput['type'];
    inputId: string;
    inputIcon: React.ReactNode;
    linkLabel: string;
    messageError?: string;
};

interface DynamicInputs {
    labels: FormStepLabels,
    inputValid: boolean | null,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
}

const DynamicInputs: React.FC<DynamicInputs> = (props) => {
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
                    size="medium"
                    type="headline"
                    weight="bold"
                    appearance="dark">
                    {props.labels.mainLabel}
                </Text>
                <Text
                    as="p"
                    textAlign="center"
                    type="title"
                    size="medium"
                    appearance="gray">
                    {props.labels.subMainLabel}
                </Text>
            </Stack>

            <Stack
                direction="column"
                gap="12px"
                width="452px">
                <Input
                    size="wide"
                    status={props.inputValid === false ? 'invalid' : 'pending'}
                    fullwidth={true}
                    message={props.inputValid === false  ? props.labels.messageError : ''}
                    iconBefore={props.labels.inputIcon} 
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

export { DynamicInputs };