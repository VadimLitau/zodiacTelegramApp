/* eslint-disable react/prop-types */
import { useEffect } from 'react';
function ZodiacDetails({ horoscope, onBack, p }) {
    useEffect(() => {
        // Активируем кнопку "Назад"
        window.Telegram.WebApp.BackButton.show();

        // Назначаем обработчик события на нажатие кнопки "Назад"
        window.Telegram.WebApp.BackButton.onClick(() => {
            onBack(); // Закрываем окно описания и возвращаемся к основному списку
        });

        // Чистим обработчик и скрываем кнопку "Назад" при размонтировании компонента
        return () => {
            window.Telegram.WebApp.BackButton.hide();
            window.Telegram.WebApp.BackButton.offClick(onBack);
        };
    }, []);
    return (
        <div className="zodiac-details">
            <button onClick={onBack}>Назад</button>
            <p>{horoscope}</p>
            <p>{p}</p>
        </div>
    );
}

export default ZodiacDetails;