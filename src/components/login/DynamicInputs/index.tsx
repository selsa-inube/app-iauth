import { DynamicInputsUI } from "@components/login/DynamicInputs/interface";
import { IDynamicInputs, InputStatus } from "@ptypes/components/login/IDynamicInputs";
import { StyledMdOutlinePersonOutline, StyledMdLockOutline } from './styles'

const DynamicInputs = (props: IDynamicInputs) => {

    const icon = props.currentStep === "passwordInput" ?
        <StyledMdLockOutline /> :
        <StyledMdOutlinePersonOutline />;

    const status: InputStatus = props.inputValid === false ? 'invalid' : 'pending';
    const message = props.inputValid === false ? props.labels.messageError : '';

    return (
        <DynamicInputsUI 
                    labels={props.labels}
                    inputValid={props.inputValid}
                    handleInputChange={props.handleInputChange}
                    inputValue={props.inputValue}
                    currentStep={props.currentStep}
                    status={status}
                    message={message}
                    icon={icon}
                    sizeLables={props.sizeLables}
        />
    );
}

export { DynamicInputs };