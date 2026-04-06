// app/(admin)/account/page.jsx
'use client';
import { useState } from 'react';

function Account() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const validateName = (value) => {
        if (!value.trim()) {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validateMessage = (value) => {
        if (!value.trim()) {
            setMessageError('Message is required');
        } else {
            setMessageError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate all fields
        validateName(name);
        validateEmail(email);
        validateMessage(message);

        if (!nameError && !emailError && !messageError) {
            console.log('Form submitted:', { name, email, message });
        } else {
            console.log('Validation errors:', { nameError, emailError, messageError });
        }
    };

    return (
        <div style={darkTheme}>
            <h1>Account</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => validateName(name)}
                    style={inputStyle}
                />
                {nameError && <p style={{ color: 'red' }}>{nameError}</p>}

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => validateEmail(email)}
                    style={inputStyle}
                />
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => validateMessage(message)}
                    style={inputStyle}
                ></textarea>
                {messageError && <p style={{ color: 'red' }}>{messageError}</p>}

                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}

const darkTheme = {
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: '20px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};

const inputStyle = {
    padding: '8px',
    backgroundColor: '#333333',
    color: '#ffffff',
    border: '1px solid #666666',
    borderRadius: '4px',
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#5cb85c',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default Account;
