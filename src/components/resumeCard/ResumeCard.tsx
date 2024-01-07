import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
// import cn from 'classnames'
import styles from './ResumeCard.module.css'

const ResumeCard: FC = () => {
console.log('Lets go!');

const { t, i18n } = useTranslation("translation");
const dispatch = useDispatch();
const [photos, setPhotos] = useState<string[]>([]);
const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    professionalObjective: '',
    workExperience: '',
    education: '',
    skills: '',
  });
  const user = useSelector((state: RootState) => state.user);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPhotos(Array.from(event.target.files).map(file => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
     
      console.log('User data submitted:', user);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Failed to submit user data:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="photos">{t('button.addFoto')}</label>
      <input
        type="file"
        id="photos"
        name="photos"
        accept="image/*"
        multiple
        onChange={handlePhotoChange}
      />
      {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}


        <label htmlFor="firstName">{t('user.firstName')}</label>
        <input type="text" id="firstName" name="firstName" placeholder={t('user.firstName')} />

        <label htmlFor="lastName">{t('user.lastName')}</label>
        <input type="text" id="lastName" name="lastName" placeholder={t('user.lastName')} />

        <label htmlFor="birthday">{t('user.birthday')}</label>
        <input type="text" id="birthday" name="birthday" placeholder={t('user.birthday')} />

        <label htmlFor="addressCountry">{t('user.address.country')}</label>
        <input type="text" id="addressCountry" name="addressCountry" placeholder={t('user.address.country')} />

        <label htmlFor="addressCity">{t('user.address.city')}</label>
        <input type="text" id="addressCity" name="addressCity" placeholder={t('user.address.city')} />

        <label htmlFor="addressStreet">{t('user.address.street', 'user.address.zipCode')}</label>
        <input type="text" id="addressStreet" name="addressStreet" placeholder={t('user.address.street')} />

        <label htmlFor="addressZipCode">{t( 'user.address.zipCode')}</label>
        <input type="text" id="addressZipCode" name="addressZipCode" placeholder={t('user.address.zipCode')} />

        <label htmlFor="userPhone">{t( 'user.phone')}</label>
        <input type="text" id="userPhone" name="userPhone" placeholder={t('user.phone')} />

        <label htmlFor="userEmail">{t( 'user.email')}</label>
        <input type="text" id="userEmail" name="userEmail" placeholder={t('user.email')} />

    <h3>{t( 'user.education.education')}</h3>
        <label htmlFor="userEducation"></label>
        <textarea id="userEducation" name="userEducation" placeholder={t('user.education.degree')}></textarea>

        <label htmlFor="userWorkExperience">{t( 'user.workExperience')}</label>
        <textarea id="userWorkExperience" name="userWorkExperience" placeholder={t('user.workExperience')}></textarea>

        <label htmlFor="userProfessionalObjective">{t( 'user.professionalObjective')}</label>
        <textarea id="userProfessionalObjective" name="userProfessionalObjective" placeholder={t('user.professionalObjective')}></textarea>

        <label htmlFor="userProfessionalObjective">{t( 'user.professionalObjective')}</label>
        <textarea id="userProfessionalObjective" name="userProfessionalObjective" placeholder={t('user.professionalObjective')}></textarea>

        <label htmlFor="userSkills">{t( 'user.skills')}</label>
        <textarea id="userSkills" name="userSkills" placeholder={t('user.skills')}></textarea>


      <button type="submit" disabled={isSubmitting}>
      {t('button.submit')}
      </button>
    </form>
    </div>
  );
};

export default ResumeCard
