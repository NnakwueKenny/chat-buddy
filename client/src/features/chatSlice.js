import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    allChats: [
        {
            id: 0,
            
        }
    ],
    modal: {
        isOpen: false,
    },
    totalUnred: 0,
    isLoading: true,
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {}
});

export default chatSlice.reducer;