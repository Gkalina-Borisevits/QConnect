import { createAsyncThunk } from "@reduxjs/toolkit";
import User from "../features/user/types/User";
import axios from "axios";

const API_URL = 'https://users';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userId: { userId: number }, { rejectWithValue }) => {
    try {
      const response = await axios.get<User>(`${API_URL}/${userId.userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ userId, userData }: { userId: number; userData: User }, { rejectWithValue }) => {
    try {
      const response = await axios.put<User>(`${API_URL}/${userId}`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (userId: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData: Credential) => {
      const response = await axios.post('/api/register', userData);
      return response.data;
    }
  );

  export const updateProfileFields = createAsyncThunk(
    'user/updateProfileFields',
    async (payload: { userId: number; updatedFields: Partial<User> }) => {
      const { userId, updatedFields } = payload;
      const response = await axios.patch<User>(`${API_URL}/users/${userId}`, updatedFields);
      return response.data;
    }
  );

  export const fetchPhoto = createAsyncThunk(
    'user/fetchPhoto',
    async (photoId: number): Promise<string[]> => {
      const response = await axios.get<string[]>(`${API_URL}/photos/${photoId}`);
      return response.data;
    }
  );
  
  export const createPhoto = createAsyncThunk(
    'user/createPhoto',
    async (payload: { userId: number; photoData: string[] }): Promise<string[]> => {
      const { userId, photoData } = payload;
      const response = await axios.post<string[]>(`${API_URL}/users/${userId}/photos`, photoData);
      return response.data;
    }
  );
  
  export const updatePhoto = createAsyncThunk(
    'user/updatePhoto',
    async (payload: { photoId: number; photoData: string[] }): Promise<string[]> => {
      const { photoId, photoData } = payload;
      const response = await axios.put<string[]>(`${API_URL}/photos/${photoId}`, photoData);
      return response.data;
    }
  );
  
  export const deletePhoto = createAsyncThunk(
    'user/deletePhoto',
    async (photoId: number): Promise<void> => {
      await axios.delete(`${API_URL}/photos/${photoId}`);
    }
  );
  

  export const userActions = {
    loginUser,
    updateUser,
    deleteUser,
    registerUser,
    updateProfileFields,
    fetchPhoto,
    createPhoto,
    updatePhoto,
    deletePhoto,
  };
