import React, { useState } from 'react';
import './Contactform.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the form data to a server
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit} className='form_items'>
                    <div className="name">
                        <div className='name_info'>
                            <label>
                                First Name:
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='name_info'>
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                    </div>
                    <div className='email'>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
