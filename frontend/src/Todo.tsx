
import {Todo} from "./models.ts";

type Props = {
    todo: Todo,
    }



export default function Todo(props: Props){

    return (
        <>

            {props.todo.description}

        </>
    )

}
