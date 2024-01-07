import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import LanguageSelector from "../selectLanguage/LanguageSelector"
import { Link } from "react-router-dom"
import styles from "./RegistrationForm.module.css"
import RegistrationFormState from "./RegistrationFormState"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"

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
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">{t("registration.email")}</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder={t("registration.email")}
          value={email}
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

        <button type="submit">{t("registration.submit")}</button>
        <div>
          <GoogleOAuthProvider clientId="998554809293-ee9hs016hio3dadq2uirn5jkd68usehk.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                  const decoded = jwtDecode(credentialResponse.credential)
                  console.log(decoded)
                } else {
                  console.log("Credential is undefined")
                }
              }}
              onError={() => {
                console.log("Login Failed")
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm
