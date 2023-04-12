import { createSlice } from "@reduxjs/toolkit";

const username = JSON.parse(localStorage.getItem('name'))

export const userSlice = createSlice({
    name: 'editor',
    initialState: { isopen: true, user: username ? true : false, },
    reducers: {
        open: (state, action) => {
            state.isopen = action.payload
        },
        login: (state, action) => {
            state.user = action.payload
            localStorage.setItem('name', JSON.parse(state.user))
        }
    }
})
export const { open, login } = userSlice.actions
export default userSlice.reducer;
