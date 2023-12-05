import { createSlice } from "@reduxjs/toolkit";


const initialState={
    taskList:[],
    selectTask:{}
}



const taskSlice=createSlice({
    name:"taskSlice",
    initialState,
    reducers:{
        addTaskList:(state,action)=>{
            const id =Math.random() * 100
            let task={...action.payload,id}
            state.taskList.push(task)
        },
        removeFromList:(state,action)=>{
            state.taskList=state.taskList.filter((task)=>task.id !== action.payload.id)
        },
        updateFrmoList:(state,action)=>{
            state.taskList =state.taskList.map((task)=>task.id === action.payload.id ? action.payload : task)
        },
        setSelectedTask:(state,action)=>{
            state.selectTask=action.payload
        }
    }
})


export const {addTaskList,removeFromList,updateFrmoList,setSelectedTask} = taskSlice.actions

export default taskSlice.reducer

