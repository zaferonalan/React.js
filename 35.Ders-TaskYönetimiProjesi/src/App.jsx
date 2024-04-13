import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return[
        ...prevTask,
        newTask
      ]
    })
  }

  const DeleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem,index)=> {
        return index !== id
      })
    })
  }

  return (
    <>
     <div className="App">
      <Header/>
      <CreateTask onAdd={addTask}/>
      <div className="row">
        {tasks.map((taskItem,index) => {
          return(
            <Tasks 
              key={index}
              id={index}
              title={taskItem.title}
              content={taskItem.content}
              onDelete={DeleteTask}
            />
          )
        })}
      </div>
     </div>
    </>
  )
}

export default App
