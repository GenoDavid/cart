import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'editor',
    initialState: { isopen: false },
    reducers: {
        close: (state, action) => {
            state.isopen = action.payload
        },

        open: (state, action) => {
            state.isopen = action.payload
        }
    }
})
export const { open, close } = userSlice.actions
export default userSlice.reducer;