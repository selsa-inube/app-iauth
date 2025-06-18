import React, { useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { validateUsername } from '../../services/validateUsername';
import { validatePassword } from '../../services/validatePassword';
import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels';
import { IFormStep } from '@ptypes/hooks/IStepValidationConfig';
import { userNameStepLabels, passwordStepLabels } from '@config/login/labels';
import { useMediaQuery } from "@inubekit/inubekit";
import { EFormStepLabels } from "@enum/hooks/EFormStepLabels";
import { TextSize } from "@ptypes/components/TextSize";

const useTwoStepLoginForm = () => {
    const [currentStep, setCurrentStep] = useState<IFormStep>(EFormStepLabels.UsernameInput);
    const [inputValid, setInputValid] = useState<boolean | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const [labels, setLabels] = useState<IFormStepLabels>(userNameStepLabels);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (inputValid === false) {
            setInputValid(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (currentStep === EFormStepLabels.UsernameInput) {
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'El usuario es requerido.' }
                }));
                return;
            }

            //const response = await validateUsername({ username: inputValue });
            const response = {success: true};
            if (!response.success) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'El usuario no existe o está mal escrito.' }
                }));
                return;
            }

            setUserName(inputValue);
            setCurrentStep(EFormStepLabels.PasswordInput);
            setInputValid(null);
            setInputValue('');
            setLabels({
                ...passwordStepLabels,
                header: {
                    ...passwordStepLabels.header,
                }
            });


        }

        if (currentStep === EFormStepLabels.PasswordInput) {
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'La contraseña es requerida.' }
                }));
                return;
            }

            //const response = await validatePassword({ password: inputValue, username: userName });
            const response = {success: true};
            if (!response.success) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'Contraseña incorrecta.' }
                }));
                return;
            }

            alert('¡Login exitoso!');
            setCurrentStep(EFormStepLabels.LoginSuccess);
            setInputValue('');
            setInputValid(null);
        }
    };

    const screenMobile = useMediaQuery("(max-width: 768px)");
    const showLink = currentStep === EFormStepLabels.UsernameInput;
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