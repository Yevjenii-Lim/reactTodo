// import { connect } from 'http2';
import { connect } from 'react-redux';
import React from 'react'
import { addTodoActionCreator, textChangerActionCreator, uploadTodoActionCreactor } from '../react-redux/addTodoReducer';
import * as axios from 'axios';



class Form extends React.Component {

    // debugger
    // constructor(props) {
    //     super(props)
    //     this.text = React.createRef()
    // }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5")
        .then(resoponce => this.props.uploadTodos(resoponce.data))
    }
    text = React.createRef()
    changeText = () => {
        let newText = this.text.current.value;
        this.props.textChangerActionCreator(newText)
    
    }
    uploader = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5")
        .then(resoponce => this.props.uploadTodos(resoponce.data))
    }
    addTodo = () => {
        this.props.addTodo()
    }
    render() {
         return (
        <div>
            <input type="text" onChange={this.changeText} value={this.props.formText} name="" id="" ref={this.text}/>
            <button onClick={this.addTodo}>Add</button>
            <button onClick={this.uploader}>Upload Todos</button>
        </div>
    )
    }
}

let mapStateToProps = (state) => {
    return ({
        formText: state.TodoReducer.formText
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        addTodo: (text) => {dispatch(addTodoActionCreator(text))},
        textChangerActionCreator: (text) => dispatch(textChangerActionCreator(text)),
        uploadTodos: (todos) => dispatch(uploadTodoActionCreactor(todos))
    })
}

let FromContainer = connect(mapStateToProps,mapDispatchToProps)(Form)

export default FromContainer