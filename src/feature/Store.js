import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import imageSlice from "./image";


export const store = configureStore({
    reducer: {
        editor: userSlice,
        image: imageSlice,
    }
})