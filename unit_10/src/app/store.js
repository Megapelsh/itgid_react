import { configureStore } from "@reduxjs/toolkit";
import taskReducerSlice from "./taskReducerSlice";

export default configureStore({
    reducer: {
        taskReduser: taskReducerSlice
    },
})