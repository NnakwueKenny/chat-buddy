
import { purple, grey, green, blueGrey } from '@mui/material/colors';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  theme: {
    // typography: {
    //   fontSize: '14px', // Default font size
    //   // You can also customize the font family, weight, and other text-related styles here.
    // },
    // mode: 'light',
    palette: {
      // palette values for light mode
      mode: 'light',
      primary: {
        main: purple[600],
      },
      divider: purple[200],
      background: {
        default: 'white',
        header: purple[600],
        primary: blueGrey[900],
        paper: purple[900],
      },
      text: {
        primary: grey[800],
        header: grey[300],
        secondary: grey[600],
        unreadMessage: green[600]
      }
    },
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state, { payload }) => {
      if (payload === 'light') {
        state.theme.palette =
        {
          mode: 'light',
          // palette values for light mode
          primary: {
            main: purple[600],
          },
          divider: purple[200],
          background: {
            default: 'white',
            header: purple[600],
            primary: blueGrey[900],
          },
          text: {
            primary: grey[800],
            header: grey[300],
            secondary: grey[600],
            unreadMessage: green[600]
          },
        }
      } else {
        state.theme.palette = {
          mode: 'dark',
          // palette values for dark mode
          primary: {
            main: purple[800],
          },
          divider: {
            main: purple[700],
          },
          background: {
            default: blueGrey[900],
            header: blueGrey[800],
            primary: blueGrey[900],
          },
          text: {
            primary: grey[400],
            secondary: grey[600],
            unreadMessage: green[600]
          },
        }
      }
    }
  }
});

export const {
  toggleThemeMode
} = themeSlice.actions;

export default themeSlice.reducer;