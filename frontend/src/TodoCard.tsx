import {Todo} from "./models.ts";

type Props = {
    todo: Todo,
}


export default function TodoCard(props: Props) {

    return (
        <>
            <h4>{props.todo.description}</h4>

        </>
    )
}
