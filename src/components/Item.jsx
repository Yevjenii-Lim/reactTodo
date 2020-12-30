import React from 'react';


let Item = (props) => {
    
    return (
        <div>
            <input id={props.id} onChange={() => {props.chengeState(props.id)}} type="checkbox" checked={props.checked}/>
            {props.text}
            <button onClick={() => {props.editText(props.id)}}>Edit</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}

export default Item