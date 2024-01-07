import React, { useEffect, useState } from "react";
import styles from "./BurgerMenu.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("translation");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
  }, [i18n.language]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("userLanguage", language);
    
  };
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.icon} onClick={toggleMenu}>
        ☰
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.navbar}>
          <div className={styles.navbar}>
      <NavLink to="/">{t("home")}</NavLink>
      <NavLink to="personalInfo">{t("header.personalProfile")}</NavLink>
      <NavLink to="businessCard">{t("header.businessCard")}</NavLink>
      <NavLink to="resumeCard">{t("header.resumeCard")}</NavLink>
      <NavLink to="contacts">{t("header.contacts")}</NavLink>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("uk")}>UK</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
      <BurgerMenu />
    </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
