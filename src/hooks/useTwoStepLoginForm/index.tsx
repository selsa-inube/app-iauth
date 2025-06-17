import React, { useState } from 'react';
import { validateRequiredField } from '../../validations/fieldsValidations';
import { validateUsername } from '../../services/validateUsername';
import { validatePassword } from '../../services/validatePassword';
import { IFormStepLabels } from '@ptypes/hooks/IFormStepLabels';
import { IFormStep } from '@ptypes/hooks/IStepValidationConfig';
import { userNameStepLabels, passwordStepLabels } from '@config/login/labels';

const useTwoStepLoginForm = () => {
    const [currentStep, setCurrentStep] = useState<IFormStep>('usernameInput');
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

        if (currentStep === 'usernameInput') {
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'El usuario es requerido.' }
                }));
                return;
            }

            const response = await validateUsername(inputValue);
            if (!response.success) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'El usuario no existe o está mal escrito.' }
                }));
                return;
            }

            setUserName(inputValue);
            setCurrentStep('passwordInput');
            setInputValid(null);
            setInputValue('');
            setLabels({
                ...passwordStepLabels,
                header: {
                    ...passwordStepLabels.header,
                    title: `Bienvenido, ${inputValue}`
                }
            });


        }

        if (currentStep === 'passwordInput') {
            if (!validateRequiredField(inputValue)) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'La contraseña es requerida.' }
                }));
                return;
            }

            const response = await validatePassword(inputValue, userName);
            if (!response.success) {
                setInputValid(false);
                setLabels(prev => ({
                    ...prev,
                    validation: { ...prev.validation, errorMessage: 'Contraseña incorrecta.' }
                }));
                return;
            }

            alert('¡Login exitoso!');
            setCurrentStep('loginSuccess');
            setInputValue('');
            setInputValid(null);
        }
    };

    const showLink = currentStep === 'usernameInput';


    return {
        showLink,
        currentStep,
        userName,
        handleInputChange,
        handleSubmit,
        labels,
        inputValid,
        inputValue
    };
};

export { useTwoStepLoginForm };