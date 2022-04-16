import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {add, minus, multi, division, newText} from './app/taskReducerSlice'

export default function In() {

    let task1Input = React.createRef()
    let task1InputText = React.createRef()
    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(add(task1Input.current.value))
    }

    const minusHandler = () => {
        dispatch(minus(task1Input.current.value))
    }

    const multiHandler = () => {
        dispatch(multi(task1Input.current.value))
    }

    const divisionHandler = () => {
        dispatch(division(task1Input.current.value))
    }
    
    const textHandler = () => {
        dispatch(newText(task1InputText.current.value))
    }

    
    return (
        <div>
            <input type="number" ref={task1Input}/>
            <h2>Task 1</h2>
            <button onClick={addHandler}>+</button>
            <button onClick={minusHandler}>-</button>
            <button onClick={multiHandler}>*</button>
            <button onClick={divisionHandler}>/</button>
            <br />
            <br />
            <input type="text" ref={task1InputText}/>
            <button onClick={textHandler}>text</button>
        </div>
    )
}