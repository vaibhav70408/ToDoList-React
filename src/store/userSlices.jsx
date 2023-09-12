import {createSlice} from '@reduxjs/toolkit';

const userSlices=createSlice({
    name:"users",
    initialState: [],
    reducers:{
        addItem(state,action) {
            state.push(action.payload);
        },
        removeItem(state,action) {
           return state.filter(item => item !== action.payload);
        }
    }
})
export const { addItem, removeItem } = userSlices.actions
export default userSlices.reducer;