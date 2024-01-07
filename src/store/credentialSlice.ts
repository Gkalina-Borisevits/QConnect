import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RegistrationFormState from '../components/registrationForm/RegistrationFormState';
import { registerUserAsync } from '../actions/credentialAction';



interface UserState {
  token: any;
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  status: 'idle',
  error: null,
  token: undefined,
  user: null
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to register';
      });
  },
});

export default userSlice.reducer;