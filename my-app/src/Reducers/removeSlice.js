import { createSlice } from '@reduxjs/toolkit';

export const removeSlice = createSlice({
  name: 'remove',
  initialState: {
    goals: [],
  },
  reducers: {
    removeGoal: (state, action) => {
      state.goals = state.goals.filter(goal => goal.id !== action.payload.id);
    },
  },
});

export const { removeGoal } = removeSlice.actions;
export default removeSlice.reducer;
