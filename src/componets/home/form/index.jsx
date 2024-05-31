import React from 'react'
import useForm from '../../customhooks/useform';
import './form.scss';


export default function Form() {
    const { values, handleChange, handleSubmit } = useForm({
        name: '',
        email: '',
    });

    const submitForm = (formData) => {
        console.log('Form submitted and stored in localStorage:', formData);
    };
    return (
        <div className="form-main">
            <div className="container">
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="heading">
                        <h1>Form</h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text" id="name" name="name" value={values.name} onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email" id="email" name="email" value={values.email} onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
};
