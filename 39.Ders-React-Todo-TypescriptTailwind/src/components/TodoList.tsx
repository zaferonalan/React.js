import React, { useState } from 'react'
import TodoService from '../TodoServis'
import TodoTypes from '../Todo'

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos())
  const [editedTodoId, setEditedTodoId] = useState<number | null>(null)
  const [editedTodoText, setEditedTodoText] = useState<string>("")

  //* function for handling edit Action
  const handleEditStart = (id:number, text:string ) => {
    setEditedTodoId(id);
    setEditedTodoText(text)
  }

  const handleEditCancel = () => {
    setEditedTodoId(null)
    setEditedTodoText("")
  }

  const handleEditSave = (id:number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text:editedTodoText,
        completed:false
      })

      setTodos((prevTodo) => prevTodo.map((todo) => (todo.id) === id ? updateTodo:todo))
    }

    setEditedTodoId(null)
    setEditedTodoText("")
  }


  // ! DeleteTodo
  const handleDelete = (id:number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  return (
    <div className="todoContainer">
      
    </div>
  )
}

export default TodoList