import { Button, Text, Icon } from "@inubekit/inubekit";
import { ModalWarning } from "..";
import { IModalWarning } from "@ptypes/components/login/IModalWarning";
import { MdOutlineWarningAmber } from "react-icons/md";
import { modalWarningContent } from "@config/hook/modalWarning";

const story = {
    title: "Login/ModalWarning",
    component: ModalWarning,
}

const Default = (args: IModalWarning) => <ModalWarning {...args} />

Default.args = {
    maskModalWarning: { current: null },
    children: (
        <>
            <Icon appearance="warning" icon={
                <MdOutlineWarningAmber />
            }
            />
            <Text>{modalWarningContent.modalWarningFirst.textInfo}</Text>
        </>
    ),
    auxiliaryButton: false
}

const AuxiliaryButton = (args: IModalWarning) => <ModalWarning {...args} />

AuxiliaryButton.args = {
    maskModalWarning: { current: null },
    children: (
        <>
            <Icon appearance="warning" icon={
                <MdOutlineWarningAmber />
            }
            />
            <Text>{modalWarningContent.modalWarningFirst.textInfo}</Text>
        </>
    ),
    auxiliaryButton: true
}

export default story;
export { Default, AuxiliaryButton };