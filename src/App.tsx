import logo from "./logo.svg"
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Error from "./components/error/Error"
import "./App.css"
import RegistrationForm from "./components/registrationForm/RegistrationForm"
import { useTranslation } from 'react-i18next';
import PersonalInfo from "./components/personalInfo/PersonalInfo"
import { useEffect } from "react"
import LanguageSelector from "./components/selectLanguage/LanguageSelector"
import BusinessCard from "./components/businessCard/BusinessCard"

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = localStorage.getItem('userLanguage');
    if (userLanguage && i18n.languages.includes(userLanguage)) {
      i18n.changeLanguage(userLanguage);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);
   
  return (
    
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<LanguageSelector/>} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="personalInfo" element={<PersonalInfo/>} />
        <Route path="businessCard" element={<BusinessCard/>} />
       
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
