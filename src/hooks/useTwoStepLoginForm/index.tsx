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
import { numberAttemptsDefault } from '@config/environment';

const useTwoStepLoginForm = (data: IUseTwoStepLoginForm) => {
    const { 
        setModalWarningType,
        setRedirectPortal
    } = data;
    const [currentStep, setCurrentStep] = useState<EFormStepLabels>(EFormStepLabels.USER_NAME_INPUT);
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

        if (currentStep === EFormStepLabels.USER_NAME_INPUT) {
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageUsernameRequired }
                }));
                return;
            }

            const response = await validateUsername({ username: inputValue });

            if (response.status === EModalWarning.USER_NOT_FOUND) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageIncorrectUsername }
                }));
                return;
            }

            setUserName(inputValue);
            setCurrentStep(EFormStepLabels.USER_PASSWORD_INPUT);
            setInputValid(null);
            setInputValue('');
            setLabels({
                ...passwordStepLabels,
                header: {
                    ...passwordStepLabels.header,
                }
            });


        }

        if (currentStep === EFormStepLabels.USER_PASSWORD_INPUT) {
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

            if (response.code === EModalWarning.CODE_ERROR_CREDENTIALS && response.description) {
                let numberAttempts = numberPasswordAttempts + 1;
                getAttemptsLeft(response.description);
                setNumberPasswordAttempts(numberAttempts);
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageIncorrectPassword }
                }));

                if (numberAttempts == numberAttemptsDefault) {
                    setModalWarningType(EModalWarning.FIRST_WARNING);
                }

                return;
            }

            if (response.code === EModalWarning.CODE_ERROR_LOCK_ACCOUNT) {
                setModalWarningType(EModalWarning.SECOND_WARNING);
                return;
            }
            setRedirectPortal(true);
            setCurrentStep(EFormStepLabels.LOGIN_SUCCESS);
            setInputValue('');
            setInputValid(null);
            setTimeout(() => {
                window.location.href = response.callbackUrl || '';
            }, 2000);
        }
    };

    const screenMobile = useMediaQuery("(max-width: 768px)");
    const showLink = currentStep === EFormStepLabels.USER_NAME_INPUT;
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