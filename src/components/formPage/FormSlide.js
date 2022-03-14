import React from 'react'

import { useState } from 'react'

const FormSlide = ({addForm}) => {

    const [itinery, setItinery] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!itinery) {
   alert('please add ooo')
   return
}
   
    addForm({ itinery, day, reminder })
    setReminder(false)
    setDay('')
    setItinery('')
  }
  
 
  
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="add Task"
            value={itinery}
            onChange={(e) => setItinery(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="set Date and time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control   form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            value={reminder}
          
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    )
}

export default FormSlide