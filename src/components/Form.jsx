// import { connect } from 'http2';
import { connect } from "react-redux";
import React from "react";
import {
  addTodoActionCreator,
  textChangerActionCreator,
  uploadTodoActionCreactor,
} from "../react-redux/addTodoReducer";
import * as axios from "axios";
import s from "./styles.module.css";

class Form extends React.Component {
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/?_limit=3")
      .then((resoponce) => this.props.uploadTodos(resoponce.data));
  }
  text = React.createRef();
  changeText = () => {
    let newText = this.text.current.value;
    this.props.textChangerActionCreator(newText);
  };
  addTodo = () => {
    this.props.addTodo();
  };
  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.addTodo();
    }
  };
  render() {
    return (
      <div className={s.form}>
        <input
          onKeyDown={this.keyPress}
          type="text"
          className={s.input}
          onChange={this.changeText}
          value={this.props.formText}
          name=""
          id=""
          ref={this.text}
        />
        <button className={s.btnAdd, s.btn} onClick={this.addTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    formText: state.TodoReducer.formText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
    },
    textChangerActionCreator: (text) =>
      dispatch(textChangerActionCreator(text)),
    uploadTodos: (todos) => dispatch(uploadTodoActionCreactor(todos)),
  };
};

let FromContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FromContainer;
