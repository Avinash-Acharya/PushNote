import React, { useEffect, useState } from 'react'
import './community.css'
import InputBox from '../../components/inputBox/inputBox'


const Signin = () => {
    const [values, setValues] = useState({
        community: '',
        id: ''
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
            name: "community",
            type: "text",
            placeholder: "Community Name",
            error: "Enter valid Community Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            name: 'id',
            type: 'text',
            placeholder: 'ID',
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            error: 'Invalid ID'
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container'>
            <form>
                <span className='title'>Community</span>
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
                <button onClick={handleSubmit} type='submit'>Join</button>
            </form>
        </div>
    )
}

export default Signin