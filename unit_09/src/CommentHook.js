import React , {useState} from 'react'

function CommentHook() {

    const [posts, setPosts] = useState([])

    function selectHandler (event) {
        let postID = event.target.value
        // let url = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`
        let url = `https://jsonplaceholder.typicode.com/posts/2/comments`
        console.log(url)
        fetch(url)
            .then(response => response.json)
            .then(data => {
                console.log(data)
                setPosts(data)
                console.log(posts)
            })
    }

  return (
      <div>
        <select name="variants" id="" onChange={selectHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <div>
            <h1>Posts</h1>
            {posts.map((el, index) => (
                <section key={el.id}>
                    <h2>{index+1}. {el.title}</h2>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>

      </div>
    


  )
}

export default CommentHook