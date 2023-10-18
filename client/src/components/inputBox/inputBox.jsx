import React from 'react'
import './inputBox.css'

const InputBox = (props) => {


    return (
        <div>
            <form className='box'>
                <label htmlFor={props.input.name}>{props.input.placeholder}</label>
                <input
                    name={props.input.name}
                    placeholder={props.input.placeholder}
                    onChange={props.onChange}
                    value={props.input.value}
                />
            </form>
        </div>
    )
}

export default InputBox
