import react from "react";
import Article from "./Article";
import {v4 as uuid} from "uuid";

export default function ArticleList({posts}){
    const eachPost = posts.map((post) => {
        return <Article key={uuid()} 
                title={post.title} 
                date={post.date} 
                preview={post.preview} 
                readtime={post.minutes}
                />
        })

    return(
        <main>
            {eachPost}
        </main>
    )
}