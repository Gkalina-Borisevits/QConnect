import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface LanguageState {
  name: string
  initialState: {
    selectedLanguage: string
    placeholderText: string
  }
}

const initialState: LanguageState = {
  name: "language",
  initialState: {
    selectedLanguage: "",
    placeholderText: "",
  },
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.initialState.selectedLanguage = action.payload
    },
    setPlaceholderText: (state, action) => {
      state.initialState.placeholderText = action.payload
    },
  },
})

export const { setLanguage, setPlaceholderText } = languageSlice.actions
export const selectLanguage = (state: { language: { selectedLanguage: any } }) => state.language.selectedLanguage
export const selectPlaceholderText = (state: { language: { placeholderText: any } }) => state.language.placeholderText

export default languageSlice.reducer
