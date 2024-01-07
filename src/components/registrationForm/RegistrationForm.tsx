import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import LanguageSelector from "../selectLanguage/LanguageSelector"
import { Link } from "react-router-dom"
import styles from "./RegistrationForm.css"
import RegistrationFormState from "./RegistrationFormState"


const RegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<RegistrationFormState>({
    username: "",
    password: "",
    email: "",
  })

  const { t, i18n } = useTranslation("translation")
  const { username, password, email } = formState
  const dispatch = useDispatch()

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))

    if (name === "language") {
      i18n.changeLanguage(value)
      localStorage.setItem("userLanguage", value)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">{t("registration.username")}</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder={t("registration.username")}
        value={username}
        onChange={handleInputChange}
      />

      <label htmlFor="password">{t("registration.password")}</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder={t("registration.password")}
        value={password}
        onChange={handleInputChange}
      />

      <label htmlFor="email">{t("registration.email")}</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder={t("registration.email")}
        value={email}
        onChange={handleInputChange}
      />

      <button type="submit">{t("registration.submit")}</button>
    </form>
  )
}

export default RegistrationForm
