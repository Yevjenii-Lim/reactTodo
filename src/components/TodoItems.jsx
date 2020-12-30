// import { connect } from 'http2';
import { connect } from 'react-redux';
import React from 'react';

import Item from './Item';


let TodoItems = (props) => {
// debugger
    let Items = props.data.map((i, index) => <Item text={i.text} done={i.done} id={index} key={index}></Item>)

    return (
        <div>
            {Items}
        </div>
    )
}

let mapStateToProps = (state) => {
    // debugger
    return (
        {data: state.TodoReducer.data}
    )
}



let TodoItemsContainer = connect(mapStateToProps)(TodoItems)

export default TodoItemsContainer