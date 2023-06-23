import {Todo} from "./models.ts";

import TodoList from "./TodoList.tsx";


type Props = {
    todos: Todo[],
}


export default function TodoByStatus(props: Props) {

    const listOpen = props.todos.filter(item => item.status === "OPEN");
    const listInProgress = props.todos.filter(item => item.status === "IN_PROGRESS");
    const listDone = props.todos.filter(item => item.status === "DONE");


    return (
        <>
            <h2>Open Todos:</h2>
            <TodoList todos={listOpen}/>
            <h2>In Progress:</h2>
            <TodoList todos={listInProgress}/>
            <h2>Done:</h2>
            <TodoList todos={listDone}/>

        </>
    )

}