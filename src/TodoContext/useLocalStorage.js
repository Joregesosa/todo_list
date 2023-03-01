import React from "react";

function UseLocalStorage() {
    return (
        function useLocalStorage(itemName, initialValue) {

            //Trabajando Con el localStorage
            const localStorageTodoItem = localStorage.getItem(itemName);
            let parsedTodoItem;

            if (!localStorageTodoItem) {

                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedTodoItem = initialValue;

            } else {

                parsedTodoItem = JSON.parse(localStorageTodoItem);
            }

            //Estados
            const [item, setItem] = React.useState(parsedTodoItem);

            // Guardar Cambios en locall Storage
            const saveItems = (newItem) => {
                localStorage.setItem(itemName, JSON.stringify(newItem));
                setItem(newItem);
            }

            // retornar   datos necesarios 

            return [
                item,
                saveItems
            ];

        }
    );
}

export { UseLocalStorage };