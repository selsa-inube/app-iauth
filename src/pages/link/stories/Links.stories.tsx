import { Links } from "../";
import { MemoryRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "@context/themeContext";
import { StoryFn } from "@storybook/react";
import { ILink } from "@ptypes/components/login/ILink";

const story = {
    title: "Login/Links",
    component: Links,
    decorators: [
        (Story: StoryFn) => (
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
