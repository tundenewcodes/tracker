import React from 'react'

const Result = ({ text, date,closedTask,reminder, reminderValue }) => {
// onclick is working on double click is not
    return (
      <div  className={`task  ${reminderValue ? 'reminder' : ''}`}>
        <div onClick={reminder}>
          <h3> {text} </h3>
          <p> {date} </p>
        </div>
        <h2  style={{color : 'red'}}
        onClick={closedTask}
            > X </h2>
           
      </div>
    )
}

export default Result