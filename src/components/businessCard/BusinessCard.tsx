import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import {response } from "../../store/authSlice";
// import cn from 'classnames'
import styles from './BusinessCard.module.css'

const BusinessCard: FC = () => {
console.log('Lets go!');
const { t, i18n } = useTranslation("translation");
const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photos1, setPhotos1] = useState<string[]>([]);
  const [photos2, setPhotos2] = useState<string[]>([]);
  const [photos3, setPhotos3] = useState<string[]>([]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
     
      console.log('User data submitted:', user);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Failed to submit user data:', error);
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>, setPhotos: React.Dispatch<React.SetStateAction<string[]>>) => {
    const selectedPhotos = Array.from(event.target.files || []).map((file) => URL.createObjectURL(file));
    setPhotos(selectedPhotos);
  };

  return (

    <div className={styles.container}>
      <form className={styles.form}>
      <input type="file" multiple onChange={(event) => handlePhotoChange(event, setPhotos1)} />
        <label htmlFor="photos1">{t('button.addFoto')}</label>
        {photos1.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}
        <input type="file" multiple onChange={(event) => handlePhotoChange(event, setPhotos2)} />
        <label htmlFor="photos2">{t('button.addFoto')}</label>
        {photos2.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}
        <input type="file" multiple onChange={(event) => handlePhotoChange(event, setPhotos3)} />
        <label htmlFor="photos3">{t('button.addFoto')}</label>
        {photos3.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}

        <label htmlFor="firstName">{t('user.firstName')}</label>
        <input type="text" id="firstName" name="firstName" placeholder={t('user.firstName')} />

        <label htmlFor="lastName">{t('user.lastName')}</label>
        <input type="text" id="lastName" name="lastName" placeholder={t('user.lastName')} />

        <label htmlFor="birthday">{t('user.birthday')}</label>
        <input type="text" id="birthday" name="birthday" placeholder={t('user.birthday')} />

        <label htmlFor="specialty">{t('user.specialty')}</label>
        <input type="text" id="specialty" name="specialty" placeholder={t('user.specialty')} />

        <button className={styles.button} type="button" onClick={handleSubmit}>
          {t('button.submit')}
        </button>
      </form>
    </div>
  );
};
export default BusinessCard