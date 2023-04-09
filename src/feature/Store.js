import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import protactSlice from "./protacte";


export const store = configureStore({
    reducer: {
        editor: userSlice,
        pro: protactSlice
    }
})