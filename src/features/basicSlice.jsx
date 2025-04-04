import { createSlice } from "@reduxjs/toolkit";

const basicSlice = createSlice({
    name: "basicSlice",
    initialState: {
        title: "Home",
        isLoginPage : false,
    },
    reducers: {
        update: (state, action) => {
            Object.assign(state, action.payload);
        }
    },
})

export const { update } = basicSlice.actions
export default basicSlice.reducer