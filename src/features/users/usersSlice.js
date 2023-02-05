import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 0, name : "Tianna Jam"},
    {id : 1, name : "Trevor Pal"},
    {id : 2, name : "Rob Willie"}
]

const usersSlice = createSlice({
    name : "users",
    initialState,
    reducers: {
        
    }
})

export default usersSlice.reducer;