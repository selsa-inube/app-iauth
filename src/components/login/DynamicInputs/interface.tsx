import { Input, Stack, Text, Link, Icon } from "@inubekit/inubekit";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";
import { MdOutlinePersonOutline, MdLockOutline } from "react-icons/md";

const DynamicInputsUI = (props: IDynamicInputs) => {
    const {
        labels,
        status,
        message,
        handleInputChange,
        inputValue,
        showUserIcon
    } = props;
    
    return (
        <>
            <Stack height="68px"
                alignItems="center"
                direction="column"
                justifyContent="center"
                gap="8px"
            >
                <Text 
                    textAlign="center"
                    size="small"
                    type="headline"
                    weight="bold"
                    appearance="dark">
                    {labels.header.title}
                </Text>
                <Text
                    textAlign="center"
                    type="title"
                    size="small"
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
                    iconBefore={
                        <Icon appearance="dark" icon={
                            !showUserIcon ?
                                <MdLockOutline /> :
                                <MdOutlinePersonOutline />
                        }
                        />
                    }
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
                        path="https://www.sistemasenlinea.com.co/"
                        target="_blank"
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