import React, { useEffect, useState } from 'react'
import './login.css'
import InputBox from '../../components/inputBox/inputBox'


const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const change = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    useEffect(() => {
        console.log(values)
    }, [values])

    const inputType = [
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]$',
            error: 'Please enter a valid email',
            required: true
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            error: 'Wrong Password'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container'>
            <form>
                <span className='title'>Log-In</span>
                <div>
                    {inputType.map((input) => (
                        <InputBox
                            key={input.name}
                            onChange={change}
                            input={input}
                            value={values[input.name]}
                            error={input.error}
                        />
                    ))}
                </div>
                <button onClick={handleSubmit} type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Signin