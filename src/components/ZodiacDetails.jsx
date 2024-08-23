/* eslint-disable react/prop-types */
function ZodiacDetails({ horoscope, onBack, p }) {
    return (
        <div className="zodiac-details">
            <button onClick={onBack}>Назад</button>
            <p>{horoscope}</p>
            <p>{p}</p>
        </div>
    );
}

export default ZodiacDetails;