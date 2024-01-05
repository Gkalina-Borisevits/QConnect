import { FC } from 'react'
import { useTranslation } from 'react-i18next';
// import cn from 'classnames'
// import styles from './Home.module.css'

const Home: FC = () => {
console.log('Lets go!');
const [t, i18n] = useTranslation("translation");
return (
<div>
{/* <p>{t('registration.title')}</p> */}
</div>
)}

export default Home