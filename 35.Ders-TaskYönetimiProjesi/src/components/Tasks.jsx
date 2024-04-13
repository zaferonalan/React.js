import React from 'react'

const Tasks = (props) => {

    const deleteClick = () => {
        props.onDelete(props.id)
    }
  return (
    <div className="col-md-4">
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteClick} className='btn btn-danger' >Sil</button>
        </div>
    </div>
  )
}

export default Tasks