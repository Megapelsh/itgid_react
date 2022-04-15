import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectValue } from "./app/taskReducerSlice"

export default function Out() {

    const task1 = useSelector(selectValue)
    const dispatch = useDispatch()

    return (
        <div>
            <hr />
            <h2>Task 1</h2>
            <p>{task1}</p>
        </div>
    )
}