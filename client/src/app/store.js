import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chatSlice';
import statusSlice from '../features/statusSlice';
import themeReducer from "../features/themeSlice";

const store = configureStore({
    reducer: {
        chat: chatReducer,
        theme: themeReducer,
        status: statusSlice
    }
});

export default store;