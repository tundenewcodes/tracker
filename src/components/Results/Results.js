import React from 'react'
import Result from './Result'

const Results = ({ tasks,close,reminder }) => {
  const task =  tasks.map(task => {
        return <Result
            date={task.day}
            text={task.word}
            key={task.id}
            reminderValue={task.reminder}
            reminder={() => reminder(task.id)}
        closedTask={()=>close(task.id)}/>
   })

    
    return (
        <div >
         {task}
        </div>
    )
}

export default Results
