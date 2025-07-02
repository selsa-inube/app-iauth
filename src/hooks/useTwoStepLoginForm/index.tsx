import React, { useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { validateUsername } from '@services/validateUsername';
import { validatePassword } from '@services/validatePassword';
import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels';
import { IFormStep } from '@ptypes/hooks/IStepValidationConfig';
import { userNameStepLabels } from '@config/login/labels/usernameStepLabels';
import { passwordStepLabels } from '@config/login/labels/passwordStepLabels';
import { useMediaQuery } from "@inubekit/inubekit";
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { TextSize } from "@ptypes/components/TextSize";
import { messages } from '@config/hook/messages';
import { NUMBER_ATTEMPTS } from '@config/environment';
import { EModalWarning } from "@enum/components/EModalWarning";
import { IUseTwoStepLoginForm } from '@ptypes/hooks/IUseTwoStepLoginForm';

const useTwoStepLoginForm = (props: IUseTwoStepLoginForm) => {
    const [currentStep, setCurrentStep] = useState<IFormStep>(EFormStepLabels.USERNAMEINPUT);
    const [inputValid, setInputValid] = useState<boolean | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<IFormStepLabels>(userNameStepLabels);
    const [countAttempts, setCountAttempts] = useState(0);
    const { setShowModalError, setTypeError } = props;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (inputValid === false) {
            setInputValid(null);
        }
    };

    const handlePreventiveAttemptsModal = () => {
        if (countAttempts > 0 && countAttempts < NUMBER_ATTEMPTS) {
            setTypeError(EModalWarning.FIRSTWARNING);
            setShowModalError(true);
        } else if (countAttempts >= NUMBER_ATTEMPTS) {
            setTypeError(EModalWarning.SECONDWARNING);
            setShowModalError(true);
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

        if (currentStep === EFormStepLabels.PASSWORDINPUT && countAttempts < NUMBER_ATTEMPTS) {
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
                setCountAttempts(countAttempts + 1);
                handlePreventiveAttemptsModal();
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: messages.messageIncorrectPassword }
                }));
                return;
            }

            alert('¡Login exitoso!');
            setCurrentStep(EFormStepLabels.LOGINSUCCESS);
            setInputValid(null);
        }

        handlePreventiveAttemptsModal();

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