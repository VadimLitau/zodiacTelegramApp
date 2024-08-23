/* eslint-disable react/prop-types */
function ZodiacCard({ zodiac, onClick }) {
    return (
        <div className="zodiac-card" onClick={() => onClick(zodiac.sign)}>
            <img src={zodiac.icon} alt={zodiac.name} />
            <h3>{zodiac.name}</h3>
            <p>{zodiac.period}</p>
        </div>
    );
}

export default ZodiacCard;