import { LoginFormUI } from "./interface";
import { useTwoStepLoginForm } from "@hooks/useTwoStepLoginForm";
import { Card } from "@components/layout/Card";
import { ILoginForm } from "@ptypes/pages/loginForm/ILoginForm";

const LoginForm = (props: ILoginForm) => {
    const {
        setModalWarningType,
        setRedirectPortal
    } = props;

    const {
        showLink,
        currentStep,
        handleInputChange,
        handleSubmit,
        labels,
        inputValid,
        inputValue,
        widthStack,
        labelsSize,
        labelsSizeDifferent
    } = useTwoStepLoginForm({setModalWarningType, setRedirectPortal});

    return (
        <Card>
            <LoginFormUI
                currentStep={currentStep}
                handleSubmit={handleSubmit}
                labels={labels}
                inputValid={inputValid}
                handleInputChange={handleInputChange}
                inputValue={inputValue}
                screenMobile={widthStack}
                labelsSize={labelsSize}
                labelsSizeDifferent={labelsSizeDifferent}
                showLink={showLink}
            />
        </Card>
    );

}

export { LoginForm }
