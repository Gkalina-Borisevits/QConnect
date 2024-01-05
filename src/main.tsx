import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
// import "./i18n"
import { BrowserRouter } from "react-router-dom"
// @ts-ignore
import translationDe from './locales/de/translation.json';
// @ts-ignore
import translationEn from './locales/en/translation.json';
// @ts-ignore
import translationRu from './locales/ru/translation.json';;
// @ts-ignore
import translationUk from './locales/uk/translation.json';;
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    de: {
      translation: translationDe
    },
    en: {
      translation: translationEn
    },
    ru: {
      translation: translationRu
    },
    uk: {
      translation: translationUk
    },
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  
  <BrowserRouter>
  
  <Provider store={store}>
  <I18nextProvider i18n={i18next}>
  <App />
  </I18nextProvider>
  </Provider>
  
  </BrowserRouter>

 
)
