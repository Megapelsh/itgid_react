import React from 'react'

function CommentsListHook(props) {
  return (
    <div>
        <div>
            {/* <button onClick={onlyEven}>Only even comments</button> */}
        </div>
        {console.log(props.data)}
        {props.data.map((el, index) => (
            <section key={el.id}>
                <p><b>{index + 1}. {el.email}</b></p>
                <p>{el.body}</p>
            </section>
        ))}
    </div>
  )
}

export default CommentsListHook