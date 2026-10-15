import { useEffect, useState } from "react";
import { PostComponent } from "./PostComponent";
import type Post from "../types/Post";

import style from "./styles/PostsList.module.css";

async function fetchPosts() : Promise<Post[]> {
    const response = await fetch("/api/posts");
    
    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data.data;
}

export function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            }
        }
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }


    
    return <section className={style.postsList}>
        {posts.map((post, index) => <PostComponent key={index} title={post.title} message={post.message} />)}
    </section>
}