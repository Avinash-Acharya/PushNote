import React, { useEffect, useState } from 'react'
import './signin.css'
import InputBox from '../../components/inputBox/inputBox'


const Signin = () => {
    const [values, setValues] = useState({
        username: '',
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
            name: "username",
            type: "text",
            placeholder: "Username",
            error: "Username should be 3-16 characters and shouldn't include any special character!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
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
            error: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container'>
            <form>
                <span className='title'>Sing-In</span>
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
                <button onClick={handleSubmit} type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default Signin