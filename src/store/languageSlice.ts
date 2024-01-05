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
      state.selectedLanguage = action.payload
    },
    setPlaceholderText: (state, action) => {
      state.placeholderText = action.payload
    },
  },
})

export const { setLanguage, setPlaceholderText } = languageSlice.actions
export const selectLanguage = (state) => state.language.selectedLanguage
export const selectPlaceholderText = (state) => state.language.placeholderText

export default languageSlice.reducer
