import axios from "axios";

export const getZodiacDescription = async (sign, language) => {
	const lang = language === "ru" ? "original" : "translated";
	const response = await axios.post("https://poker247tech.ru/get_horoscope/", {
		sign,
		language: lang,
		period: "today",
	});
	return response.data.horoscope;
};
