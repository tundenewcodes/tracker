import React from 'react'
import Header from '../components/Header/Header'
import  Results from '../components/Results/Results'
import { useState } from 'react'
import FormSlide from '../components/formPage/FormSlide'

const App = () => {
 const [showForm, setShowForm] = useState(false)
const [tasks, setTasks] = useState([
  
        {
            id:1,
            word: 'doctor\'s appointment',
            day: 'Feb 5th at 2:30pm',
            reminder:true
        },
        {
            id:2,
            word: 'meeting at school',
            day: 'Feb 7th at 12:30pm',
            reminder:true
        },
        {
            id:3,
            word: 'food shopping',
            day: 'Feb 5th at 1:30pm',
            reminder:false
        }
    
])
    
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task };
      return  setTasks([...tasks, newTask]) 
    }
    const closeTask = (id) => {
        setTasks(tasks.filter(task => {
        return task.id !== id
    }))   
    }
    
    const toggleReminder = (id) => {
        setTasks(tasks.map(task => {
          return  task.id === id ? { ...task, reminder: !task.reminder } : task  // copy the task index amd change the reminder value
       }))
   }
    return (
      <div className="container">
        <Header
          title="MY TASK TRACKER"
          toggleForm={() => setShowForm(!showForm)}
          buttonText={showForm}
          btn="Close"
        />
        {showForm && <FormSlide addForm={addTask} />}
        {tasks.length > 0 ? (
          <Results reminder={toggleReminder} tasks={tasks} close={closeTask} />
        ) : (
          "no more tasks"
        )}
      </div>
    )
}

export default App
