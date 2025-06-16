import { DynamicInputsUI } from "@components/login/DynamicInputs/interface";
import { IDynamicInputs, InputStatus } from "@ptypes/components/login/IDynamicInputs";
import { StyledMdOutlinePersonOutline, StyledMdLockOutline } from './styles'

const DynamicInputs = (props: IDynamicInputs) => {
    const {
        currentStep,
        inputValid,
        labels,
        handleInputChange,
        inputValue,
        labelsSize
    } = props;

    const icon = currentStep === "passwordInput" ?
        <StyledMdLockOutline /> :
        <StyledMdOutlinePersonOutline />;

    const status: InputStatus = inputValid === false ? 'invalid' : 'pending';
    const message = inputValid === false ? labels.validation.errorMessage : '';

    return (
        <DynamicInputsUI
            labels={labels}
            inputValid={inputValid}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            currentStep={currentStep}
            status={status}
            message={message}
            icon={icon}
            labelsSize={labelsSize}
        />
    );
}

export { DynamicInputs };