import TodoTypes from "./Todo"; 

const LOCAL_STROGE_KEY = "todo";

const TodoService = {
    // ! Get Todos
    getTodos: (): TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCAL_STROGE_KEY);
        return todoStr ? JSON.parse(todoStr) : []
    },

    // ! Adding Todo
    addTodos : (text: string):TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = { id: todos.length + 1, text, completed:false }  
        const updateTodos = {...todos, newTodo};
        localStorage.setItem(LOCAL_STROGE_KEY, JSON.stringify(updateTodos))
        return newTodo;
    },

    // !Updating The Todo
    updateTodo: (todo:TodoTypes) : TodoTypes => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo:t))
        localStorage.setItem(LOCAL_STROGE_KEY, JSON.stringify(updateTodos))
        return todo
    },

    // !Deleting The Todo
    deleteTodo: (id: number):void => {
        const todos = TodoService.getTodos()
        const updateTodo = todos.filter((todo) => todo.id !== id)
        localStorage.setItem(LOCAL_STROGE_KEY, JSON.stringify(updateTodo))
    }

}