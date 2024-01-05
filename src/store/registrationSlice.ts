import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  username?: string;
  email: string;
  password: string;
}

const initialState: RegistrationState = {
  username: '',
  email: '',
  password: '',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegistrationData: (state, action: PayloadAction<{ username: string; email: string; password: string }>) => {
      const { username, email, password } = action.payload;
      state.username = username;
      state.email = email;
      state.password = password;
    },
  },
});

export const { setRegistrationData } = registrationSlice.actions;

export const selectUsername = (state: { registration: RegistrationState }) => state.registration.username;
export const selectEmail = (state: { registration: RegistrationState }) => state.registration.email;
export const selectPassword = (state: { registration: RegistrationState }) => state.registration.password;

export default registrationSlice.reducer;