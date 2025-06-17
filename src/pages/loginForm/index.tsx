import { LoginFormUI } from "./interface";
import { useTwoStepLoginForm } from "@hooks/useTwoStepLoginForm";
import { TextSize } from "@ptypes/components/TextSize";
import { Card } from "@components/layout/Card";

const LoginForm = () => {
    const { currentStep, handleSubmit, labels, inputValid, handleInputChange, inputValue, showLink, screenMobile } = useTwoStepLoginForm();
    
    const widthStack = screenMobile ? "296px" : "452px";
    const labelsSize: TextSize = screenMobile ? "small" : "medium";
    const labelsSizeDifferent: TextSize = screenMobile ? "medium" : "large";

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
