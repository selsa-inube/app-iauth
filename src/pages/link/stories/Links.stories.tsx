import { Links } from "../";
import { MemoryRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "@context/themeContext";
import { ILink } from "@ptypes/components/login/ILink";
import { ElementType } from "react";

const story = {
    title: "Login/Links",
    component: Links,
    decorators: [
        (Story: ElementType) => (
            <MemoryRouter>
                <ThemeProviderWrapper>
                    {<Story />}
                </ThemeProviderWrapper>
            </MemoryRouter>
        ),
    ],

}

const LinkPhone = (args: ILink ) => <Links {...args} />
LinkPhone.args = {
    labelsSize: "small"
}

const LinkPc = (args: ILink ) => <Links {...args} />
LinkPc.args = {
    labelsSize: "medium"
}

export default story;
export { LinkPhone, LinkPc };
