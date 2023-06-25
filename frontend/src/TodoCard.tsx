import {Todo} from "./models.ts";
import axios from "axios";
import {useEffect, useState} from "react";


type Props = {
    todo: Todo,
    load: () => void,
}


export default function TodoCard(props: Props) {

    const [buttonDeleteVisible, setButtonDeleteVisible] = useState<boolean>(false);
    const [buttonAdvanceVisible, setButtonAdvanceVisible] = useState<boolean>(false);


    useEffect(() => {

        if (props.todo.status === "DONE") {
            setButtonDeleteVisible(true)
        }
    }, [props.todo.status]);


    useEffect(() => {

        if (props.todo.status === "OPEN" || props.todo.status === "IN_PROGRESS") {
            setButtonAdvanceVisible(true)
        }
    }, [props.todo.status]);


    function handleDelete() {
        axios.delete(`/api/todo/${props.todo.id}`)
            .catch(console.error)
            .then(() => props.load())
    }

    function handleAdvance() {
        if (props.todo.status === "OPEN") {
            axios.put(`/api/todo/${props.todo.id}/update`, {
                id: props.todo.id,
                description: props.todo.description,
                status: "IN_PROGRESS"
            })
                .catch(console.error)
                .then(() => props.load())
        }
        if (props.todo.status === "IN_PROGRESS") {
            axios.put(`/api/todo/${props.todo.id}/update`, {
                id: props.todo.id,
                description: props.todo.description,
                status: "DONE"
            })
                .catch(console.error)
                .then(() => props.load())
        }
    }


    return (
        <>
            <h4>{props.todo.description}</h4>
            {buttonDeleteVisible && <button onClick={handleDelete}>Delete</button>}
            {buttonAdvanceVisible && <button onClick={handleAdvance}>Advance</button>}
        </>
    )
}
