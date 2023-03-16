import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    allStatus: [],
    recentStatus: [],
    viewedStatus: [],
    mutedStatus: [],
    selectedStatus: {
        id: 0,
        muted: false,
        userName: 'Kene',
        lastUpdate: '',
        statusData: [],
    },
    modal: {
        isOpen: false,
    },
    amount: 0,
    total: 0,
    isLoading: true,
}

const allStatus = [
    {
        id: 0,
        muted: false,
        userName: 'Kene Nnakwue',
        profilePicture: '',
        lastUpdate: 'Today, 12:36',
        statusData: [
            {
                id: 1,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                read: false, 
            },
            {
                id: 2,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                read: false, 
            },
        ],
    },
    {
        id: 1,
        muted: false,
        userName: 'Faruq Abiodun',
        profilePicture: '',
        lastUpdate: 'Today, 12:36',
        statusData: [
            {
                id: 2,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                read: true, 
            },
            {
                id: 3,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                read: false, 
            },
        ],
    },
    {
        id: 2,
        muted: false,
        userName: 'Abubakar Muhammad',
        profilePicture: '',
        lastUpdate: 'Today, 12:36',
        statusData: [
            {
                id: 1,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true,
            },
            {
                id: 2,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
        ],
    },
    {
        id: 3,
        muted: false,
        userName: 'Salma Gambo',
        profilePicture: '',
        lastUpdate: 'Today, 12:36',
        statusData: [
            {
                id: 1,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
            {
                id: 2,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
            {
                id: 3,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
        ],
    },
    {
        id: 4,
        muted: true,
        userName: 'Fatima Muhammad',
        profilePicture: '',
        lastUpdate: 'Today, 12:36',
        statusData: [
            {
                id: 1,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
            {
                id: 2,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/6236640/pexels-photo-6236640.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
            {
                id: 3,
                media: {
                    alt: '',
                    src: 'https://images.pexels.com/photos/15098091/pexels-photo-15098091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
                },
                viewed: true, 
            },
        ],
    },
]

export const getAllStatus = createAsyncThunk('status/getAllStatus',
    async (name, thunkAPI) => {
        try {
            // console.log('thunkAPI');
            // console.log('jyugyu', thunkAPI.getState());
            // const response = await axios(url);
            // return response.data;
            return allStatus;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        openStatusModal: (state, action) => {
            state.modal.isOpen = true;
        },
        closeStatusModal: (state, action) => {
            state.modal.isOpen = false;
        },
        getSingleStatus: (state, action) => {
            const statusID = action.payload;
            console.log(`Status with the ID '${statusID}' selected!`);
            state.selectedStatus = state.allStatus.filter(status => status.id === statusID)[0];
        }
    },
    extraReducers: {
        [getAllStatus.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllStatus.fulfilled]: (state, action) => {
            state.isLoading = false;
            const allStatus = action.payload;
            state.allStatus = allStatus;
            const recentStatus = allStatus.filter(status => {
                return !status.muted && status.statusData.some(statusItem => statusItem.read === false)
            });
            const viewedStatus = allStatus.filter(status => {
                return !status.muted && !status.statusData.some(statusItem => statusItem.read === false);
            });
            const mutedStatus = allStatus.filter(status => {
                return status.muted;
            });
            state.recentStatus = recentStatus;
            state.viewedStatus = viewedStatus;
            state.mutedStatus = mutedStatus;
        },
        [getAllStatus.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export const {
    openStatusModal, closeStatusModal,
    getSingleStatus
} = statusSlice.actions;

export default statusSlice.reducer;