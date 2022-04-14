import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  let count4 = 0;
  const [out5, setOut5] = useState()

  let select6 = React.createRef()
  const [out6, setOut6] = useState()

  let block7 = React.createRef()

  let out8 = React.createRef()

  let out9 = React.createRef()

  let i10 = React.createRef()
  

  function task1() {
    console.log('task2')
  }
  function task2(event) {
    event.target.classList.add('active')
  }
  function task3(event) {
    console.log(event.target.value)
  }
  function task4() {
    count4++
    console.log(count4)
  }
  function task5(event) {
    let checkboxValue = event.target.attributes.currentvalue.value
    event.target.checked ? setOut5(checkboxValue) : setOut5(0)
  }
  function task6() {
    setOut6(select6.current.value)

  }
  function task7() {
    let r = randomInt(0, 255)
    let g = randomInt(0, 255)
    let b = randomInt(0, 255)
    block7.current.style.background = `rgb(${r}, ${g}, ${b})`
  }
  function randomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  function task8(event) {
    if(!isNaN(+event.key)) out8.current.innerHTML += 1
    else out8.current.innerHTML += 0
    
  }
  function task9(event) {
    out9.current.innerHTML = event.target.value
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(i10.current.value)
    console.log(ar10)
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentvalue="55" onChange={task5} />
        <div className="out-5">{out5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={select6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{out6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={out8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9" ref={out9}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={i10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
