import { DynamicInputs } from "../index";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";
import { labelsPasswrodMock } from "@config/mocks/components/IDynamicInputs/labelsMock/labelsPasswordMock";
import { labelsUsernameMock } from "@config/mocks/components/IDynamicInputs/labelsMock/labelsUsernameMock";
import { MemoryRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "@context/themeContext";
import { ElementType } from "react";

const story = {
    title: "Login/DynamicInputs",
    component: DynamicInputs,
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
