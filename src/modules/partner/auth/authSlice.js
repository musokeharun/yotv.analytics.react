import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {"name": "haruna"},
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        alter: (state) => {
            state.value -= 1
        },
    }
})

export const getUser = (state) => state.auth['user'];

export const {alter} = authSlice.actions;
export default authSlice.reducer;