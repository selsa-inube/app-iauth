import { DynamicInputsUI } from "@components/inputs/DynamicInputs/interface";
import { IDynamicInputs } from "@ptypes/components/login/IDynamicInputs";
import { InputStatus } from "@ptypes/components/InputStatus";

const DynamicInputs = (props: IDynamicInputs) => {
    const {
        currentStep,
        inputValid,
        labels,
        handleInputChange,
        inputValue,
        labelsSize,
        showUserIcon
    } = props;
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
            labelsSize={labelsSize}
            showUserIcon={showUserIcon}
        />
    );
}

export { DynamicInputs };