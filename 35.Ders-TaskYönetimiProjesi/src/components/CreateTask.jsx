import { useState } from 'react'
import './CreateTask.css'

const CreateTask = (props) => {
  const [task, setTask] = useState({
    title:'',
    content:'',
  })

  const detectChange = (event) => {
    const {name, value}= event.target;
    
    setTask((prevTask) => {
      return{
        ...prevTask,
        [name]: value
      }
    })
  }

  const submitTask = (event) => {
    props.onAdd(task);
    event.preventDefault();
    setTask({
      title:'',
      content:''
    })
  }

  return (
    <div className='created-content'>
        <form className='created-form'>
            <input 
              value={task.title}
              onChange={detectChange}
              name="title" 
              className="form-control form-texti mt-3" 
              type="text" 
              placeholder="Başlık" />

            <textarea 
              value={task.content}
              onChange={detectChange}
              name="content" 
              className="form-control form-texti mt-3"  
              placeholder="İşinizi Yazınız" 
              rows={3}
            ></textarea>

            <div className="todobtnDiv">
                <button
                  onClick={submitTask} 
                  className='btn btn-primary todoBtn'>
                    Ekle
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask