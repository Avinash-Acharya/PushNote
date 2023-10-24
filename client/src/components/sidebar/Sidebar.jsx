import React from 'react'
import './sidebar.css'
import Contacts from '../contacts/Contacts.jsx'

const Sidebar = (props) => {


    return (
        <div className='sideContainer'>
            <div className="firmInfo">
                <img className={props.value ? 'off' : 'firmLogo'} src="./assets/firm.jpg" alt='hello' />
                <span className={props.value ? 'off' : 'firmData'}>COMPANY</span>
                <span className={props.value ? 'shiftoff' : 'shift'} onClick={props.change}>+</span>
            </div>
            <div className={props.value ? 'off' : 'contacts'}>
                <Contacts />
            </div>
            <div className={props.value ? 'off' : 'userInfo'}>
                <img className='userLogo' src="./assets/user.jpg" alt='hello' />
                <span className='userData'>USER</span>
            </div>
        </div>
    )
}

export default Sidebar