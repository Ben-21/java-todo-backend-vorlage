import {Todo} from "./models.ts";
import TodoCard from "./TodoCard.tsx";


type Props = {
    todos: Todo[],
    load: () => void,
}


export default function TodoList(props: Props) {
    return (
        <>
            {props.todos.map(todo => <TodoCard todo={todo} load={props.load} key={todo.id}/>)}



        </>
    )
}