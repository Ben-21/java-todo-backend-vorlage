import React, {useEffect, useState} from "react";
import axios from "axios";
import TodoByStatus from "./TodoByStatus.tsx";


export default function App() {

    const [databaseTodos, setDatabaseTodos] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState("");


    function loadTodos() {
        axios.get("/api/todo")
            .then(response => response.data)
            .catch(console.error)
            .then(data => setDatabaseTodos(data))
    }

    useEffect(loadTodos, []);


    //Input Field ---> Add new Todo
    //===========================================
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);

    }

    function saveTodo() {
        axios.post("/api/todo", {description: inputValue, status: "OPEN"})
            .catch(console.error)
            .then(() => loadTodos())    //---> Seite aktualisieren
    }

    //===========================================

    return (
        <>
            <header></header>
            <main>
                <h1>Todo Kanban</h1>
                <TodoByStatus todos={databaseTodos} load={loadTodos}/>
            </main>
            <footer>
                <input type={"text"} value={inputValue} onChange={(event) => handleChange(event)}/>
                <button onClick={saveTodo}>Send</button>
            </footer>
        </>
    )


}