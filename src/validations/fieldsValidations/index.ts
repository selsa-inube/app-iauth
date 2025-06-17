const validateRequiredField = (valueField: string) => {
    
    if (valueField.trim() === "") {
        return false;
    } else {
        return true;
    }
};

export { validateRequiredField }; 