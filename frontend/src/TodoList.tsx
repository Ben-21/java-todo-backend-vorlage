import {Todo} from "./models.ts";
import TodoCard from "./TodoCard.tsx";


type Props = {
    todos: Todo[],
}


export default function TodoList(props: Props) {
    return (
        <>
            {props.todos.map(todo => <TodoCard todo={todo} key={todo.id}/>)}



        </>
    )
}