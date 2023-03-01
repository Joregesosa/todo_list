import React from "react";
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>

            <span className={`material-symbols-outlined Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}>

                check_circle
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p-completed'}`}>{props.text}</p>

            <span className="material-symbols-outlined Icon Icon-delete"
                onClick={props.onDelete}>

                close
            </span>

        </li>
    )
}


export { TodoItem };