import axios from "axios";

export const getZodiacDescription = async (sign, language) => {
	const response = await axios.post("https://poker247tech.ru/get_horoscope/", {
		sign,
		language,
		period: "today",
	});
	return response.data.horoscope;
};
