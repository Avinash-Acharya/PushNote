import React, { useState } from 'react'
import './inputBox.css'

const InputBox = (props) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div>
            <form>
                <label htmlFor={props.input.name}>{props.input.placeholder}</label>
                <input
                    name={props.input.name}
                    placeholder={props.input.placeholder}
                    onChange={props.onChange}
                    value={props.input.value}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                <span className='error'>{props.error}</span>
            </form>
        </div>
    )
}

export default InputBox
