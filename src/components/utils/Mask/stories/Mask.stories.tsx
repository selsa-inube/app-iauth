import { Mask } from "..";
import { IMask } from "@ptypes/components/login/IMask";
import { mask } from "@config/login/mask";

const story = {
    title: "Login/Mask",
    component: Mask,
}

const Default = (args: IMask) => <Mask {...args} />

Default.args = {
    zIndex: 1,
    backgroundColor: mask.maskModalWarning.backgroundColor,
    maskModalWarning: { current: null }
}

export default story;
export { Default };