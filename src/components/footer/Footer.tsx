import { FC } from "react";
//import cn from 'classnames'
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return <div className={styles.footer}>
    <div className={styles.container}></div>

<h1 className={styles.text}>Политика защиты данных</h1>

   
<div className={styles.socialLinks}>
    <p> Соцсети:
        <a target="_blank" href=""><i className="fab fa-instagram"></i></a>
        <a target="_blank" href=""><i className="fa-brands fa-facebook"></i></a>
        <a target="_blank" href=""><i className="fa-brands fa-telegram"></i></a>
        <a target="_blank" href=""><i className="fa-brands fa-whatsapp"></i></a>
    <a href=" mailto:"> <i className="fa-solid fa-envelope"></i></a>
    </p>
  </div>
 
  </div>;
};

export default Footer;
