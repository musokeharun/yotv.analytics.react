import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {name: "haruna"},
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await new Promise(() => console.log("Completed"));
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        alter: (state) => {
            state.value -= 1
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
})

//THUNKS BY HAND
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = getUser(getState());
//     if (currentValue % 2 === 1) {
//         dispatch(alter(amount));
//     }
// };

export const getUser = (state) => state.auth['user'];

export const {alter} = authSlice.actions;
export default authSlice.reducer;