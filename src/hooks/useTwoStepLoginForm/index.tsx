import React, { useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { validateUsername } from '@services/validateUsername';
import { validatePassword } from '@services/validatePassword';
import { IFormStepLabels } from '@ptypes/hooks/useTwoStepLoginForm/IFormStepLabels';
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { userNameStepLabels } from '@config/login/labels/usernameStepLabels';
import { passwordStepLabels } from '@config/login/labels/passwordStepLabels';
import { useMediaQuery } from "@inubekit/inubekit";
import { TextSize } from "@ptypes/components/TextSize";
import { messages } from '@config/hook/messages';
import { EModalWarning } from '@enum/components/EModalWarning';
import { IUseTwoStepLoginForm } from '@ptypes/hooks/IUseTwoStepLoginForm';
import { modalWarningContent } from '@config/hook/modalWarning';
import { NUMBER_ATTEMPTS } from '@config/environment';

const useTwoStepLoginForm = (data: IUseTwoStepLoginForm) => {
    const { setModalWarningType } = data;
    const [currentStep, setCurrentStep] = useState<EFormStepLabels>(EFormStepLabels.USERNAMEINPUT);
    const [inputValid, setInputValid] = useState<boolean | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<IFormStepLabels>(userNameStepLabels);
    const [numberPasswordAttempts, setNumberPasswordAttempts] = useState(0);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (inputValid === false) {
            setInputValid(null);
        }
    };

    const getAttemptsLeft = (description: string) => {
        const pattern = modalWarningContent.patternGetAttempts;
        const attempts = pattern.exec(description);

        if (attempts) {
            setNumberPasswordAttempts(Number(attempts[0]));
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (currentStep === EFormStepLabels.USERNAMEINPUT) {
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageUsernameRequired }
                }));
                return;
            }

            const response = await validateUsername({ username: inputValue });

            if (response.status === EModalWarning.USERNOTFOUND) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageIncorrectUsername }
                }));
                return;
            }

            setUserName(inputValue);
            setCurrentStep(EFormStepLabels.PASSWORDINPUT);
            setInputValid(null);
            setInputValue('');
            setLabels({
                ...passwordStepLabels,
                header: {
                    ...passwordStepLabels.header,
                }
            });


        }

        if (currentStep === EFormStepLabels.PASSWORDINPUT) {
            setModalWarningType(EModalWarning.NONE);
            setInputValid(true);

            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messagePasswordRequired }
                }));
                return;
            }

            const response = await validatePassword({ password: inputValue, username: userName });

            if (response.code === EModalWarning.CODEERRORCREDENTIALS && response.description) {
                let numberAttempts = numberPasswordAttempts + 1;
                getAttemptsLeft(response.description);
                setNumberPasswordAttempts(numberAttempts);
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageIncorrectPassword }
                }));

                if (numberAttempts == NUMBER_ATTEMPTS) {
                    setModalWarningType(EModalWarning.FIRSTWARNING);
                }

                return;
            }

            if (response.code === EModalWarning.CODEERRORLOCKACCOUNT) {
                setModalWarningType(EModalWarning.SECONDWARNING);
                return;
            }

            alert(messages.messageSuccessLogin);

            setCurrentStep(EFormStepLabels.LOGINSUCCESS);
            setInputValue('');
            setInputValid(null);
        }
    };

    const screenMobile = useMediaQuery("(max-width: 768px)");
    const showLink = currentStep === EFormStepLabels.USERNAMEINPUT;
    const widthStack = screenMobile ? "296px" : "452px";
    const labelsSize: TextSize = screenMobile ? "small" : "medium";
    const labelsSizeDifferent: TextSize = screenMobile ? "medium" : "large";


    return {
        showLink,
        currentStep,
        userName,
        handleInputChange,
        handleSubmit,
        labels,
        inputValid,
        inputValue,
        screenMobile,
        widthStack,
        labelsSize,
        labelsSizeDifferent
    };
};

export { useTwoStepLoginForm };