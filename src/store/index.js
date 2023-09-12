import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./userSlices";

const store=configureStore({
    reducer: {
        users: userSlices,
    }
})

export default store;