import { createAsyncThunk } from "@reduxjs/toolkit";
import RegistrationFormState from "../components/registrationForm/RegistrationFormState";

export const registerUserAsync = createAsyncThunk(
    'user/registerUser',
    async (userData: RegistrationFormState) => {
      const response = await userAPI.registerUser(userData);
      return response;
    }
  );