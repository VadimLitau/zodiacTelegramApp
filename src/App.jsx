import { useState, useEffect } from 'react';
import ZodiacCard from './components/ZodiacCard';
import ZodiacDetails from './components/ZodiacDetails';
// import { getHoroscope } from './api/zodiacApi';
import { zodiacSignsRus, zodiacSignsEng } from './data/zodiacData'
import './App.css';
import { getRandomHoroscope } from './helpers/getHoroscope';
import { translateText } from './api/zodiacApi';




function App() {
  const [language, setLanguage] = useState('en');
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [horoscope, setHoroscope] = useState('');
  const [test, setTest] = useState('');
  const userLanguage = window.Telegram.WebApp.initDataUnsafe?.user?.language_code;
  useEffect(() => {
    setTest(userLanguage)
    // Логика в зависимости от языка пользователя
    if (userLanguage === 'ru') {
      setLanguage('ru')
    } else {
      setLanguage('en')
    }
  }, []);

  const handleZodiacClick = async (sign) => {
    const horoscopeText = getRandomHoroscope();
    if (userLanguage === 'ru') {
      setHoroscope(horoscopeText);
    } else {
      setHoroscope(await translateText(horoscopeText, 'ru', 'en'))
    }
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
      <p className='demonstration_lang'>Язык Интерфейса: {test}</p>
      <p className='demonstration_lang'>Язык Приложения {language}</p>
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
