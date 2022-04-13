import './App.css';
import React, {createElement, createRef, useState} from 'react'

function App() {
  

  const h1 = createElement('h1', {}, 'unit_08')
  const h2 = createElement('h2', {className: 'text-orange'}, 'header 2')
  const p = createElement('p', {style : {color : 'red'}}, 'this is p')
  const input = createElement('input', {defaultValue : 55})
  const p1 = createElement('p', {}, 'hi')
  const p2 = createElement('p', {}, 'world')
  const div = createElement('div', {className : 'text-grey'}, p1, p2)
  
  const val = createRef()
  const [li, setLi] = useState([])

  const addLi = () => {
    if (val.current.value) {
      const newLi = createElement('li', {}, val.current.value)
      setLi(newLi)
    }
    
  }

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}

      <div>
        <input type="text" ref={val} />
        <button onClick={addLi}>Push me</button>
        <ul>
          {li}
        </ul>
      </div>    
      
    </>
  );
}

export default App;
