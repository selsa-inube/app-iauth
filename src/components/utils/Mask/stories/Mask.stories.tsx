import { Mask } from "..";
import { IMask } from "@ptypes/components/login/IMask";

const story = {
    title: "Login/Mask",
    component: Mask,
}

const Default = (args: IMask) => <Mask {...args} />

Default.args = {
    zIndex: 1,
    maskModalWarning: { current: null }
}

export default story;
export { Default };