import { DynamicInputs } from "..";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";
import { labelsPasswrodMock } from "@mocks/components/IDynamicInputs/labelsMock/labelsPasswordMock";
import { labelsUsernameMock } from "@mocks/components/IDynamicInputs/labelsMock/labelsUsernameMock";
import { MemoryRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "@context/themeContext";
import { StoryFn } from "@storybook/react";

const story = {
    title: "Login/DynamicInputs",
    component: DynamicInputs,
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

const passwordInput = (args: IDynamicInputs) => <DynamicInputs {...args} />

passwordInput.args = {
    labels: labelsPasswrodMock,
    inputValid: null,
    handleInputChange: { action: 'input-changed' },
    inputValue: "",
    status: "pending",
    message: "",

}

const usernameInput = (args: IDynamicInputs) => <DynamicInputs {...args} />

usernameInput.args = {
    labels: labelsUsernameMock,
    inputValid: null,
    handleInputChange: { action: 'input-changed' },
    inputValue: "",
    status: "pending",
    message: "",

}

export default story;
export { passwordInput, usernameInput };
