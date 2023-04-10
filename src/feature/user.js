import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'editor',
    initialState: { isopen: true, user: false },
    reducers: {
        open: (state, action) => {
            state.isopen = action.payload
        },
        login: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { open, login } = userSlice.actions
export default userSlice.reducer;