import React from "react";
import './CreateTodoButton.css'

const onClickCreateTodoButton = ()=> console.log("Click")
function CreateTodoButton(){
    return(
        <button className="CreateTodoButton" 
        onClick={onClickCreateTodoButton}
        >+</button>
    )
}

export {CreateTodoButton};