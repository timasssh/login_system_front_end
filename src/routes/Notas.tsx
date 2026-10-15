import { useEffect, useState } from "react"

import type Post from "./types/Post";
import { PostsList } from "./components/PostsList";

import style from "./styles/Notas.module.css"

export function Notas() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(
        () => {
            fetch("/api/posts")
                .then(response => response.json())
                .then(response => setPosts(response.data as Array<Post>))
                .catch(error => console.log(error));
        }, []);
    
    return <main className={style.main}>
        <h1>Notas</h1>
        <PostsList />
    </main>
}