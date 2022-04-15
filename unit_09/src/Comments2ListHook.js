import React, {useState, useEffect} from 'react'

function Comments2ListHook(props) {

    const [data, setData] = useState([])

    function onlyEven() {
        let a = data
        let evenPosts = a.filter((item, index) => {
            if (index % 2 === 0 ) return item
        })
        setData(evenPosts)
    }

    useEffect(() => {
        console.log('effect');
        if (props.data.length > 0) setData(props.data);
    }, [props]);

    return (
        <div>
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            {data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    )
}

export default Comments2ListHook