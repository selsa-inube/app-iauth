import { LoginForm } from "..";
import { MemoryRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "@context/themeContext";
import {StoryObj } from "@storybook/react";
import { ElementType } from "react";

const story = {
    title: "Login/LoginForm",
    component: LoginForm,
    decorators: [
        (Story: ElementType) => (
            <MemoryRouter>
                <ThemeProviderWrapper>
                    <Story />
                </ThemeProviderWrapper>
            </MemoryRouter>
        ),
    ],

}

type Story = StoryObj<typeof LoginForm>

const Default: Story = {};


export default story;
export { Default };
