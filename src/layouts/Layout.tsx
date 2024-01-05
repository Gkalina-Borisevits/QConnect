import { FC, useEffect } from 'react'
import Header from '../components/header/Header';
import { Link, Outlet } from 'react-router-dom';
//import cn from 'classnames'
 import styles from './Layout.module.css'
import Footer from '../components/footer/Footer';
import RegistrationForm from '../components/registrationForm/RegistrationForm';
import LanguageSelector from '../components/selectLanguage/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Home from '../components/Home/Home';



const Layout: FC = () => {
console.log('Lets go!');
const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = localStorage.getItem('userLanguage');
    if (userLanguage) {
      i18n.changeLanguage(userLanguage);
    }
  }, [i18n]);
return (
<div className={styles.container}>

 
<Header/>
<main className={styles.main}>
{/* <RegistrationForm/> */}
<Home/>
<Outlet/>
</main>

<Footer />
</div>

);
};

export default Layout