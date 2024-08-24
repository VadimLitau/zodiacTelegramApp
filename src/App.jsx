import { useState, useEffect } from 'react';
import ZodiacCard from './components/ZodiacCard';
import ZodiacDetails from './components/ZodiacDetails';
import { getZodiacDescription } from './api/zodiacApi';
import { zodiacSignsRus, zodiacSignsEng } from './data/zodiacData'
import './App.css';




function App() {
  const [language, setLanguage] = useState('en');
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [horoscope, setHoroscope] = useState('');
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Получаем язык пользователя
      const userLanguage = window.Telegram.WebApp.initDataUnsafe?.user?.language_code;

      // Логика в зависимости от языка пользователя
      if (userLanguage === 'ru') {
        console.log('Пользователь использует русский язык.');
        setLanguage('ru')
      } else {
        console.log('Пользователь использует другой язык:', userLanguage);
        setLanguage('en')
      }
    } else {
      console.error('Telegram WebApp API не доступен.');
    }

  }, []);

  const handleZodiacClick = async (sign) => {
    const horoscope = await getZodiacDescription(sign, language);
    setHoroscope(horoscope);
    setSelectedZodiac(sign);
  };
  const handleBack = () => {
    setSelectedZodiac(null);
    setHoroscope('');
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ru' ? 'en' : 'ru'));
    handleZodiacClick()
  };

  return (
    <div className="app">
      <p>{language}</p>
      <button onClick={toggleLanguage}>
        {language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
      </button>
      {!selectedZodiac ? (
        <div className="zodiac-grid">
          {(language === 'ru' ? zodiacSignsRus : zodiacSignsEng).map((zodiac) => (
            <ZodiacCard key={zodiac.sign} zodiac={zodiac} onClick={handleZodiacClick} />

          ))}
        </div>
      ) : (
        <ZodiacDetails horoscope={horoscope} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
