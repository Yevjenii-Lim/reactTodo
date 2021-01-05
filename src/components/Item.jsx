import React from 'react';
import s from './styles.module.css'

let Item = (props) => {
    // debugger
    return (
        <div className={s.item}>
            <input id={props.id} onChange={() => {props.chengeState(props.id)}} type="checkbox" checked={props.checked}/>
            <label htmlFor={props.id}>{props.text}</label>
            <div>
            <button onClick={() => {props.editText(props.id)}}>Edit</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Item