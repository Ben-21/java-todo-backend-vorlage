import {Todo} from "./models.ts";
import axios from "axios";



type Props = {
    todo: Todo,
    load: () => void,
}



export default function TodoCard(props: Props) {

    function handleDelete (){
        axios.delete(`/api/todo/${props.todo.id}`)
            .catch(console.error)
            .then(() => props.load())
    }

    return (
        <>
            <h4>{props.todo.description}</h4>
            <button onClick={handleDelete}>Delete</button>

        </>
    )
}
