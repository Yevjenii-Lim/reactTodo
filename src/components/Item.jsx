import React from 'react';


let Item = (props) => {

    return (
        <div>
            <input id={props.id} type="checkbox" />
            <label htmlFor={props.id}>{props.text}</label>
        </div>
    )
}

export default Item