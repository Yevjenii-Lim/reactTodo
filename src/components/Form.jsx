// import { connect } from 'http2';
import { connect } from 'react-redux';
import React from 'react'
import { addTodoActionCreator, textChangerActionCreator } from '../react-redux/addTodoReducer';

let Form = (props) => {
    // debugger
    let text = React.createRef()
    let changeText = () => {
        let newText = text.current.value;
        props.textChangerActionCreator(newText)
    }
    return (
        <div>
            <input type="text" onChange={changeText} value={props.formText} name="" id="" ref={text}/>
            <button onClick={props.addTodo}>Add</button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return ({
        formText: state.TodoReducer.formText
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        addTodo: (text) => {dispatch(addTodoActionCreator(text))},
        textChangerActionCreator: (text) => dispatch(textChangerActionCreator(text))
    })
}

let FromContainer = connect(mapStateToProps,mapDispatchToProps)(Form)

export default FromContainer