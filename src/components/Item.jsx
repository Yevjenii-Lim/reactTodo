import React from "react";
// import classes from './styles.module.css';
import s from "./styles.module.css";

let Item = (props) => {


  let hide;
  let transparent;
  if (props.done === true) {
    hide = s.hide;
  
  } else {
    hide = props.checked;
}
if(props.checked === true) {
    transparent = s.blur;
}else {
    transparent = "null";
  }
  let clasess = s.item + " " + hide + " " + transparent;

//   console.log(clasess);
  return (
    <div className={clasess}>
      <input
        id={props.id}
        onChange={() => {
          props.chengeState(props.id);
        }}
        type="checkbox"
        checked={props.checked}
      />
      <label className={s.itemText} htmlFor={props.id}>
        {props.text}
      </label>
      <div>
        {/* <button onClick={() => {props.editText(props.id)}}>Edit</button> */}
        <button className={s.btn} onClick={() => props.delete(props.id)}>
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
            className="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Item;
