import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  let i1 = React.createRef()
  const [st1, setSt1] = useState()

  const [st2, setSt2] = useState(0)

  const [st3, setSt3] = useState()

  const [st4, setSt4] = useState(0)

  const [st5, setSt5] = useState(0)

  const [st6, setSt6] = useState()

  let block7 = React.createRef()
  const [st7, setSt7] = useState()
  
  const [st8, setSt8] = useState('')
  
  const [st9, setSt9] = useState()
  
  const [st10, setSt10] = useState([])
  let i10 = React.createRef()

  function task1 () {
    setSt1(i1.current.value)
  }
  function task2() {
    setSt2(st2 + 1)
  }
  function task3(event) {
    setSt3(event.target.value)
  }
  function task4() {
    setSt4(st4 + 1)
  }
  function task5(event) {
    event.target.checked ? setSt5(event.target.attributes.currentvalue.value) : setSt5(0)
  }
  function task6(event) {
    setSt6(event.target.value)
  }
  function task7() {
    let r = randomInt(0, 255)
    let g = randomInt(0, 255)
    let b = randomInt(0, 255)
    const color = `rgb(${r},${g},${b})`
    setSt7(color)
    block7.current.style.backgroundColor = color
  }

  function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function task8(event) {
    console.log(event.key)
    !isNaN(event.key) ? setSt8(st8 + '1') : setSt8(st8 + '0')
  }
  function task9(event) {
    setSt9(event.target.value)
  }
  function task10() {
    let input10 = +i10.current.value

    setSt10(prevState => {
      return [...prevState, input10]
    })
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text" ref={i1}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentvalue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={i10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10.join('~')}</div>
      </section>
    </>
  );
}

export default App;
