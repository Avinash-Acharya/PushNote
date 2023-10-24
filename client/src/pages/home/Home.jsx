import React, { useState } from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/cards/Card'
import TaskTracker from '../../components/taskTracker/TaskTracker'

const Home = () => {
    const [value, setValue] = useState(false)

    const change = () => {
        setValue(!value)
    }

    console.log(value)

    return (
        <div className='container'>
            <div className={value ? "leftoff" : "left"}>
                <Sidebar
                    change={change}
                    value={value} />
            </div>
            <div className="right">
                <div className="top">
                    <TaskTracker />
                </div>
                <div className="bottom">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Home