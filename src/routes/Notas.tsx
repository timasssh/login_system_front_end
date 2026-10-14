import { useEffect, useState } from "react"

type message = {
    status: number,
    message: string
}

export function Notas() {
    const [message, setMessage] = useState<message | undefined>();

    useEffect(
        () => {
            fetch("/api/notas")
                .then(response => response.json())
                .then(response => setMessage(response.data))
                .catch(error => console.log(error));
        }, []);
    
    return <>
        <h1>Notas</h1>
        <h3>{message === undefined ? "carregando..." : message.message}</h3>
    </>
}