let initialState = {
    formText: '',
    data: [
        {done: false, text: 'wake up'},
        {done: false, text: 'wake up'},
        {done: false, text: 'wake up'},
        {done: false, text: 'wake up'},
        {done: false, text: 'wake up'},
    ]
}

let TodoReducer = (state = initialState, action) => {
    // debugger
    if(action.type === 'addTodo') {

        let newTodo = {
            done: false,
            text: state.formText
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
    }else {
        return state
    }
}


export let textChangerActionCreator = (text) => ({type: 'textChange', text: text}) 
export let addTodoActionCreator = (text) => ({type :'addTodo', text: text})


export default TodoReducer