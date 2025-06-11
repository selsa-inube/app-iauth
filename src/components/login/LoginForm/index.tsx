import { LoginFormUI } from "@components/login/LoginForm/interface";
import { Links } from "@components/login/Links";
import { useTwoStepLoginForm } from "@hooks/useTwoStepLoginForm";
import { useMediaQuery } from "@inubekit/inubekit";
import { TextSize } from "@ptypes/components/login/IDynamicInputs";


const LoginForm = () => {
    const { currentStep, handleSubmit, labels, inputValid, handleInputChange, inputValue } = useTwoStepLoginForm();
    const screenMobile = useMediaQuery("(max-width: 768px)");
    const widthStack = screenMobile ? "296px" : "452px";
    const sizeLables:TextSize = screenMobile ? "small" : "medium";
    const sizeLablesDiferent:TextSize = screenMobile ? "medium" : "large";
    const link = currentStep === 'usernameInput' && <Links sizeLables={sizeLables} />

    return (
        <>
            <LoginFormUI
                currentStep={currentStep}
                handleSubmit={handleSubmit}
                labels={labels}
                inputValid={inputValid}
                handleInputChange={handleInputChange}
                inputValue={inputValue}
                link={link}
                screenMobile={widthStack}
                sizeLables={sizeLables}
                sizeLablesDiferent={sizeLablesDiferent}
            />
        </>

    );

}

export { LoginForm }
