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
            <Button appearance="warning" variant="none">{modalWarningContent.labelUnderstand}</Button>
            <Button appearance="warning">{modalWarningContent.modalWarningSecond.labelButton}</Button>
        </>
    )
}

export default story;
export { Default };