import { horoscopes } from "../data/zodiacData";

export function getRandomHoroscope() {
	const randomIndex = Math.floor(Math.random() * horoscopes.length);
	return horoscopes[randomIndex];
}
