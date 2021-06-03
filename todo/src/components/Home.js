import React, { useEffect, useState } from 'react'
import './stylesheets/Home.css'
import Tasks from './Tasks'
import useFetch from './useFetch'
function Home() {
    const [tasks, setTasks] = useState([])   
    const {data:Task,isLoading,error} = useFetch('http://localhost:8000/tasks')

    useEffect(() => {
                setTasks(Task)
            },[Task]
        )

    const deleteHandler = (id) => {
        setTasks(tasks.filter((task)=> task.id !== id))
        fetch('http://localhost:8000/tasks/'+id,{method : "DELETE"})
        
    }

    
    return (<>
        {error && <div className='error'>{error}</div>}
        {isLoading && <div className='isLoading'>Loading...</div>}
        {tasks ? (
             <div className='home'>
                <Tasks tasks={tasks} deleteHandler={deleteHandler}></Tasks> 
            </div>
        ):(<h2>Sorry... No task to show</h2>)}
        </>
    )
}

export default Home
