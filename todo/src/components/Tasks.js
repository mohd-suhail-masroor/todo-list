import Task from './Task'
import './stylesheets/Tasks.css'
//import { useState } from 'react'
function Tasks({tasks,deleteHandler}) {
    
    

return (<>
        {tasks && tasks.map((task)=>{
            return(
                <div className='tasks' key={task.id}>
                    <Task id={task.id} task={task} deleteHandler={deleteHandler}></Task>
                </div>
            )
            
        })}
       </> 
    )
    
}

export default Tasks
