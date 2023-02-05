import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
    sortComparer : (a, b) => (a.name > b.name)
})

const usersSlice = createSlice({
    name : "users",
    initialState : usersAdapter.getInitialState({loading : "idle"}),
    reducers: {
        addUser : usersAdapter.addOne,
        usersLoading(state, action) {
            if (state.loading === "idle") {
                state.loading = "pending"
            }
        },
        usersReceived(state, action) {
            if (state.loading === "pending") {
                usersAdapter.setAll(state, action.payload);
                state.loading = "idle";
            }
        }
    }
})

export default usersSlice.reducer;