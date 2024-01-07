import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';


// import cn from 'classnames'
// import styles from './LanguageSelector.css'

const LanguageSelector: React.FC = () => {
    const navigate = useNavigate();
  
    const { t, i18n } = useTranslation("translation");
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);
  
    const languages = [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    ];
  
    const handleLanguageChange = (languageCode: string) => {
      setSelectedLanguage(languageCode);
      i18n.changeLanguage(languageCode);
      localStorage.setItem('userLanguage', languageCode);
      
      navigate('/registration');
    };
  
    return (
      
        <div className="container">
          <h2>Select your language:</h2>
          <ul>
            {languages.map((language) => (
              <li key={language.code} onClick={() => handleLanguageChange(language.code)}>
                {language.flag} {language.name} {language.code === selectedLanguage && '(Selected)'}
              </li>
            ))}
            <Link to="/registration">Continue to Registration</Link>
          </ul>
        </div>
      );
    };
    
    export default LanguageSelector;