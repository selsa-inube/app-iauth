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
import { IUseTwoStepLoginForm } from '@ptypes/hooks/useTwoStepLoginForm/IUseTwoStepLoginForm';
import { environment } from "@config/environment";
import { EModalWarning } from "@enum/components/EModalWarning";

const useTwoStepLoginForm = (data: IUseTwoStepLoginForm) => {
    const { setErrorType } = data;
    const [currentStep, setCurrentStep] = useState<EFormStepLabels>(EFormStepLabels.USERNAMEINPUT);
    const [inputValid, setInputValid] = useState<boolean | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<IFormStepLabels>(userNameStepLabels);
    const [attemptsPassword, setAttemptsPassword] = useState(0);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (inputValid === false) {
            setInputValid(null);
        }
    };

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

            if (!response.success) {
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
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messagePasswordRequired }
                }));
                return;
            }

            const response = await validatePassword({ password: inputValue, username: userName });

            if (!response.success) {
                setAttemptsPassword(attemptsPassword + 1);
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageIncorrectPassword }
                }));
                return;
            }

            if(attemptsPassword > 1 && attemptsPassword < environment.NUMBER_ATTEMPTS) {
                setErrorType(EModalWarning.FIRSTWARNING);
                return;
            }

            if (attemptsPassword >= environment.NUMBER_ATTEMPTS) {
                setErrorType(EModalWarning.SECONDWARNING);
                return;
            }

            alert('¡Login exitoso!');
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