import React, {useEffect, useState} from 'react'

function PlaceholderPostHook() {

    const [posts, setPosts] = useState([])

    useEffect( () => {        
        let url = 'https://jsonplaceholder.typicode.com/users/1/posts'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])
    

  return (
    

    <div>
      <h1>Posts</h1>
        {posts.map((el, index) => (
          <section key={el.id}>
              <h2>{index+1}. {el.title}</h2>
              <p>{el.body}</p>
          </section>
        ))}
    </div>

    
  )
}

export default PlaceholderPostHook