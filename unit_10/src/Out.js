import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectValue, selectText } from "./app/taskReducerSlice"

export default function Out() {

    const task1 = useSelector(selectValue)
    const dispatch = useDispatch()

    const task1Text = useSelector(selectText)

    return (
        <div>
            <hr />
            <h2>Task 1</h2>
            <p>{task1}</p>
            <p>{task1Text }</p>
        </div>
    )
}