import {createSlice} from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [{}]
    },
    reducers: {
        addGoals: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals",{
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                    "authorization":"123456"
                },
                body:JSON.stringify(action.payload)
            })
            .catch(err =>{ 
                console.log(err);
            })
        },
        initaddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
    },
    removeGoal: (state, action) => {
        state.value = state.value.filter((task)=> task.id!==action.payload)
        fetch("http://localhost:3001/goals/removeGoals/"+action.payload,{
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

export const {addGoals, initaddGoal, removeGoal} = goalsSlice.actions;
export const selectGoals = (state) => state.goals.value
export default goalsSlice.reducer;