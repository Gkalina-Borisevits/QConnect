import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
//import cn from 'classnames'
import styles from './Header.module.css'
import { useAppDispatch } from "../../app/hooks";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { useTranslation } from "react-i18next";

const Header: FC = () => {
  console.log("Lets go!");
  const { t, i18n } = useTranslation("translation");
  const dispatch = useAppDispatch()

  useEffect(() => {
  }, [i18n.language]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("userLanguage", language);
    
  };
  return (
    <div className={styles.navbar}>
      <NavLink to="/">{t("home")}</NavLink>
      <NavLink to="personalInfo">{t("header.personalProfile")}</NavLink>
      <NavLink to="businessCard">{t("header.businessCard")}</NavLink>
      <NavLink to="contacts">{t("header.contacts")}</NavLink>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("uk")}>UK</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <BurgerMenu />
    </div>
  );
};

export default Header;
