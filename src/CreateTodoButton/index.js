import React from "react";
import './CreateTodoButton.css'


function CreateTodoButton(props) {
    const onClickCreateTodoButton = () => {

        //props.setOpenModal(props.openModal ? false : true);
        props.setOpenModal(prevState => !prevState);

    }
    return (
        <button className="CreateTodoButton"
            onClick={onClickCreateTodoButton}>
            +
        </button>
    )
}

export { CreateTodoButton };