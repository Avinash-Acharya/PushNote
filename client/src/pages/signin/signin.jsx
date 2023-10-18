import React, { useEffect, useState } from 'react'
import './signin.css'
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
            error: 'Please enter a valid email'
        },
        {
            name: 'password',
            type: 'text',
            placeholder: 'Password',
            error: 'Please enter a valid password'
        }
    ]

    return (
        <div>
            {inputType.map((input) => (
                <InputBox
                    key={input.name}
                    onChange={change}
                    input={input}
                    value={values[input.name]}
                />
            ))}

        </div>
    )
}

export default Signin