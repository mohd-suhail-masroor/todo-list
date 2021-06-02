import React, { useState } from 'react'
import './stylesheets/Task.css'

function Task({task,deleteHandler}) {
    const [activeOrInactive, setActiveOrInactive] = useState('active')
    const [status, setStatus] = useState('pending')


    const activeHandler = () =>{
        if(status !== 'done'){
            if(activeOrInactive === 'active'){
                setActiveOrInactive('inactive')
            }
            else{
                setActiveOrInactive('active')
            }
        }
    }

    const statusHandler = () =>{
        if(status === 'pending'){
            if(activeOrInactive === 'active'){
                setStatus('done')
                setActiveOrInactive('inactive')
            }
        }
        else{
            setStatus('pending')
            setActiveOrInactive('active')
        }
    }
    



        return (
        <div className={`task`} key={task.id}>
            <h3 className='id'>{task.id}</h3>
            <span className={`${activeOrInactive}-task-span-1`}>
                <h2 className={`${activeOrInactive}-task-name`}>{task.name} </h2>
                <p className="time-date">{`on ${task.date} at ${task.time}`}</p>
            </span>
            <span className="task-span-2">
                <button className={`${activeOrInactive}-btn btn`} onClick={activeHandler}>{activeOrInactive}</button>
                <button className="delete-btn btn" onClick={()=>deleteHandler(task.id)}>delete</button>
                <button className= {`${status}-btn btn`} onClick={()=>statusHandler(task.id)}>{status}</button>
            </span>
        </div>
    )
}

export default Task
