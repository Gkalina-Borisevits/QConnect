import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import languageSlice from "../store/languageSlice"
import registrationSlice from "../store/registrationSlice"
import userSlice from "../store/credentialSlice"
import credentialSlice from "../store/credentialSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageSlice,
    registration: registrationSlice,
    user: userSlice,
    credentials: credentialSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
