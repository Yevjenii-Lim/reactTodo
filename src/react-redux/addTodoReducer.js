import React from 'react'

let initialState = {
    formText: '',
    data: [
        // {completed: false, title: 'wake up'},
        // {completed: false, title: 'make breakfast'},
        // {completed: false, title: 'you tube'},
        // {completed: false, title: 'run'},
        // {completed: false, title: <input></input>},
    ]
}

let TodoReducer = (state = initialState, action) => {
    // debugger
    if(action.type === 'addTodo') {

        let newTodo = {
            completed: false,
            title: state.formText
        }
        return {
            ...state,
            data: [...state.data, newTodo],
            formText: '',
        }

    }else if(action.type === 'textChange'){
        
        return {
            ...state,
            formText: action.text
        }
    }else if(action.type === 'deleteTodo') {
        state.data.splice(action.id, 1)
        return {
            ...state,
            data: [...state.data]
        }
    }else if(action.type === 'changeState') {
        state.data[action.id].done = !state.data[action.id].done
        return {
            ...state,
            data: [...state.data]
        }
    }else if(action.type === 'editText') {
        state.data[action.id].text = <input onChange={()=> TodoReducer(state, textChangerActionCreator('gell'))} value={state.data[action.id].text}></input>

        return {
            ...state,
            data: [...state.data]
        }
    }else if(action.type === 'uploadTodos') {
        return {
            ...state,
            data: [...state.data,...action.todos]
        }
    }
    else {
        return state
    }
}

export let textChangerActionCreator = (text) => ({type: 'textChange', text: text}) 
export let addTodoActionCreator = (text) => ({type :'addTodo', text: text})
export let deleteTodoActionCreator = (id) => ({type: 'deleteTodo', id: id})
export let changeDoneActionCreator = (id) => ({type: 'changeState', id:id})
export let editTextTodoActionCreator = (id) => ({type: "editText", id:id})
export let uploadTodoActionCreactor = (todos) => ({type: 'uploadTodos', todos: todos})

export default TodoReducer