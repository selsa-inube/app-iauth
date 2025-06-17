import { LoginFormUI } from "./interface";
import { useTwoStepLoginForm } from "@hooks/useTwoStepLoginForm";
import { useMediaQuery } from "@inubekit/inubekit";
import { TextSize } from "@ptypes/components/TextSize";


const LoginForm = () => {
    const { currentStep, handleSubmit, labels, inputValid, handleInputChange, inputValue, showLink } = useTwoStepLoginForm();
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const widthStack = screenMobile ? "296px" : "452px";
    const labelsSize: TextSize = screenMobile ? "small" : "medium";
    const labelsSizeDiferent: TextSize = screenMobile ? "medium" : "large";

    return (
        <LoginFormUI
            currentStep={currentStep}
            handleSubmit={handleSubmit}
            labels={labels}
            inputValid={inputValid}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            screenMobile={widthStack}
            labelsSize={labelsSize}
            labelsSizeDiferent={labelsSizeDiferent}
            showLink={showLink}
        />
    );

}

export { LoginForm }
