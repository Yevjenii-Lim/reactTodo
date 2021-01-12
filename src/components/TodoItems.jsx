// import { connect } from 'http2';
import { connect } from "react-redux";
import React from "react";
import Item from "./Item";
import {
  changeDoneActionCreator,
  deleteTodoActionCreator,
  editTextTodoActionCreator,
  uploadTodoActionCreactor,
} from "../react-redux/addTodoReducer";

let TodoItems = (props) => {
  // debugger

  let Items = props.data.map((i, index) => (
    <Item
      done={i.done}
      chengeState={props.changeState}
      checked={i.completed}
      text={i.title}
      delete={props.delete}
      id={index}
      key={index}
      editText={props.editText}
    ></Item>
  ));

  return <div>{Items}</div>;
};

let mapStateToProps = (state) => {
  return { data: state.TodoReducer.data };
};

let mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteTodoActionCreator(id)),
    changeState: (id) => dispatch(changeDoneActionCreator(id)),
    editText: (id) => dispatch(editTextTodoActionCreator(id)),
    uploader: (todos) => dispatch(uploadTodoActionCreactor(todos)),
  };
};

let TodoItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItems);

export default TodoItemsContainer;
