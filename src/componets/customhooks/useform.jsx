import { useState } from 'react';

function useForm(initialState) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({}); // Optional for future validation

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (submitFunction) => (event) => {
        event.preventDefault();
        submitFunction(values); // Call the provided submission function
        localStorage.setItem('formData', JSON.stringify(values)); // Store data in localStorage
        setValues(initialState); // Reset form fields
    };

    return { values, errors, handleChange, handleSubmit }; // Optional: errors for future use
}

export default useForm;
