import React, {useState} from 'react'
import Comments2ListHook from './Comments2ListHook'

function Comment2Hook() {

    const [posts, setPosts] = useState([])

    function selectHandler (event) {
        let postID = event.target.value
        let url = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
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
                <Comments2ListHook data={posts}/>
            </div>
        </div>
    )
}

export default Comment2Hook