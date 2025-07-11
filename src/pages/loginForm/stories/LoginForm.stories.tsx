import { LoginForm } from "..";
import { MemoryRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "@context/themeContext";
import { StoryFn, StoryObj } from "@storybook/react";

const story = {
    title: "Login/LoginForm",
    component: LoginForm,
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

type Story = StoryObj<typeof LoginForm>

const Default: Story = {};


export default story;
export { Default };
