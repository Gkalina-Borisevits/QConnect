import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import User from '../features/user/types/User';
import UserState from '../features/user/types/UserState';

interface AuthState {
    user: User | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('userToken') || null,
    status: 'idle',
    error: null,
  };
  
  export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (_, { getState }) => {
        const { token } = (getState() as { user: UserState }).user;
      try {
        const response = await axios.get('/api/login', { headers: { Authorization: `Bearer ${token}` } });
        localStorage.setItem('userToken', response.data.token);
  
        // return { user: response.data.user, token: response.data.token };
        return response;
      } catch (error) {
        throw Error('Failed to fetch user data');
      }
    }
  );
  
  const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logoutUser: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem('userToken');
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string;
        });
    },
  });
  
  export const { logoutUser } = authSlice.actions;
  
  export default authSlice.reducer;