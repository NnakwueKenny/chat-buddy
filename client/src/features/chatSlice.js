import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {}
});

export default chatSlice.reducer;