import React, { useState } from 'react'

function CommentHook() {

    const [posts, setPosts] = useState([])

    function selectHandler (event) {
        let postID = event.target.value
        let url = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setPosts(data)
        })
    }

    return (
        <div>
            <p>Choose post ID:</p>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                <h1>Comments</h1>
                {posts.map((el, index) => (
                    <section key={el.id}>
                        <p><b>{index + 1}. {el.email}</b></p>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default CommentHook