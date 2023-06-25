import {Todo} from "./models.ts";
import TodoList from "./TodoList.tsx";
import './TodoByStatus.css';


type Props = {
    todos: Todo[],
    load: () => void,
}


export default function TodoByStatus(props: Props) {

    const listOpen = props.todos.filter(item => item.status === "OPEN");
    const listInProgress = props.todos.filter(item => item.status === "IN_PROGRESS");
    const listDone = props.todos.filter(item => item.status === "DONE");


    return (
        <>
            <h2>Open Todos:</h2>
            <div className={"todoByStatus"}>
                <TodoList todos={listOpen} load={props.load}/>
            </div>

            <h2>In Progress:</h2>
            <div className={"todoByStatus"}>
                <TodoList todos={listInProgress} load={props.load}/>
            </div>

            <h2>Done:</h2>
            <div className={"todoByStatus"}>
                <TodoList todos={listDone} load={props.load}/>
            </div>
        </>
    )

}