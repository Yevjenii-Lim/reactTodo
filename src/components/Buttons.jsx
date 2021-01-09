import React from 'react';
import { connect } from 'react-redux';
import { filterCompletedAC, filterNotCompletedAC, showAllTodos, uploadTodoActionCreactor } from '../react-redux/addTodoReducer';
import * as axios from 'axios'


let Buttons = (props) => {

    return (
        <div>
            <button onClick={props.uploader}>uploader</button>
            <button onClick={props.filterCompleted}>all complited</button>
            <button onClick={props.filterNotCompleted}>all not complited</button>
            <button onClick={props.showAll}>show all</button>
        </div>
    )
}

class ButtonsAPIContainer extends React.Component {
    uploader = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5")
        .then(resoponce => this.props.uploadTodos(resoponce.data))
    }
    render() {
        return <Buttons showAll={this.props.showAll} uploader={this.uploader} filterCompleted={this.props.filterCompleted} filterNotCompleted={this.props.filterNotCompleted}></Buttons>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.TodoReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        uploadTodos: (todos) => dispatch(uploadTodoActionCreactor(todos)),
        filterCompleted: () => dispatch(filterCompletedAC()),
        filterNotCompleted: () => dispatch(filterNotCompletedAC()),
        showAll: () => dispatch(showAllTodos())

    }
}

let ButtonsContainer = connect(mapStateToProps,mapDispatchToProps)(ButtonsAPIContainer)

export default ButtonsContainer