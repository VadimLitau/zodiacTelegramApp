/* eslint-disable react/prop-types */
import { useEffect } from 'react';
function ZodiacDetails({ horoscope, onBack, p }) {
    useEffect(() => {
        window.Telegram.WebApp.BackButton.show();

        window.Telegram.WebApp.BackButton.onClick(onBack);

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchMove = (e) => {
            touchEndX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = () => {
            if (touchEndX > touchStartX + 50) {
                onBack();
            }
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.Telegram.WebApp.BackButton.hide();
            window.Telegram.WebApp.BackButton.offClick(onBack);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onBack]);

    return (
        <div className="zodiac-details">
            <button onClick={onBack}>Назад</button>
            <p>{horoscope}</p>
            <p>{p}</p>
        </div>
    );
}

export default ZodiacDetails;