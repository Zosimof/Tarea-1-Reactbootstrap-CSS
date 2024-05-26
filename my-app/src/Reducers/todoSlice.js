import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [{}]
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("http://localhost:3001/tasks/addTasks",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                    "authorization":"123456"
                },
                body: JSON.stringify(action.payload)
            })
            .catch(err =>{ 
                console.log(err);
            })
        },
        initaddTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
        state.value = state.value.filter((task)=> task._id!==action.payload)
        fetch("http://localhost:3001/tasks/removeTask/"+action.payload,{
            method:"DELETE",
            headers: {
                "Content-Type":"application/json",
                "authorization":"123456"
            },
        }).catch(err =>{ 
            console.log(err);
        })
    }
}
})


export const { addTodo, initaddTodo, removeTodo } = todoSlice.actions
export const selectTodos = (state) => state.todos.value

export default todoSlice.reducer