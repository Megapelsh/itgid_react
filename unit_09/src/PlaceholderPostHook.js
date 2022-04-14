import React, {useEffect, useState} from 'react'

function PlaceholderPostHook() {

    const [posts, setPosts] = useState([])

    useEffect( () => {
        console.log('data')
        
        let url = 'https://jsonplaceholder.typicode.com/users/1/posts'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    

  return (
    <section>
        <h2> Номер поста. Заголовок</h2>
        <p>Тело поста</p>
    </section>
  )
}

export default PlaceholderPostHook