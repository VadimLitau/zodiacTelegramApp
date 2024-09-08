import { useState, useEffect } from 'react';
import ZodiacCard from './components/ZodiacCard';
import ZodiacDetails from './components/ZodiacDetails';
import Loader from './components/Loader';
import { zodiacSignsRus, zodiacSignsEng } from './data/zodiacData';
import './App.css';
import { getRandomHoroscope } from './helpers/getHoroscope';
import { translateText } from './api/zodiacApi';

function App() {
  const [language, setLanguage] = useState('en');
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [horoscope, setHoroscope] = useState('');
  const [test, setTest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const userLanguage = window.Telegram.WebApp.initDataUnsafe?.user?.language_code;

  useEffect(() => {
    setTest(userLanguage);
    if (userLanguage === 'ru') {
      setLanguage('ru');
    } else {
      setLanguage('en');
    }
  }, [userLanguage]);

  const handleZodiacClick = async (sign) => {
    setIsLoading(true);
    setSelectedZodiac(sign); // Move this line here to ensure the loader is shown immediately
    const horoscopeText = getRandomHoroscope();
    if (userLanguage === 'ru') {
      setHoroscope(horoscopeText);
    } else {
      setHoroscope(await translateText(horoscopeText, 'ru', 'en'));
    }
    setIsLoading(false);
  };

  const handleBack = () => {
    setSelectedZodiac(null);
    setHoroscope('');
  };

  const toggleLanguage = async () => {
    setIsLoading(true);
    setLanguage((prevLanguage) => (prevLanguage === 'ru' ? 'en' : 'ru'));
    setHoroscope(await translateText(horoscope, language, language === 'ru' ? 'en' : 'ru'))
    setIsLoading(false);
  };

  return (
    <div className="app">
      <p className='demonstration_lang'>Язык Интерфейса: {test}</p>
      <p className='demonstration_lang'>Язык Приложения {language}</p>
      <button onClick={toggleLanguage}>
        {language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
      </button>
      {!selectedZodiac || isLoading ? (
        <div className={`zodiac-grid ${!isLoading ? "zodiac-grid_location" : ''}`}>
          {isLoading ? (
            <Loader />
          ) : (
            (language === 'ru' ? zodiacSignsRus : zodiacSignsEng).map((zodiac) => (
              <ZodiacCard key={zodiac.sign} zodiac={zodiac} onClick={() => handleZodiacClick(zodiac.sign)} />
            ))
          )}
        </div>
      ) : (
        <ZodiacDetails horoscope={horoscope} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;