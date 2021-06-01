import { useState } from 'react'
import { useHistory } from 'react-router'
import './stylesheets/Create.css'

function Create() {
    const [name, setName] = useState('')
    const [date, setDate] =useState('')
    const [time, setTime] = useState('')
    const history = useHistory();

    const submitHandler=(e) => {
        e.preventDefault();
        const task={name,date,time}
        
        if(name!=='' && date !=='' && time !==''){
            fetch('http://localhost:8000/tasks/',{
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(task)
        })
        .then(
            setTimeout(() => {
                history.push('/')
            }, 800)
        )
        }
        else alert('please fill all columns before submitting')

        
    }


    return (
        <div className='create'>
            <form action="" className="new-task-form">
                <span className="input-task-name" >
                    <label htmlFor="task-name" className='label'>task name : </label>
                    <br />
                    <input type="text"  className='input' value={name} onChange={(e)=>setName(e.target.value)} required/>
                </span>
                    <span className="input-task-date">
                        <label htmlFor="task-date"  className='label' >on : </label>
                        <br />
                        <input type="date"   className='input' required={true} value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </span>
                    <span className="input-task-time">
                        <label htmlFor="task-date"  className='label' value={time} >at : </label><br />
                        <input type="time" required  className='input' onChange={(e)=>setTime(e.target.value)}/>
                    </span>
                <span className="submit"  >
                <input className='submit-btn' name='submitButton' type="submit" value='Add Task' onClick={(e)=>submitHandler(e)}/>
                </span>
                

            </form>
        </div>
    )
}

export default Create
