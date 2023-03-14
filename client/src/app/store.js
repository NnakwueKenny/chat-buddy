import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chatSlice';
import themeReducer from "../features/themeSlice";

const store = configureStore({
    reducer: {
        chat: chatReducer,
        theme: themeReducer,
    }
});

export default store;